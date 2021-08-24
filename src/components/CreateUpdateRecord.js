import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRecord, deleteRecord, unsetRecordBeingCreated, unsetRecordBeingUpdated, updateRecord } from "../redux/actions"


const CreateUpdateRecord = () => {

    const dispatch = useDispatch()
    
    const [tempAppointment, setTempAppointment] = useState("")
    const [tempPassword, setTempPassword] = useState("")
    

    // if record is being created from scratch
    const isRecordBeingCreated = useSelector(state => state.app.isRecordBeingCreated)
    const newRecordId = Math.max(...useSelector(state => state.password.passwords.map(element => element.id) ) ) + 1

    // if record is being updated and or deleted
    const idOfRecordBeingUpdated = useSelector(state => state.app.idOfRecordBeingUpdated)
    const currentRecord = useSelector(state => state.password.passwords.filter(record => record.id === idOfRecordBeingUpdated))[0]

    // for purposes of render of actual values 
    useEffect(() => {
        if (idOfRecordBeingUpdated) {
            setTempAppointment(currentRecord.appointment)
            setTempPassword(currentRecord.password)
        } else {
            setTempAppointment("")
            setTempPassword("")
        }
    }, [idOfRecordBeingUpdated])

    
    const submitCreateRecord =(e) => {
        e.preventDefault()

        if (!tempAppointment || !tempPassword) {
            alert("please enter both appointment and password")
        }

        dispatch(createRecord({
            id: newRecordId,
            appointment: tempAppointment,
            password: tempPassword 
        }))
    }

    const submitUnsetRecordBeingCreated = (e) => {
        e.preventDefault()
        dispatch(unsetRecordBeingCreated())
    }
    
    




    

    const submitUnsetRecordBeingUpdated = (e) => {
        e.preventDefault()
        dispatch(unsetRecordBeingUpdated())
    }
    // const submitDeleteRecord = (e, id) => {
    //     e.preventDefault()
    //     dispatch(deleteRecord(id))
    // }

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

    }

    
    
    
    console.log("ok 1")




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
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Appointment</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={tempAppointment} onChange={(e) => setTempAppointment(e.target.value)} placeholder="enter here the purpose of the password intended to be stored (applicarion, site, account etc.)" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={tempPassword} onChange={(e) => setTempPassword(e.target.value)} placeholder="enter here the password"  />
                        </div>
                    </div>

                    {isRecordBeingCreated && (
                    <div className="text-center mt-3 mb-3">
                        <button className="btn btn-primary border" type="submit" onClick={(event) => submitCreateRecord(event)}>save changes</button>
                        <button className="btn btn-secondary border" type="submit" onClick={(event) => submitUnsetRecordBeingCreated(event)}>cancel changes</button>
                    </div>)}

                    {idOfRecordBeingUpdated && (
                    <div className="text-center mt-3 mb-3">
                        <button className="btn btn-primary border" type="submit" onClick={(event) => submitUpdateRecord(event, idOfRecordBeingUpdated)}>save changes</button>
                        <button className="btn btn-secondary border" type="submit" onClick={(event) => submitUnsetRecordBeingUpdated(event)}>cancel changes</button>
                    </div>)}

                </form>
            </div>


        </>
    )
}

export default CreateUpdateRecord

