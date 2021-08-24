const Header = () => {
    return (
        <div className="row ">
            <div className="col d-flex justify-content-start">
                <h1 className="col">Password Manager</h1>
            </div>
            <div className="col d-flex justify-content-end">
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="login" />
                        </div>
                        <div className="col ">
                            <input type="text" className="form-control" placeholder="password" />
                        </div>
                    </div>
                </form>
                <div className="d-flex align-items-start">
                <button type="button" className="btn btn-primary border ">login</button>
                <button type="button" className="btn btn-secondary border">register</button>
                </div>
               
            </div>

        </div>
    )
}

export default Header

