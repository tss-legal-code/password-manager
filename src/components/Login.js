import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../redux/actions';
import { getUserDataForGivenCredentials, GET_USERDATA_OF_LOGGED_USER, SET_LOGGED_ID } from '../redux/localStorageActions';

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    return (
        <>
            <h1 className="text-center border">LOG IN</h1>
            <h4 className="text-center">to use this site, please, enter your e-mail (as login) and a password of your "Password manager" account</h4>
            <h6 className="text-center">(you may try (as both login and andpassword): "user@user.com", "user1@user.com", "user2@user.com")</h6>
            <div className="container mt-5 d-flex justify-content-center">
                <Formik
                    initialValues={{ login: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.login.trim()) {
                            errors.login = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login.trim())
                        ) {
                            errors.login = 'Invalid login address';
                        }
                        if (!values.password.trim()) {
                            errors.password = 'Required';
                        } else if (
                            values.password.trim().length < 3
                        ) {
                            errors.password = 'Invalid password (must be 3+ printable chars)';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {

                        const passTest = getUserDataForGivenCredentials(
                            values.login.trim(),
                            values.password.trim()
                        )

                        if (passTest === null) {
                            alert("you entered wrong password and/or login")
                            return
                        }
                        SET_LOGGED_ID(passTest)
                        dispatch(
                            loginUser(
                                GET_USERDATA_OF_LOGGED_USER()
                            )
                        )
                        history.push("/")
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