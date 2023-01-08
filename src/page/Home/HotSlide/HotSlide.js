import styles from "./HotSlide.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const HotSlide = (props) => {
    return (
        <a href={props.href}>
            <img className={cx("mySlides-img")} src={props.img} />
        </a>
    )
}
export default HotSlide;