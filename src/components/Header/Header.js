import imgLogo from "../../imgs/logo_hqbh.png";
import { useState, useEffect } from "react";
import axios from "axios";

import User from "./User/User";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "./Search";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = ({ user, setIsSignUp }) => {
  const [films, setFilms] = useState();
  const [isHasData, setIsHasData] = useState(false);
  const [scroll, setScroll] = useState(false);
  const getDataFilms = async () => {
    setIsHasData(false);
    const res = await axios.get("https://backend-test-production-e39c.up.railway.app/api/user/getFilm");
    setFilms(res.data);
    setIsHasData(true);
  };

  useEffect(() => {
    getDataFilms();
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset  > 0) {
        setScroll(true);
      }
      else setScroll(false);
    })
  }, []);

  return (
    // html
    <>
      <header className={scroll ? cx("header", "background-header-scroll") : cx("header")}>
        <a href="/">
          <img src={imgLogo} alt="logo" />
        </a>
        <nav className={cx("container")}>
          <ul className={cx("header_nav_links")}>
            <li>
              <a href="#">Thiếu nhi</a>
            </li>
            <li>
              <a href="#">Comics</a>
            </li>
            <li>
              <a href="#">Anime</a>
            </li>
            <li>
              <a href="#">Phim</a>
            </li>
            <li>
              <a href="#">Âm nhạc</a>
            </li>
            <li>
              <a href="#">Thêm</a>
            </li>
          </ul>
        </nav>
        <div className={cx("right-content")}>
          {isHasData ? <Search films={films}></Search> : <></>}
          {user?.userId ? (
            <User user={user} setIsSignUp={setIsSignUp}></User>
          ) : (
            <>
              <Link className={cx("cta")} to="/Register">
                <button className={cx("header_register")}>ĐĂNG KÝ</button>
              </Link>
              <Link className={cx("cta")} to="/Login">
                <button className={cx("header_login")}>ĐĂNG NHẬP</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
