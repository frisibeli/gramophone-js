import { version } from '../../package.json';
import { Router } from 'express';
import channels from './channels';
import JSONApiError from '../lib/JSONApiError'
import songs from './songs';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/channels', channels({ config, db }));
	api.use('/songs', songs({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.jsonApi(
			{version}
		);
	});
	api.all('*', (req, res) => {
		throw new JSONApiError({
			title: "Not found", 
			status: 404,
			detail: "The endpoint you are looking for does not exist."
		});
	})

	return api;
}
