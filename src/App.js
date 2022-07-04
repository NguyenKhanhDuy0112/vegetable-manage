import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./view/container/Admin";
import Client from "./view/container/Client";
import LoginAdmin from "./view/pages/admin/loginAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path = "/*" element = {<Client/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
