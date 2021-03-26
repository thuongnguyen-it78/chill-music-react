import {
    GET_CURRENT_LIST,
    GET_CURRENT_LIST_SUCCESS,
    GET_CURRENT_LIST_FAILED,
    CHANGE_AUDIO_VOLUME,
} from '../actions/playMusic'

const initialState = {
    isLoading: false,
    data: null,
    audioVolume: 1,
}

const playMusicReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CURRENT_LIST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CURRENT_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
            }
        case GET_CURRENT_LIST_FAILED:
            return {
                ...state,
                isLoading: false,
            }

        case CHANGE_AUDIO_VOLUME:
            return {
                ...state,
                audioVolume: payload,
            }
        default:
            return state
    }
}

export default playMusicReducer
