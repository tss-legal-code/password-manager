import { CREATE_RECORD, DELETE_RECORD, LOGIN_USER, LOGOUT_USER, SET_RECORD_BEING_CREATED, SET_RECORD_BEING_UPDATED, UNSET_RECORD_BEING_CREATED, UNSET_RECORD_BEING_UPDATED, UPDATE_RECORD } from "./types"

export const setRecordBeingUpdated = (id) => {

    return (dispatch) => {
        dispatch(unsetRecordBeingCreated())
        dispatch({
            type: SET_RECORD_BEING_UPDATED,
            payload: id
        })
    }
}

export const unsetRecordBeingUpdated = () => {
    return {
        type: UNSET_RECORD_BEING_UPDATED,
    }
}

// update password records
export const updateRecord = (payload) => {
    return (dispatch) => {
        dispatch(unsetRecordBeingUpdated())
        dispatch({
            type: UPDATE_RECORD,
            payload: payload
        })
    }
}

export const deleteRecordOnLogout = (id) => {
    return {
        type: DELETE_RECORD,
        payload: id
    }
}

export const deleteRecord = (id) => {
    const confirmDeletion = window.confirm(`Do you confirm deletion?`)

    if (confirmDeletion) {
        return (dispatch) => {
            dispatch(unsetRecordBeingUpdated())
            dispatch({
                type: DELETE_RECORD,
                payload: id
            })
        }
    }
    return (dispatch) => {
        dispatch({
            type: "DO_NOTHING"
        })
    }
}




export const setRecordBeingCreated = () => {
    return (dispatch) => {
        dispatch(unsetRecordBeingUpdated())
        dispatch({
            type: SET_RECORD_BEING_CREATED,
        })
    }
}

export const unsetRecordBeingCreated = () => {
    return {
        type: UNSET_RECORD_BEING_CREATED,
    }
}

export const createRecord = (payload) => {

    return (dispatch) => {
        dispatch(unsetRecordBeingCreated())
        dispatch({
            type: CREATE_RECORD,
            payload: payload,
        })
    }
}

export const loginUser = (payload) => {

    localStorage["authentificatedId"] = JSON.stringify(payload.id)
    
    return (dispatch) => {


        payload.records.forEach(record => {
        
            dispatch(createRecord(record))
        })

        dispatch({
            type: LOGIN_USER,
            payload: { id: payload.id, login: payload.login, password: payload.password },
        })
    }
}

export const logoutUser = () => {
    localStorage.authentificatedId = null
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER
        })
    }

}

