import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderAdmin from "./componentsAdmin/HeaderAdmin/HeaderAdmin";
import NavAdmin from "./componentsAdmin/NavAdmin/NavAdmin";

import { Outlet } from "react-router-dom";


const cx = classNames.bind();
const Admin = ({adminToken}) => {
  const navigate = useNavigate();
  if (!adminToken) {
    navigate("/AdminLogin");
  }
  return (
    <div>

      <Outlet context={adminToken}/>
      <HeaderAdmin></HeaderAdmin>
      <NavAdmin></NavAdmin>
    </div>
  );
};
export default Admin;
