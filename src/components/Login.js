import { Formik } from 'formik';

const Login = () => {
    return (
        <>
        <h5>to use this site, please, enter your e-mail (as login) and a password of your "Password manager" account</h5>
        <div className="container mt-5 d-flex justify-content-center">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (
                        values.password.length < 3
                    ) {
                        errors.password = 'Invalid password (must be 3+ chars)';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    
                        // take action here
                        
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div className="col col-4 p-3 text-center border rounded">
                    <form onSubmit={handleSubmit} className="">
                        <label htmlFor="staticEmail" className="col-form-label text-nowrap">e-mail (login)</label>
                        <input
                            className="form-control mt-3"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <p className="text-danger">{errors.email && touched.email && errors.email}</p>
                        <label htmlFor="inputPassword" className="col-form-label">password</label>
                        <input
                            className="form-control mt-3"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <p className="text-danger">{errors.password && touched.password && errors.password}</p>
                        <button className="btn btn-primary m-3" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                    </div>
                )}
            </Formik>
        </div>
        </>
    )
}

export default Login

{/* <h5>login form</h5>
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
                </div> */}