import { Routes, Route } from "react-router-dom";
import HeaderAdmin from "../../layout/header/headerAdmin/HeaderAdmin";
import routeAdmin from "../../routes/routeAdmin";

function Admin() {
    return (
        <>
            <HeaderAdmin />
            <div className="admin__main bg-admin">
                <Routes>
                    {routeAdmin.map((route, index) => <Route key={index} path={route.path} element={route.component} />)}
                </Routes>
            </div>
        </>
    );
}

export default Admin;