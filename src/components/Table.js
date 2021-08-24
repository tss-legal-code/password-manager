import { useDispatch, useSelector } from "react-redux"
import { setRecordBeingCreated } from "../redux/actions"
import CreateUpdateRecord from "./CreateUpdateRecord"
import Record from './Record'

const Table = () => {

  // to display passwords
  const tableData = useSelector(state => state.password.passwords)

  // to display record-update-delete-form
  const idOfRecordBeingUpdated = useSelector(state => state.app.idOfRecordBeingUpdated)

   // to display record-create-form
  const isRecordBeingCreated = useSelector(state => state.app.isRecordBeingCreated)

  // to create record
  const dispatch = useDispatch()

  return (
    <>
      <div className="row border-bottom bg-primary text-light mt-3">
        <div className="col col-1 border-end text-center text-wrap text-break">no.</div>
        <div className="col col-4 border-end text-center text-wrap text-break">appointment</div>
        <div className="col col-3 border-end text-center text-wrap text-break">password <nobr><em>(click '****' to reveal)</em></nobr></div>
        <div className="col col-4 border-end text-center text-wrap">options</div>
      </div>

      {tableData.length
        ? tableData.map((each, index) => <Record key={each.id} orderNumber={index+1} record={each} />)
        : <div className="row mt-3"><p className="text-center"> no passwords in database </p></div>}

      <div className="row mt-3">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary border" onClick={() => setRecordBeingCreated()}>create record</button>
        </div>
      </div>

      {idOfRecordBeingUpdated && <CreateUpdateRecord />}

      {isRecordBeingCreated && <CreateUpdateRecord />}

    </>
  )

}

export default Table

