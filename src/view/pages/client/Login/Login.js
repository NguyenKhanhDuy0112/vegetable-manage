import { Link } from "react-router-dom";
import Banner from "../../../../shared/components/Banner"
function Login() {
    return (
        <section>
            <Banner title="Login" />
            <div className="container-plugin">
                <div className="login my-5">
                    <div className="login__content">
                        <label className="login__content-label">Username or email address*</label>
                        <input className="login__content-input" />
                    </div>
                    <div className="login__content">
                        <label className="login__content-label">Password*</label>
                        <input className="login__content-input" type="password" />

                    </div>
                    <div className="login__remember mb-3">
                        <div className="login__remember-content">
                            <input className="login__content-input w-25 mb-0 align-self-start" type="checkbox" />
                            <label className="login__content-label nowrap mb-0">Remember me</label>
                        </div>

                        <a className="login__remember-link" href="/">Lost password?</a>
                    </div>
                    <div className="login__container d-flex align-items-center justify-content-between">
                        <button className="login__btn me-2">Login</button>
                        <Link to="/register">Signup</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;