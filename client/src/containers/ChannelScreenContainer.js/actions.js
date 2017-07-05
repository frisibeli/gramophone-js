import client from 'axios';
import {API_URL} from '../../constants/config'

export const fetchChannelStart = params => ({ type: "FETCH_CHANNEL_START", payload:{...params}});
export const fetchChannelSuccess = params => ({ type: "FETCH_CHANNEL_SUCCESS", payload:{...params} });
export const fetchChannel = (id) =>
    (dispatch, getState) => {
        dispatch(fetchChannelStart());
        return client.get(`${API_URL}/api/channels/${id}`).then(({data}) => {
            dispatch(fetchChannelSuccess(data));
            return data;
        });
    };

export const searchSongStart = params => ({ type: "SEARCH_SONG_START", payload:{...params}});
export const searchSongSuccess = params => ({ type: "SEARCH_SONG_SUCCESS", payload:{...params} });
export const searchSong = (query) =>
    (dispatch, getState) => {
        dispatch(searchSongStart());
        return client.get(`${API_URL}/api/songs?q=${query}`).then(({data}) => {
            dispatch(searchSongSuccess(data));
            return data;
        });
    };

export const addSongStart = params => ({ type: "ADD_SONG_START", payload:{...params}});
export const addSongSuccess = params => ({ type: "ADD_SONG_SUCCESS", payload:{...params} });
export const addSong = (song) =>
    (dispatch, getState) => {
        const {channel} = getState();
        dispatch(addSongStart());
        return client.put(`${API_URL}/api/channels/${channel.id}/playlist`, song).then(({data}) => {
            dispatch(addSongSuccess(song));
            return data;
        });
    };

export const removeSongStart = params => ({ type: "REMOVE_SONG_START", payload:{...params}});
export const removeSongSuccess = params => ({ type: "REMOVE_SONG_SUCCESS", payload:{...params} });
export const removeSong = (song) =>
    (dispatch, getState) => {
        const {channel} = getState();
        dispatch(removeSongStart());
        return client.delete(`${API_URL}/api/channels/${channel.id}/playlist/${song.SCID}`).then(({data}) => {
            dispatch(removeSongSuccess(song));
            return data;
        });
    };