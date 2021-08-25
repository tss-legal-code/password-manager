import { CREATE_RECORD, DELETE_RECORD, LOGIN_USER, LOGOUT_USER, REGISTER_USER, SET_RECORD_BEING_CREATED, SET_RECORD_BEING_UPDATED, UNSET_RECORD_BEING_CREATED, UNSET_RECORD_BEING_UPDATED, UPDATE_RECORD } from "./types"

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
    })}
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


    console.log(`111payload`, payload)
    console.log(`222payload.records`, payload.records)
    console.log(`333{id: payload.id, login: payload.login, password: payload.password}`, { id: payload.id, login: payload.login, password: payload.password })

    return (dispatch) => {

        console.log("start dispatching///")

        payload.records.forEach(record => {
            console.log("44dispatch CREATE_RECORD")
            console.log(`55current-record`, record)
            dispatch(createRecord(record))
        })

        console.log("66dispatch LOGIN_USER")

        console.log("77dispatch LOGIN_USER")

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

// export const registerUser = (payload) => {

//     return {
//         type: REGISTER_USER,
//         payload: payload
//     }
// }

