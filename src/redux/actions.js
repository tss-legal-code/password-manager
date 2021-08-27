import { GET_DB, GET_LOGGED_ID, GET_USERDATA_OF_LOGGED_USER, SET_DB, SET_LOGGED_ID } from "./localStorageActions"
import { CREATE_RECORD, DELETE_RECORD, DOWNLOAD_RECORD, LOGIN_USER, LOGOUT_USER, SET_RECORD_BEING_CREATED, SET_RECORD_BEING_UPDATED, UNSET_RECORD_BEING_CREATED, UNSET_RECORD_BEING_UPDATED, UPDATE_RECORD } from "./types"

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
        SET_DB(
            GET_DB().map(
                user =>
                    user.id !== GET_LOGGED_ID()
                        ? user
                        : {
                            id: user.id,
                            login: user.login,
                            password: user.password,
                            records: user.records.map(
                                record =>
                                    record.id !== payload.id
                                        ? record
                                        : payload
                            )
                        }
            )
        )
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
        SET_DB(
            GET_DB().map(
                user =>
                    user.id !== GET_LOGGED_ID()
                        ? user
                        : {
                            id: user.id,
                            login: user.login,
                            password: user.password,
                            records: user.records.filter(
                                record => record.id !== id
                            )
                        }
            )
        )






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
            type: "DO_NOTHING/DELETING_NOT_CONFIRMED"
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

    SET_DB(
        GET_DB().map(
            user =>
                user.id !== GET_LOGGED_ID()
                    ? user
                    : {
                        id: user.id,
                        login: user.login,
                        password: user.password,
                        records: user.records.concat(payload)
                    }
        )
    )

    return (dispatch) => {
        dispatch(unsetRecordBeingCreated())
        dispatch({
            type: CREATE_RECORD,
            payload: payload,
        })
    }
}




export const loginUser = (payload) => {
    return (dispatch) => {
        if (payload.records.length > 0) {
            payload.records.forEach(
                record => {
                    dispatch({
                        type: DOWNLOAD_RECORD,
                        payload: record,
                    })
                }
            )
        }
        dispatch({
            type: LOGIN_USER,
            payload: { id: payload.id, login: payload.login, password: payload.password },
        })
    }
}


export const logoutUser = () => {
    SET_LOGGED_ID(null)
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER
        })
    }

}

