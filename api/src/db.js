import mongoose from 'mongoose';

export default callback => {
	mongoose.connect('mongodb://localhost/gramophone', error => {
		if(error){
			throw new Error('MongoDB Connection errror.')
		}
		callback(mongoose);
	});
}
