import { Formik } from 'formik';
import { createUserInLocalStorage, listTakenIDsLoginsAndPasswords } from "../redux/manageLocalStorage";

const Register = () => {

    return (
        <>
            <h1 className="text-center border">REGISTER NEW USER</h1>
            <h4 className="text-center">to register on this site, please, enter your e-mail (as login) and a password of your new account (twice)</h4>
            <div className="container mt-5 d-flex justify-content-center">
                <Formik
                    initialValues={{ login: '', password: '', passwordRetype: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.login.trim()) {
                            errors.login = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login.trim())
                        ) {
                            errors.login = 'Invalid login address';
                        }
                     
                        if (listTakenIDsLoginsAndPasswords().filter(taken => taken.login === values.login.trim())
                                       .length > 0) {
                            errors.login = 'email (as login) login you entered is already taken, please, enter another one';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 3) {
                            errors.password = 'Invalid password (must be 3+ chars)';
                        }

                        if (!values.passwordRetype) {
                            errors.passwordRetype = 'Required';
                        } else if (values.passwordRetype.length < 3) {
                            errors.passwordRetype = 'Invalid password (must be 3+ chars)';
                        }

                        if (values.password !== values.passwordRetype) {
                            errors.passwordRetype = "Both passwords must match"
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        createUserInLocalStorage({login: values.login.trim(), password: values.password })
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

                                <label htmlFor="staticEmail" className="col-form-label text-nowrap">e-mail (as login)</label>
                                <input
                                    className="form-control mt-3"
                                    type="email"
                                    name="login"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.login}
                                />
                                <p className="text-danger">{errors.login && touched.login && errors.login}</p>

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

                                <label htmlFor="inputPasswordRetype" className="col-form-label">retype password</label>
                                <input
                                    className="form-control mt-3"
                                    type="password"
                                    name="passwordRetype"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordRetype}
                                />
                                <p className="text-danger">{errors.passwordRetype && touched.passwordRetype && errors.passwordRetype}</p>
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

export default Register




// <>


// {/* <div className="mt-5">
//     <h5 className="text-center">new user register form</h5>
// </div>
// <div className="mb-3">
//     <label htmlFor="exampleFormControlInput1" className="form-label">Login</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
// </div>
// <div className="mb-3">
//     <label htmlFor="exampleFormControlInput1" className="form-label">Pas</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
// </div>
// <div className="mb-3">
//     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
// </div>
// <div className="mb-3">
//     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
// </div>
// <div className="mb-3">
//     <label htmlFor="exampleFormControlTextarea1" className="form-label">Extra contact and other details</label>
//     <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
// </div> */}
// </>