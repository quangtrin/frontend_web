import classNames from "classnames/bind";
import styles from "./FilmAdmin.module.scss";

const cx = classNames.bind(styles);
const AddEpisodeFilm = () => {

    return (
        <div>
            <div className={cx("main-container")}>
                <div className={cx("card")}>
                    <section className={cx("container")}>
                        <form action="#" className={cx("form")}>
                            <h1>Thêm tập</h1>
                            <div className={cx("input-box")}>
                                <label>Tên phim</label>
                            </div>
                            <div className={cx("select-box")}>
                                <select name="nameFilm" id="nameFilm">
                                    <option hidden>Phim</option>
                                    <option value="#">Doraemon</option>
                                    <option value="#">One Piece</option>
                                    <option value="#">Conan</option>
                                    <option value="#">Quang</option>
                                </select>
                            </div>
                            <div className={cx("input-box")}>
                                <label>Avatar Tập</label>
                                <input type="file" name="imageEpisode" id="imageEpisode" required />
                            </div>
                            <div className={cx("input-box")}>
                                <label>Tập Phim</label>
                                <input type="number" name="countEpisode" id="countEpisode" placeholder="Tập phim" required />
                            </div>
                            <div className={cx("input-box")}>
                                <label>Link url</label>
                                <input type="text" name="urlEpisode" id="urlEpisode" placeholder="Link url" required />
                            </div>
                            <div className={cx("status-box")}>
                                <h3>Trạng thái</h3>
                                <div className={cx("status-option")}>
                                    <div className={cx("status")}>
                                        <input type="radio" id="check-online" name="online" defaultChecked />
                                        <label htmlFor="check-online">Online</label>
                                    </div>
                                    <div className={cx("status")}>
                                        <input type="radio" id="check-offline" name="offline" />
                                        <label htmlFor="check-offline">Offline</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" name="sumbmit_add_film">Lưu</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default AddEpisodeFilm;
