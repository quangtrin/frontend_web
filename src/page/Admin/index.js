import classNames from "classnames/bind";
import HeaderAdmin from "../../page/Admin/componentsAdmin/HeaderAdmin/HeaderAdmin";
import NavAdmin from "../../page/Admin/componentsAdmin/NavAdmin/NavAdmin";
import ListFilmAdmin from "./FilmAdmin/ListFilmAdmin";
import AddFilmAdmin from "./FilmAdmin/AddFilmAdmin";

import ListAccountAdmin from "./Account/ListAccountAdmin";
import ListAccountUser from "./Account/ListAccountUser";
import AddAccountAdmin from "./Account/AddAccountAdmin";
import AddEpisodeFilm from "./FilmAdmin/AddEpisodeFilm";
import { Outlet } from "react-router-dom";

const cx = classNames.bind();
const Admin = () => {
  return (
    <div>
      
      <Outlet />
      <HeaderAdmin></HeaderAdmin>
      <NavAdmin></NavAdmin>
    </div>
  );
};
export default Admin;
