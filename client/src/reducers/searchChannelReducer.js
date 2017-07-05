const initState = {
    fetching: false,
    channels: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_ALL_CHANNELS_START":
            return {...state, fetching:true};
        case "FETCH_ALL_CHANNELS_SUCCESS":
            return {...state,
                    channels:action.payload.data,
            };
        default:
            return state
    }
}

export default reducer;
