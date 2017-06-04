import moment from 'moment';
import config from '../config'

const CLIENT_ID = config.clientID;

const GENRES = [
	'chill',
	'deep',
	'dubstep',
	'house',
	'progressive',
	'tech',
	'trance',
	'tropical',
];

const GENRES_MAP = GENRES.reduce((obj, genre) =>
	Object.assign({}, obj, {
		[genre]: 1,
	}), {});

const IMAGE_SIZES = {
	LARGE: 't300x300',
	XLARGE: 't500x500',
};

export function constructUrl(category, limit=10) {
	let result = 'https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=' +
		`${CLIENT_ID}&limit=${limit}&offset=0`;

	if (category in GENRES_MAP) {
		if (category !== 'house'
		&& category !== 'trance'
		&& category !== 'dubstep') {
			category = `${category} house`;
		}

		result += `&tags=${category}`;
	} else {
		result += `&q=${category}`;
	}

	return result;
}

export function constructSongCommentsUrl(songId) {
		//https://api.soundcloud.com/app/v2/tracks/204953710/comments?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
	return `https://api.soundcloud.com/tracks/${songId}/comments?client_id=${CLIENT_ID}`;
}

export function constructSongUrl(songId) {
		//https://api-v2.soundcloud.com/tracks/${song_id}?client_id=${CLIENT_ID}
	return `https://api.soundcloud.com/tracks/${songId}?client_id=${CLIENT_ID}`;
}

export function constructUserSongsUrl(userId) {
		//https://api.soundcloud.com/users/32356019/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z
	return `https://api.soundcloud.com/users/${userId}/tracks?client_id=${CLIENT_ID}`;
}

export function fetchWaveformData(waveformUrl) {
	return fetch(waveformUrl)
		.then(response => response.json())
		.then(json => json.samples)
		.catch(err => { throw err; });
}

export function getImageUrl(s, size = null) {
	let str = s;
	if (!str) {
		return '';
	}

	str = str.replace('http:', '');

	switch (size) {
		case IMAGE_SIZES.LARGE:
			return str.replace('large', IMAGE_SIZES.LARGE);
		case IMAGE_SIZES.XLARGE:
			return str.replace('large', IMAGE_SIZES.XLARGE);
		default:
			return str;
	}
}