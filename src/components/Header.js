import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="row ">
            <div className="col d-flex justify-content-start">
                <h1>Password Manager</h1>
            </div>
            <div className="col d-flex justify-content-end">
                <Link to="/"><button className="btn btn-outline-primary border">dashboard</button></Link>
                <Link to="/register"><button className="btn btn-outline-primary  border">register</button></Link>
                <Link to="/login" ><button className="btn btn-outline-primary  border">log in</button></Link>
                <Link to="/login" ><button className="btn btn-outline-primary  border">log out</button></Link>
            </div>
        </div>
    )
}

export default Header

