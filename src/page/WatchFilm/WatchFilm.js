import { Container, Row, Col } from "react-bootstrap";
import TextInformation from "../../components/Text/TextInformation";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import classNames from "classnames/bind";
import styles from "./WatchFilm.module.scss";
import Footer from "../../components/Footer/Footer";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
const WatchFilm = ({ user, setIsSignUp }) => {
  const { filmName } = useParams();
  const [searchParams] = useSearchParams();
  const episodeID = searchParams.get("episode");
  const [film, setFilm] = useState();
  const [isHasData, setIsHasData] = useState(false);
  const [episodeFilm, setEpisodeFilm] = useState();
  const [urlEpisodeFilm, setUrlEpisodeFilm] = useState("");
  const getDataFilm = async () => {
    setIsHasData(false);
    const res = await axios.get("/api/user/getFilm/" + filmName);
    setFilm(res.data);
  }

  const getDataEpisodeFilm = async () => {
    if (film) {
      const res2 = await axios.get("/api/user/getEpisodeFilm/" + film?.filmID);
      setEpisodeFilm(res2.data);
    }
  }

  const getUrlEpisodeFilm = async () => {
    if (episodeFilm) {
      const res = await axios.get("/api/user/getUrlEpisodeFilm/" + film.filmID + "?episodeID=" + episodeID);
      setUrlEpisodeFilm(res.data[0].url);
      setIsHasData(true);
    }
  }
  useEffect(
    () => {
      getDataFilm();
    }, [])

  useEffect(() => {
    getDataEpisodeFilm();
  }, [film]);

  useEffect(() => {
    getUrlEpisodeFilm();
  }, [episodeFilm]);
  return (
    <div>
      <Header user={user} setIsSignUp={setIsSignUp} ></Header>
      {isHasData ? <>
        <div className={cx("layout")}>
          <div className={cx("layout_video", "container")}>
            <iframe className={cx("video")} src={urlEpisodeFilm}></iframe>
          </div>
          <div className={cx("layout_up")}>
            <Container style={{ paddingLeft: "10%" }}>
              <div className={cx("title_films")}>
                {film.filmName} - <span>Tập {episodeID}</span>
              </div>
              <div className={cx("under_line")}></div>
              <div className={cx("describe")}>
                <Row>
                  <Col
                    xs={9}
                    style={{ paddingRight: "100px" }}
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
                        title="Chuyển Ngữ: "
                        text="Lồng tiếng"
                        color="white"
                      />
                      <TextInformation
                        title="Xếp Hạng: "
                        text="13+"
                        color="white"
                      />
                      <TextInformation
                        title="Phát Sóng: "
                        text="Tập mới mỗi Thứ 3, Thứ 5, Thứ 7 và Chủ nhật"
                        color="white"
                      />
                      <TextInformation
                        title="Danh Mục: "
                        text="Anime"
                        color="#ea6016"
                      />
                      <TextInformation
                        title="Nội Dung Bởi: "
                        text="TOEI Animation"
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
      </> : <></>}
      <Footer></Footer>
    </div>
  );
};

export default WatchFilm;
