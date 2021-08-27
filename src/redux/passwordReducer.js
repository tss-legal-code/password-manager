import { CREATE_RECORD, DELETE_RECORD, DOWNLOAD_RECORD, UPDATE_RECORD } from "./types"

const initialState = {

    passwords: []

}

const passwordReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_RECORD:
            return { ...state, passwords: state.passwords.concat(action.payload) }

        case UPDATE_RECORD:
            return { ...state, passwords: state.passwords.map(record => record.id === action.payload.id ? action.payload : record) }

        case DELETE_RECORD:
            return { ...state, passwords: state.passwords.filter(record => record.id !== action.payload) }

        case DOWNLOAD_RECORD:
            return { ...state, passwords: state.passwords.concat(action.payload) }

        default:
            return state
    }
}

export default passwordReducer