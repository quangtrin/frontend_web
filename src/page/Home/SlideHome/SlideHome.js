import classNames from "classnames/bind";
import styles from "./SlideHome.module.scss";

const cx = classNames.bind(styles);
const SlideHome = (props) => {
  return (
    <div className={cx("slide")}  >
    <img src={props.imgSlide} alt="" />
    <div className={cx("slider-text")}>
      <div className={cx("container")}>
        <div className={cx("text-heading")}>
          <h3>{props.nameTitle}</h3>
        </div>
        <div className={cx("text-description")}>
          <p>
            {props.releaseYear} <span>{props.year}</span>
          </p>
        </div>
        <button className={cx("button-slider")}>{props.detail}</button>
      </div>
    </div>
  </div>
  );
};

export default SlideHome;