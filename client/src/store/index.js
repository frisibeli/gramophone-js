import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import channel from '../reducers/channelReducer';
import search from '../reducers/searchChannelReducer';
import player from '../reducers/playerReducer';

const rootReducer = combineReducers({
    channel,
    search,
    player
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;