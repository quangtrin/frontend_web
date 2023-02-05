import { FaSearch } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./FilmAdmin.module.scss";
import TableFilm from './TableFilm/TableFilm';

const cx = classNames.bind(styles);
const ListAdmin = () => {

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Danh sách phim</h1>
              <div className={cx("header-table")}>
                <div className={cx("search")}>
                  <input type="text" placeholder="Search..."></input>
                  <a href='#'>
                    <FaSearch />
                  </a>
                </div>
              </div>
              <table className={cx("table")}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Tên</th>
                    <th>Thể loại</th>
                    <th>Số tập</th>
                    <th>Thời gian</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <TableFilm
                    id={1}
                    name={"Nobita và vương quốc chó mèo"}
                    category={"Phiêu lưu"}
                    countEpisode={512}
                    time={"11:54"}>
                  </TableFilm>
                  <TableFilm
                    id={2}
                    name={"Nobita và vương quốc chó mèo"}
                    category={"Phiêu lưu"}
                    countEpisode={512}
                    time={"11:54"}>
                  </TableFilm>
                  <TableFilm
                    id={3}
                    name={"Nobita và vương quốc chó mèo"}
                    category={"Phiêu lưu"}
                    countEpisode={512}
                    time={"11:54"}>
                  </TableFilm>
                </tbody>
              </table>
              <div className={cx("pagination")}>
                <a class="active" href="#">1</a>
                <a href="#">2</a>
                <span>...</span>
                <a href="#">3</a>
                <a href="#">4</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ListAdmin;
