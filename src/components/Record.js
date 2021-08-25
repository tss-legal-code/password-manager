import { useEffect } from "react";
import { useState } from "react"

// copy password to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, setRecordBeingUpdated } from "../redux/actions";

const Record = ({ record, tableOrderNumber }) => {

    // work around displaying password
    const passwordActual = useSelector(state => state.password.passwords.filter(item => item.id === record.id))[0].password
    const passwordPlaceholder = "*********"
    const [renderedAsPassword, setRenderedAsPassword] = useState(passwordPlaceholder)

    const togglePasswordContent = () => {
        setRenderedAsPassword(
            renderedAsPassword === passwordPlaceholder
                ? passwordActual
                : passwordPlaceholder
        )
    }

    useEffect(() => {
        // // for purposes of render of actual values after updating and saving them
        // this magick trick lets view revealed password after just it was updated (causes warning to console and disappears after first refresh)
        setRenderedAsPassword(
            renderedAsPassword === passwordPlaceholder
                ? passwordPlaceholder
                : passwordActual 
        )
    }, [passwordActual])

    // to start editing a record...
    const dispatch = useDispatch()

    return (
        <div>
            <div className="row border-bottom">
                <div className="col col-1 border-end text-center text-wrap text-break ">{tableOrderNumber}</div>
                <div className="col col-4 border-end text-wrap text-break" >{record.appointment}</div>
                <div className="col col-3 border-end text-wrap text-break" onClick={() => togglePasswordContent()}  >{renderedAsPassword}</div>
                <div className="col col-4 text-center align-middle text-wrap">
                    <div className="row">
                        <div className="col btn  btn-success border" onClick={() => togglePasswordContent()} >reveal</div>
                        <CopyToClipboard text={passwordActual}>
                            <div className="col btn btn-success border">copy</div>
                        </CopyToClipboard>
                        <div className="col btn  btn-warning border" onClick={() => dispatch(setRecordBeingUpdated(record.id))}>update</div>
                        <div className="col  btn btn-danger border" onClick={() => dispatch(deleteRecord(record.id))}>delete</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Record

