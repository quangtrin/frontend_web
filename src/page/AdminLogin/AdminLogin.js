import classNames from "classnames/bind";
import styles from "./AdminLogin.module.scss";

import imgLogo from "../../imgs/logo_hqbh.png";

const cx = classNames.bind(styles);
const AdminLogin = () => {

  return (
    <div>
      <div className={cx("body")}>
      <section className={cx("wrapper")}>
        <div className={cx("form_header", "login")}>
          <p>Đăng Nhập Admin</p>
          <form className={cx("form-admin")} action="#">
            <input type="text" placeholder="Tài khoản" required />
            <input type="password" placeholder="Mật khẩu" required />
            <div className={cx("checkbox")}>
              <input type="checkbox" id="loginCheck" />
              <label htmlFor="loginCheck">Nhớ mật khẩu ?</label>
            </div>
            <button className={cx("submit")} type="submit">Đăng nhập</button>
          </form>
        </div>
        <div className={cx("form_header", "logo")}>
          <img src={imgLogo} />
        </div>
      </section>
      </div>
    </div>
  );
};
export default AdminLogin;
