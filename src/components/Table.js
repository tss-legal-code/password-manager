import { useDispatch, useSelector } from "react-redux"
import { setRecordBeingCreated } from "../redux/actions"
import CreateUpdateRecord from "./CreateUpdateRecord"
import Record from './Record'

const Table = () => {

  // to display passwords
  const tableData = useSelector(state => state.password.passwords)

  // to display record-update-delete-form
  const idOfRecordBeingUpdated = useSelector(state => state.app.idOfRecordBeingUpdated)

  // to display record-create-button
  const isLoggedIn = useSelector(state => state.app.userId !== null)

  // to display record-create-form
  const isRecordBeingCreated = useSelector(state => state.app.isRecordBeingCreated)

  // to create record
  const dispatch = useDispatch()







  return (
    <>

      {isLoggedIn &&
        <div className="row border-bottom bg-primary text-light mt-3">
          <div className="col col-1 border-end text-center text-wrap text-break">no.</div>
          <div className="col col-4 border-end text-center text-wrap text-break">appointment</div>
          <div className="col col-3 border-end text-center text-wrap text-break">password <nobr><em>(click '****' to reveal)</em></nobr></div>
          <div className="col col-4 border-end text-center text-wrap">options</div>
        </div>}

      {tableData.length 
          ? tableData.map((each, index) => { return <Record key={String(each.id)} tableOrderNumber={index + 1} record={each} /> })
          : ""}

      {!tableData.length && isLoggedIn &&
        <div className="row mt-3 border-bottom"><p className="text-center"> no passwords in database </p></div>}

       {!isLoggedIn &&
        <div className="row mt-3  border-bottom bg-warning">
          <p className="text-center">to start using this password manager you need to register and/or log in (see upper right corner) </p>
          <p className="text-center">you may try default "login": "user@user.com" and "password": "user@user.com"</p>
        </div>}



      {/* show button depending on state of logged in in store */}
      {isLoggedIn &&
        <div className="row mt-3">
          <div className="d-flex justify-content-end ">
            <button className="btn btn-primary border" onClick={() => dispatch(setRecordBeingCreated())}>create record</button>
          </div>
        </div>}

      {/* show forms depending on state of variables in store */}
      {idOfRecordBeingUpdated && <CreateUpdateRecord />}
      {isRecordBeingCreated && <CreateUpdateRecord />}

    </>
  )

}

export default Table

