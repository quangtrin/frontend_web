import classNames from "classnames/bind";
import styles from "./User.module.scss"
import img from "../../../imgs/user_default.png"
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const User = ({ user, setIsSignUp }) => {
    const navigate = useNavigate();
    const handleClickLogout = () => {
        localStorage.clear();
        setIsSignUp(false);
        navigate(0);
    }
    return (
        <a className={cx("comment-avatar")} onClick={handleClickLogout}>
            <img src={user.avatar} ></img><span>Thông tin</span>
        </a>
    )
}
export default User;