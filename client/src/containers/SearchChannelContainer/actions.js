import client from 'axios';
import {API_URL} from '../../constants/config'

export const fetchChannelsStart = params => ({ type: "FETCH_ALL_CHANNELS_START", payload:{...params}});
export const fetchChannelsSuccess = params => ({ type: "FETCH_ALL_CHANNELS_SUCCESS", payload:{...params} });
export const fetchChannels = () =>
    (dispatch, getState) => {
        dispatch(fetchChannelsStart());
        return client.get(`${API_URL}/api/channels`).then(({data}) => {
            dispatch(fetchChannelsSuccess(data));
            return data;
        });
    };