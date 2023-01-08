import styles from "./Episode.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Episode = (props) => {
  return (
    <>
      <a href={props.href}>
        <div className={cx("episode")}>{props.episode}</div>
      </a>
    </>
  );
};
export default Episode;
