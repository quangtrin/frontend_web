import { Container, Row, Col } from "react-bootstrap";
import TextInformation from "../../components/Text/TextInformation";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import classNames from "classnames/bind";
import styles from "./ListEpisode.module.scss";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
const ListEpisode = ({ user, setIsSignUp }) => {
  const { filmName } = useParams();
  const [isHasData, setIsHasData] = useState(false);
  const [film, setFilm] = useState();
  const [episodeFilm, setEpisodeFilm] = useState();

  const getDataFilms = async () => {
    setIsHasData(false);
    const res = await axios.get("/api/user/getFilm/" + filmName);
    setFilm(res.data);
  }

  const getDataEpisodeFilm = async () => {
    if (film) {
      const res2 = await axios.get("/api/user/getEpisodeFilm/" + film?.filmID);
      setEpisodeFilm(res2.data);
      setIsHasData(true);
    }
  }

  useEffect(() => {
    getDataFilms();
  }, []);

  useEffect(() => {
    getDataEpisodeFilm();
  }, [film]);

  return (
    <div>
      <Header user={user} setIsSignUp={setIsSignUp}></Header>
      {
        isHasData ? <>
          <div className={cx("layout")}>
            <div className={cx("layout_back")}>
              <div className={cx("img_film_layout")}>
                <img
                  className={cx("img_film")}
                  src={film.url}
                ></img>
              </div>
            </div>
            <div className={cx("layout_up")}>
              <Container style={{ paddingLeft: "10%" }}>
                <div className={cx("title_films")}>{film.filmName}</div>
                <div className={cx("describe")}>
                  {/* <span className={cx("text-title-describe")}>Tập mới nhất:</span>
              <span className={cx("primary")}> S20 - Tập 921 </span>
              <span className={cx("dot")}>.</span>
              <span className={cx("primary")}> S20 - Tập 920 </span>
              <span className={cx("dot")}>.</span>
              <span className={cx("primary")}> S20 - Tập 919 </span> */}
                  <Row>
                    <Col
                      xs={9}
                      style={{ paddingRight: "100px", paddingTop: "50px" }}
                    >
                      <TextInformation
                        title="Mô tả: "
                        text={film.description}
                        color="white"
                      />
                    </Col>

                    <Col xs={3}>
                      <div>
                        <TextInformation
                          title="Tên khác: "
                          text={film.filmName}
                          color="white"
                        />
                        <TextInformation
                          title="Thể Loại: "
                          text={film.category}
                          color="#ea6016"
                        />
                        <TextInformation
                          title="Năm Phát Hành: "
                          text={film.year}
                          color="white"
                        />
                        <TextInformation
                          title="Trạng thái: "
                          text={film.duration}
                          color="white"
                        />
                        <TextInformation
                          title="Đánh giá: "
                          text={film.point}
                          color="white"
                        />
                        <TextInformation
                          title="Phát Sóng: "
                          text="Tập mới mỗi Thứ 3, Thứ 5, Thứ 7 và Chủ nhật"
                          color="white"
                        />

                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <Navbar className={cx("navbar")} user={user} episodeFilm={episodeFilm} film={film}></Navbar>
          </div>
        </> : <></>
      }

      <Footer></Footer>
    </div>
  );
};

export default ListEpisode;
