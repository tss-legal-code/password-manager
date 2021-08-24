import { SET_RECORD_BEING_CREATED, SET_RECORD_BEING_UPDATED, UNSET_RECORD_BEING_CREATED, UNSET_RECORD_BEING_UPDATED } from "./types"

const initialState = {
    userID: null,
    idOfRecordBeingUpdated: null,
    isRecordBeingCreated: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_RECORD_BEING_UPDATED:
            return { ...state, idOfRecordBeingUpdated: action.payload }

        case UNSET_RECORD_BEING_UPDATED:
            return { ...state, idOfRecordBeingUpdated: null }

        case SET_RECORD_BEING_CREATED:
            return { ...state, isRecordBeingCreated: true }

        case UNSET_RECORD_BEING_CREATED:
            return { ...state, isRecordBeingCreated: false }

        // case LOGIN:
        //     return { ...state, userID: action.payload,  }

        // case REGISTER:
        //     return { ...state, ...[action.payload] }

        // case LOGOUT:
        //     return { ...state, userID: null}

        // case SHOW_ALERT
        //         return { ...state, alertText: action.payload}

        // case HIDE_ALERT
        //         return { ...state, alertText: null}



        default:
            console.log('using default state')
            return state
    }
}

export default appReducer