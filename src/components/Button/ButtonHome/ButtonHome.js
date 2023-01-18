import classNames from "classnames/bind";
import styles from "./ButtonHome.module.scss";

const cx = classNames.bind(styles);
const ButtonHome = (props) => {
    return (
        <a href={props.href} className={cx("btn-home")}>{props.text}</a>
    )
}
export default ButtonHome