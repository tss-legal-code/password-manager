import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteRecord, unsetRecordBeingUpdated, updateRecord } from "../redux/actions"


const CreateUpdateRecord = () => {

    const [tempAppointment, setTempAppointment] = useState("")
    const [tempPassword, setTempPassword] = useState("")

    const idOfRecordBeingUpdated = useSelector(state => state.app.idOfRecordBeingUpdated)
    const currentRecord = useSelector(state => state.password.passwords.filter(record => record.id === idOfRecordBeingUpdated))[0]

    const dispatch = useDispatch()


    useEffect(() => {
        if (idOfRecordBeingUpdated) {
            setTempAppointment(currentRecord.appointment)
            setTempPassword(currentRecord.password)
        } else {
            setTempAppointment("")
            setTempPassword(" ")
        }

    }, [idOfRecordBeingUpdated])

    // const isRecordBeingCreated = useSelector(state => state.app.isRecordBeingCreated)

    // console.log(`isRecordBeingCreated`, isRecordBeingCreated)


    const submitUnsetRecordBeingUpdated = (e) => {
        e.preventDefault()
        dispatch(unsetRecordBeingUpdated())
    }
    const submitDeleteRecord = (e, id) => {
        e.preventDefault()
        dispatch(deleteRecord(id))
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

    }




    return (
        <>

            <div className="row border-bottom bg-primary text-light  mt-3">
                <div className="col text-center">update record</div>
            </div>


            <div className="row" onSubmit={submitUpdateRecord}>
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
                            <input type="text" className="form-control" value={tempPassword} onChange={(e) => setTempPassword(e.target.value)} placeholder="enter here the password" />
                        </div>
                    </div>

                    <div className="text-center mt-3 mb-3">
                        <button className="btn btn-primary border" type="submit" onClick={(event) => submitUpdateRecord(event, idOfRecordBeingUpdated)}>save changes</button>
                        <button className="btn btn-secondary border" type="submit" onClick={(event) => submitUnsetRecordBeingUpdated(event)}>cancel changes (back)</button>
                        <button className="btn btn-secondary btn-danger border" type="submit" onClick={(event) => submitDeleteRecord(event, idOfRecordBeingUpdated)}>delete record</button>
                    </div>

                </form>
            </div>


        </>
    )
}

export default CreateUpdateRecord

{/* <form className="form-control">
            <p>   create - edit form</p>
        </form> */}