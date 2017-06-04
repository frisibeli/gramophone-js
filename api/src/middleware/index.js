import { Router } from 'express';
import APIResponseFormatter from './APIResponseFormatter'

export default ({ config, db }) => {
	let routes = Router();

	routes.use(APIResponseFormatter);

	return routes;
}
