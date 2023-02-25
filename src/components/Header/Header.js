import imgLogo from "../../imgs/logo_hqbh.png";
import { useState, useEffect } from "react";
import axios from "axios";

import User from "./User/User";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "./Search";
import { Link } from "react-router-dom";
import Category from "./Category/Category";

const cx = classNames.bind(styles);

const Header = ({ user, setIsSignUp, category }) => {
  const [films, setFilms] = useState();
  const [isHasData, setIsHasData] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [categoryState, setCategoryState] = useState("");
  const getDataFilms = async () => {
    setIsHasData(false);
    const res = await axios.get("https://backend-test-production-3338.up.railway.app/api/film/getFilm");
    setFilms(res.data);
    setIsHasData(true);
  };

  useEffect(() => {
    setCategoryState(category);
  }, [category]);

  useEffect(() => {
    getDataFilms();
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);
  return (
    <header
      className={
        scroll ? cx("header", "background-header-scroll") : cx("header")
      }
    >
      <a href="/">
        <img src={imgLogo} alt="logo" />
      </a>
      <nav className={cx("container")}>
        <ul className={cx("header_nav_links")}>
          <Category
            categoryHome={categoryState}
            categoryName={"Hành động"}
          ></Category>
          <Category
            categoryHome={categoryState}
            categoryName={"Hài hước"}
          ></Category>
          <Category
            categoryHome={categoryState}
            categoryName={"Phiêu lưu"}
          ></Category>
          <Category
            categoryHome={categoryState}
            categoryName={"Tiên hiệp"}
          ></Category>
          <Category
            categoryHome={categoryState}
            categoryName={"Học đường"}
          ></Category>
        </ul>
      </nav>
      <div className={cx("right-content")}>
        {isHasData ? <Search films={films}></Search> : <></>}
        {!user?.userId ? (
          <>
            <Link className={cx("cta")} to="/Register">
              <button className={cx("header_register")}>ĐĂNG KÝ</button>
            </Link>
            <Link className={cx("cta")} to="/Login">
              <button className={cx("header_login")}>ĐĂNG NHẬP</button>
            </Link>
            <User setIsSignUp={setIsSignUp}></User>
          </>
        ) : (
          <User user={user} setIsSignUp={setIsSignUp}></User>
        )}
      </div>
    </header>
  );
};

export default Header;
