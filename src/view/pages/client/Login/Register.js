import Banner from "../../../../shared/components/Banner"
function Register() {
    return (
        <section>
            <Banner title="Register" />
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
                    <div className="login__content">
                        <label className="login__content-label">Password again*</label>
                        <input className="login__content-input" type="password" />
                    </div>
                    <div className="login__container d-flex align-items-center justify-content-start">
                        <button className="login__btn me-2">Register</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;