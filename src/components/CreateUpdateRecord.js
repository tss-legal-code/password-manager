import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRecord, unsetRecordBeingCreated, unsetRecordBeingUpdated, updateRecord } from "../redux/actions"


const CreateUpdateRecord = () => {

    const dispatch = useDispatch()

    const [tempAppointment, setTempAppointment] = useState("")
    const [tempPassword, setTempPassword] = useState("")


    // if record is being created from scratch
    const isRecordBeingCreated = useSelector(state => state.app.isRecordBeingCreated)
    const doPasswordsExist = useSelector(state => state.password.passwords.length)
    const possibleNextRecordId = Math.max(...useSelector(state => state.password.passwords.map(element => element.id))) + 1
    const newRecordId = doPasswordsExist ?  possibleNextRecordId : 1

    // if record is being updated and or deleted
    const idOfRecordBeingUpdated = useSelector(state => state.app.idOfRecordBeingUpdated)
    const currentRecord = useSelector(state => state.password.passwords.filter(record => record.id === idOfRecordBeingUpdated))[0]
    const currentState = useSelector(state => state.password.passwords)

    // for purposes of render of actual values after updating and saving them
    useEffect(() => {
        if (idOfRecordBeingUpdated) {
            setTempAppointment(currentRecord.appointment)
            setTempPassword(currentRecord.password)
        } else {
            setTempAppointment("")
            setTempPassword("")
        }
    }, [idOfRecordBeingUpdated])


    const submitCreateRecord = (e) => {
        e.preventDefault()

        if (!tempAppointment || !tempPassword) {
            alert("please enter both appointment and password")
        }

        dispatch(createRecord({
            id: newRecordId,
            appointment: tempAppointment,
            password: tempPassword
        }))

        // localStorage.users = JSON.stringify(currentState)
        // console.log(`localStorage.users`, JSON.parse(localStorage.users))

    }

    const submitUnsetRecordBeingCreated = (e) => {
        e.preventDefault()
        dispatch(unsetRecordBeingCreated())
    }

    const submitUnsetRecordBeingUpdated = (e) => {
        e.preventDefault()
        dispatch(unsetRecordBeingUpdated())
    }

    const submitUpdateRecord = (e) => {
        e.preventDefault()

        if (!tempAppointment || !tempPassword) {
            alert("please enter both appointment and password")
        }

        dispatch(updateRecord({
            id: idOfRecordBeingUpdated,
            appointment: tempAppointment,
            password: tempPassword
        }))
        
        // localStorage.users = JSON.stringify(currentState)
        // console.log(`localStorage.users`, JSON.parse(localStorage.users))
    }

    //functiona specific to action or updata/create
    const handleSave = isRecordBeingCreated ? submitCreateRecord : submitUpdateRecord
    const handleCancel = isRecordBeingCreated ? submitUnsetRecordBeingCreated : submitUnsetRecordBeingUpdated

    return (
        <>
            
            {isRecordBeingCreated && (
                <div className="row border-bottom bg-primary text-light  mt-3">
                    <div className="col text-center">creating record</div>
                </div>)}

            {idOfRecordBeingUpdated && (
                <div className="row border-bottom bg-warning text-dark  mt-3">
                    <div className="col text-center">updating record</div>
                </div>
            )}

            <div className="row">
                <form>
                    <div className="form-group row">
                        <label htmlFor="appointment" className="col-sm-2 col-form-label">Appointment</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={tempAppointment} onChange={(e) => setTempAppointment(e.target.value)} placeholder="enter here the purpose of the password intended to be stored (applicarion, site, account etc.)" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={tempPassword} onChange={(e) => setTempPassword(e.target.value)} placeholder="enter here the password" />
                        </div>
                    </div>


                    <div className="text-center mt-3 mb-3">
                        <button className="btn btn-primary border" type="submit" onClick={(event) => handleSave(event)}>save</button>
                        <button className="btn btn-secondary border" type="submit" onClick={(event) => handleCancel(event)}>cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateUpdateRecord

