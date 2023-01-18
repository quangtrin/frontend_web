import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames/bind";

import styles from "./ChangePassword.module.scss";
import imgLogo from "../../imgs/logo_hqbh.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [isHideOldPass, setIsHideOldPass] = useState(true);
  const [isHideNewPass, setIsHideNewPass] = useState(true);
  const [isHideReNewPass, setIsHideReNewPass] = useState(true);
  const [isChanging, setIsChanging] = useState(false);

  const handleChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleChangeReNewPassword = (e) => {
    setReNewPassword(e.target.value);
  };
  return (
    <div className={cx("background-form")}>
      <Link className={cx("logo_link")} to="/">
        <img src={imgLogo} alt="logo" />
      </Link>
      <div className={cx("form")}>
        <h1 className={cx("form_heading")}>Đổi mật khẩu</h1>

        <form className={cx("form_form")}>
          <label htmlFor="username" className={cx("form_label")}>
            Tên người dùng
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={cx("form_input")}
            value="Nguyễn Văn A"
            disabled
          />
          <label htmlFor="oldPassword" className={cx("form_label")}>
            Mật khẩu cũ
          </label>
          <div className={cx("oldPassword_input")}>
            <input
              type={isHideOldPass ? "password" : "text"}
              id="oldPassword"
              required
              name="oldPassword"
              className={cx("form_input")}
              placeholder="*********"
              onChange={handleChangeOldPassword}
            />
            <div className={cx("hide_icon")}>
              {isHideOldPass ? (
                <EyeFilled onClick={() => setIsHideOldPass(false)} />
              ) : (
                <EyeInvisibleFilled onClick={() => setIsHideOldPass(true)} />
              )}
            </div>
          </div>
          <div className={cx("newPassword_input")}>
            <label htmlFor="newPassword" className={cx("form_label")}>
              Mật khẩu mới
            </label>
            <input
              type={isHideReNewPass ? "password" : "text"}
              id="newPassword"
              required
              name="newPassword"
              className={cx("form_input")}
              minLength={6}
              maxLength={30}
              placeholder="*********"
              onChange={setNewPassword}
            />
            <div className={cx("hide_icon")}>
              {isHideReNewPass ? (
                <EyeFilled onClick={() => setIsHideReNewPass(false)} />
              ) : (
                <EyeInvisibleFilled onClick={() => setIsHideReNewPass(true)} />
              )}
            </div>
          </div>
          <div className={cx("reNewPassword_input")}>
            <label htmlFor="reNewPassword" className={cx("form_label")}>
              Nhập lại mật khẩu mới
            </label>
            <input
              type={isHideNewPass ? "password" : "text"}
              id="reNewPassword"
              required
              name="reNewPassword"
              className={cx("form_input")}
              placeholder="*********"
              onChange={handleChangeReNewPassword}
            />
            <div className={cx("hide_icon")}>
              {isHideNewPass ? (
                <EyeFilled onClick={() => setIsHideNewPass(false)} />
              ) : (
                <EyeInvisibleFilled onClick={() => setIsHideNewPass(true)} />
              )}
            </div>
          </div>
          {!isChanging ? (
            <button
              className={cx(
                "form_submit",
                oldPassword && newPassword && reNewPassword ? "primary" : ""
              )}
            >
              Đổi mật khẩu
            </button>
          ) : (
            <Button
              type="Call to Action"
              className={cx(
                "form_submit",
                oldPassword && newPassword && reNewPassword ? "primary" : ""
              )}
              loading
            >
              <></>
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
