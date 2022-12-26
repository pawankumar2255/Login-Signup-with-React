import Layout from "./components/pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LoginReg from "./components/pages/auth/LoginReg";
import Contact from "./components/pages/Contact";
import ResetPasswordEmailSend from "./components/pages/auth/ResetPasswordEmailSend";
import ResetPasswordForm from "./components/pages/auth/ResetPasswordForm";
import Dashbaord from "./components/pages/Dashbaord";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="resetpassword" element={<ResetPasswordEmailSend />} />
            <Route path="reset" element={<ResetPasswordForm />} />

          </Route>
          <Route path="/dashboard" element={<Dashbaord />} />
          <Route path="*" element={<h1>Error 404 Page Not Found !!</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
