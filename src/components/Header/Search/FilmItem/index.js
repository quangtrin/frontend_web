import classNames from "classnames/bind";

import styles from "./FilmItem.module.scss";

const cx = classNames.bind(styles);

function FilmItem({ film }) {
  return (
    <a href={"/ListEpisode/" + film.filmName} className={cx("wrapper")}>
      <div className={cx("film-item")}>
        <div className={cx("film-img")}>
          <img src={film.url} alt={film.filmName} />
        </div>

        <div className={cx("film-info")}>
          <div className={cx("top")}>
            <p className={cx("film-name")}>{film.filmName}</p>
          </div>
          <div className={cx("bottom")}>
            <span className={cx("film-time")}>{"(" + film.year + ")"}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default FilmItem;
