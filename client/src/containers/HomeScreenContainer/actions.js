import client from 'axios';
import {API_URL} from '../../constants/config'


export const createChannelStart = params => ({ type: "CREATE_NEW_CHANNEL_START", payload:{...params}});
export const createChannelSuccess = params => ({ type: "CREATE_NEW_CHANNEL_SUCCESS", payload:{...params} });
export const createChannel = () =>
    (dispatch, getState) => {
        dispatch(createChannelStart());
        return client.post(`${API_URL}/api/channels`).then(({data}) => {
            dispatch(createChannelSuccess(data));
            return data;
        })
    };
