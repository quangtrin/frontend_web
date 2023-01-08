import classNames from "classnames/bind";
import styles from "../Navbar.module.scss";

const cx = classNames.bind(styles);

function cardFilm({ props }) {
  console.log(props);
  return (
    <a key={props.id} href={props.href} className={cx("more__content")}>
      <div className={cx("more__content-img")}>
        <img src={props.img} alt="" />
      </div>
      <div className={cx("more__content-info")}>
        <h3 className={cx("film-name")}>{props.name}</h3>
        <div className={cx("film-info")}>
          <span className={cx("film-info-label")}>Năm Phát Hành:</span>
          <span className={cx("film-info-item")}>{props.time}</span>
        </div>
        <div className={cx("film-info")}>
          <span className={cx("film-info-label")}>Xếp Hạng:</span>
          <span className={cx("film-info-item")}>{props.rate}</span>
        </div>
        <div className={cx("film-info")}>
          <span className={cx("film-info-label")}>Nội Dung Bởi:</span>
          <span className={cx("film-info-item")}>{props.product}</span>
        </div>
        <p className={cx("film-des")}>{props.des}</p>
      </div>
    </a>
  );
}

export default cardFilm;
