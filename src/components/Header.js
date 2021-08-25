import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { deleteRecord, logoutUser } from "../redux/actions"

const Header = () => {

    const isLoggedIn = useSelector(state => state.app.userId !== null)

    const userLogin = useSelector(state => state.app.userLogin)

    const tableData = useSelector(state => state.password.passwords)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push("/");
        tableData.forEach(record => {
            dispatch(deleteRecord(record.id))
        })
    }

    const handleUnexistingFeatureOfProfilePage = () => {
        alert("user profile could be accessed from here, if existed \\ (^_^) / ")
    }


    return (
        <div className="row ">
            <div className="col d-flex justify-content-start">
                <h1>Password Manager</h1>
            </div>
            <div className="col d-flex justify-content-end">
                {isLoggedIn && <Link to="/" ><button className="btn btn-outline-secondary border" onClick={handleUnexistingFeatureOfProfilePage}>{userLogin}</button></Link>}
                {isLoggedIn && <Link to="/"><button className="btn btn-outline-primary border">dashboard</button></Link>}
                {!isLoggedIn && <Link to="/register"><button className="btn btn-outline-primary  border">register</button></Link>}
                {!isLoggedIn && <Link to="/login" ><button className="btn btn-outline-primary  border">log in</button></Link>}
                {isLoggedIn && <Link to="/" ><button className="btn btn-outline-primary border" onClick={() => handleLogout()}>log out</button></Link>}
            </div>
        </div>
    )
}

export default Header

