import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ButtonHome.module.scss";

const cx = classNames.bind(styles);
const ButtonHome = (props) => {
    return (
        <Link to={props.href} className={cx("btn-home")}>{props.text}</Link>
    )
}
export default ButtonHome