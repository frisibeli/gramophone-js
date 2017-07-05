const initState = {
    id: null,
    name: "Test",
    fetching: false,
    currentSong: 0,
    playlist: [],
    foundSongs: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_CHANNEL_START":
            return {...state, fetching:true};
        case "FETCH_CHANNEL_SUCCESS":
            return {...state,
                    fetching:false,
                    id: action.payload.data.id,
                    name: action.payload.data.name,
                    playlist:action.payload.data.playlist
            };
        case "SEARCH_SONG_SUCCESS":
            return {...state,
                    foundSongs:action.payload.data,
            };
        case "ADD_SONG_SUCCESS":
            return {...state,
                    playlist:[...state.playlist, action.payload],
            };
        case "REMOVE_SONG_SUCCESS":
            return {...state,
                    playlist:state.playlist.filter(song => song.SCID != action.payload.SCID)
            };
        default:
            return state
    }
}

export default reducer;
