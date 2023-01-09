import imgLogo from "../../imgs/logo_hqbh.png";
import imgIconSearch from "../../imgs/search.png";
import User from "./User/User";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = ({ user, setIsSignUp }) => {
  return (
    // html
    <>
      <header className={cx("header")}>
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
        <form className={cx("header_form")} action="#">
          <input
            className={cx("header_search")}
            type="text"
            placeholder="Search..."
          />
          <button type="submit">
            <img src={imgIconSearch} alt="" />
          </button>
        </form>
        {user?.userId ? (
          <User user={user} setIsSignUp={setIsSignUp}></User>
        ) : (
          <>
            <a className={cx("cta")} href="/Register">
              <button className={cx("header_register")}>ĐĂNG KÝ</button>
            </a>
            <a className={cx("cta")} href="/Login">
              <button className={cx("header_login")}>ĐĂNG NHẬP</button>
            </a>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
