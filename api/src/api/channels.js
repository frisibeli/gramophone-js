import resource from 'resource-router-middleware';
import Channel from '../models/channels';
import JSONApiError from '../lib/JSONApiError'

export default ({ config, db }) => {
	let route = resource({

		/** Property name to store preloaded entity on `request`. */
		id : 'channel',

		/** For requests with an `id`, you can auto-load the entity.
		 *  Errors terminate the request, success sets `req[id] = data`.
		 */
		load(req, id, callback) {
			Channel(db).findOne({_id:id}, (err, channel) => {
				if(err || !channel){
					callback({
						errors:[
							new JSONApiError(err || {
								status:404, 
								detail:"There is no channel with such ID", 
								title: "Not Found"
							})
						]
					}, null);
					return false;
				}
				callback(err, channel);
			})
		},

		/** GET / - List all entities */
		index({ params }, res) {
			Channel(db).find((err, channels) => {
				if(err){
					res.jsonApi(err);
				}else{
					res.jsonApi(channels);
				}
			})
		},

		/** POST / - Create a new entity */
		create({body}, res) {
			let NewChannel = new Channel(db)({
				name: body.name ? body.name : "New channel",
				playlist:[]
			});
			NewChannel.save();
			res.jsonApi(NewChannel.toJSON());
		},

		/** GET /:id - Return a given entity */
		read({ channel }, res) {
			res.jsonApi(channel);
		},

		/** PUT /:id - Update a given entity */
		update({ channel, body }, res) {
			Channel(db).findOneAndUpdate({_id:channel.id}, body, (err, data) => {
				if (err) return res.status(500).json({ errors: [new JSONApiError(err)] });
				return res.status(200).jsonApi(Object.assign({}, data.toJSON(), body));
			})
		}
	});

	//Add song to playlist: PUT /:id/playlist
	route.put('/:id/playlist', ({params, body}, res) => {
		Channel(db).findOneAndUpdate(
			{ _id: params.id, 'playlist.SCID': { $ne: body.SCID } },
			{ $push: {"playlist": body} },
			{ safe: true, upsert: true },
			function(err, model) {
				if(err){
					if (err) res.status(500).json({ errors: [new JSONApiError(err)] });
					return false;
				}
				res.jsonApi(model);
			}
		);
	}),
	//Add song to playlist: PUT /:id/playlist
	route.delete('/:id/playlist/:scid', ({params, body}, res) => {
		Channel(db).findOneAndUpdate(
			{ _id: params.id },
			{ $pull: {"playlist": { "SCID":params.scid } }},
			function(err, model) {
				if (err){ 
					res.status(500).json({ errors: [new JSONApiError(err)] });
					return false;
				}
				res.jsonApi(model);
			}
		);
	})
	return route;
};
