import { ADD_POST, DELETE_POST, EDIT_POST } from '../constants/actionTypes'

const initState = {
    items: [],
}

const post = (state = {}, action) => {
    switch (action.type) {
        case EDIT_POST:
            return Object.assign({}, state, action.post);
        default:
            return state
    }
}

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return Object.assign({}, state, {
                items: state.items.concat(action.post),
            });
        case EDIT_POST:
            return Object.assign({}, state, {
                items: state.items.map(p => post(p, action))
            });
        case DELETE_POST:
            return Object.assign({}, state, {
                items: state.items.filter(post => post.id != action.postId)
            })
        default:
            return state
    }
}

export default postsReducer
