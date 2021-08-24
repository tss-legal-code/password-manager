import { useSelector } from "react-redux"
import { CREATE_RECORD, DELETE_RECORD, SET_RECORD_BEING_CREATED, SET_RECORD_BEING_UPDATED, UNSET_RECORD_BEING_CREATED, UNSET_RECORD_BEING_UPDATED, UPDATE_RECORD } from "./types"

// view update  password page
export const setRecordBeingUpdated = (id) => {
    console.log(`id:::`, id)
    return {
        type: SET_RECORD_BEING_UPDATED,
        payload: id
    }
}

export const unsetRecordBeingUpdated = () => {
    return {
        type: UNSET_RECORD_BEING_UPDATED,
    }
}

// update password records
export const updateRecord = (payload) => {
    
    return {
        type: UPDATE_RECORD,
        payload: payload
    }
}
    
    
export const deleteRecord = (id) => {
    return (dispatch) => {
        dispatch(unsetRecordBeingUpdated())
        dispatch({
            type: DELETE_RECORD,
            payload: id
        })
    }
}



export const setRecordBeingCreated = () => {
    alert("in a minute we will create record")
    return {
        type: SET_RECORD_BEING_CREATED,
    }
}

export const unsetRecordBeingCreated = () => {
    return {
        type: UNSET_RECORD_BEING_CREATED,
    }
}

export const createRecord = () => {
    return {
        type: SET_RECORD_BEING_CREATED,
    }
}
