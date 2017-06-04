import resource from 'resource-router-middleware';
import axios from 'axios';
import {constructUrl, constructSongUrl} from '../lib/SCSongsUtil'
import Song from '../lib/SongUtil';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'song',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		axios.get(constructSongUrl(id)).then( ({data}) => {
			callback(null, new Song(data));
		})
		.catch(error => {
			if (error.response) {
				callback(error.response.data, null);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
		});
	},

	/** GET / - List all entities */
	index({ params, query }, res) {
		let songQuery = ""
		let limit = 10;

		if(query.q){
			songQuery = query.q;
		}

		if(query.limit){
			limit = query.limit;
		}

		const fetchURL = constructUrl(songQuery, limit);
		axios.get(fetchURL)
		.then( ({data}) => {
			if(data.collection){
				let response = data.collection.map(song => new Song(song));
				res.jsonApi(response);
			}else{
				res.jsonApi([]);
			}
		},
		error => {
			throw error;
		})
		.catch(error => {
			res.sendStatus(500);
		})
		
	},

	/** GET /:id - Return a given entity */
	read({ song }, res) {
		res.jsonApi(song);
	}

});
