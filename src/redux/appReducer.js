import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, SET_RECORD_BEING_CREATED, SET_RECORD_BEING_UPDATED, UNSET_RECORD_BEING_CREATED, UNSET_RECORD_BEING_UPDATED } from "./types"

const initialState = {
    userId: null,
    userLogin: null,
    userPassword: null,

    idOfRecordBeingUpdated: null,
    isRecordBeingCreated: false,
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

        case LOGIN_USER:
            return { ...state, userId: action.payload.id, userLogin: action.payload.login, userPassword: action.payload.password}

        case LOGOUT_USER:
            return { ...state, userId: null,  userLogin: null, userPassword: null, idOfRecordBeingUpdated: null, isRecordBeingCreated: false }

        // case REGISTER_USER:
        //     return { ...state, ...[action.payload] }


        default:
            console.log('default app')
            return state
    }
}

export default appReducer