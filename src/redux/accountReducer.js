import { } from "./types"

const initialState = {
 
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {

        // case SET_RECORD_BEING_UPDATED:
        //     return { ...state, idOfRecordBeingUpdated: action.payload }

        // case UNSET_RECORD_BEING_UPDATED:
        //     return { ...state, idOfRecordBeingUpdated: null }

        // case SET_RECORD_BEING_CREATED:
        //     return { ...state, isRecordBeingCreated: true }

        // case UNSET_RECORD_BEING_CREATED:
        //     return { ...state, isRecordBeingCreated: false }

        // case LOGIN:
        //     return { ...state, userID: action.payload,  }

        // case REGISTER:
        //     return { ...state, ...[action.payload] }

        // case LOGOUT:
        //     return { ...state, userID: null}

        default:
            return state
    }
}

export default accountReducer