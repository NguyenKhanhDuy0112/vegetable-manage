import { useState } from "react";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import UploadFile from "../../../../shared/components/UploadFile"
function SettingAdmin() {
    const [profile, setProfile] = useState({
        img: [],
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin",
    })
    return (
        <>
            <div className="container">
                <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Profile</h6>

                <div className="settingAdmin">
                    <div className="row align-items-center mb-3 g-3">
                        <div className="col-md-4 col-lg-3">
                            <label className="mb-0 fs-6">Profile picture</label>
                        </div>
                        <div className="col-md">
                            <UploadFile
                                file={profile.imgs}
                                maxFile={3}
                                onChangeFile={(data) => setProfile(prev => ({ ...prev, img: data }))}
                            />
                        </div>
                    </div>
                    <InputAdmin
                        placeholder="Name..."
                        label="Name"
                        id="name"
                        valueInput={profile.name}
                        labelClass="col-md-4 col-lg-3"
                        onChangeInput={(data) => setProfile(prev => ({ ...prev, name: data }))}
                        input
                    />
                    <InputAdmin
                        placeholder="Email..."
                        label="Email"
                        id="email"
                        type="email"
                        valueInput={profile.email}
                        labelClass="col-md-4 col-lg-3"
                        onChangeInput={(data) => setProfile(prev => ({ ...prev, email: data }))}
                        input
                    />
                    <InputAdmin
                        placeholder="Password..."
                        label="Password"
                        id="password"
                        type="password"
                        valueInput={profile.password}
                        labelClass="col-md-4 col-lg-3"
                        onChangeInput={(data) => setProfile(prev => ({ ...prev, password: data }))}
                        input
                    />
                    <div className="d-flex justify-content-end mt-5">
                        <button className="btn btn-success product-ad-info__btn">Update profile</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SettingAdmin;