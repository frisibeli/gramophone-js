const initState = {
    playing: false,
    url: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PLAY":
            return Object.assign({}, state, {
                playing: true,
                url: action.payload.permalinkURL
            })
        case "TOGGLE_PLAYER":
            return Object.assign({}, state, {
                playing: !state.playing
            })
        default:
            return state
    }
}

export default reducer
