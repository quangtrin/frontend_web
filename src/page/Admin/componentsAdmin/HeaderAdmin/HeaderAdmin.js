import imgLogo from "../../../../imgs/logo_hqbh.png";

import classNames from "classnames/bind";
import styles from "./HeaderAdmin.module.scss";

import {FaSearch} from "react-icons/fa";
import {FaBell} from "react-icons/fa";
import {FaPowerOff} from "react-icons/fa";

const cx = classNames.bind(styles);

const HeaderAdmin = () => {
  return (
    <>
      <header className={cx("header")}>
          <div className={cx("header-menu")}>
            <img className={cx("header-logo")} src={imgLogo}></img>
            <ul>
              <li><a href="#"><p><FaSearch/></p></a></li>
              <li><a href="#"><p><FaBell/></p></a></li>
              <li><a href="#"><p><FaPowerOff/></p></a></li>
            </ul>
          </div>
      </header>
    </>
  );
};

export default HeaderAdmin;
