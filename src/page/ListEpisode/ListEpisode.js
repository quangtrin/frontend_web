import { Container, Row, Col } from "react-bootstrap";
import TextInformation from "../../components/Text/TextInformation";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import classNames from "classnames/bind";
import styles from "./ListEpisode.module.scss";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import Rate from "../../components/Rate/Rate"

const cx = classNames.bind(styles);
const ListEpisode = ({ user, setIsSignUp }) => {
  const { filmName } = useParams();
  const [isHasData, setIsHasData] = useState(false);
  const [film, setFilm] = useState();
  const [episodeFilm, setEpisodeFilm] = useState();
  const [hide, setHide] = useState(true);

  const getDataFilms = async () => {
    setIsHasData(false);
    const res = await axios.get("https://backend-test-production-3338.up.railway.app/api/film/getFilm/" + filmName);
    setFilm(res.data);
  };

  const getDataEpisodeFilm = async () => {
    if (film) {
      const res2 = await axios.get("https://backend-test-production-3338.up.railway.app/api/episodeFilm/getEpisodeFilm/" + film?.filmID);
      setEpisodeFilm(res2.data);
      setIsHasData(true);
    }
  };

  useEffect(() => {
    getDataFilms();
    document.title = filmName;
  }, []);

  useEffect(() => {
    getDataEpisodeFilm();
  }, [film]);

  return (
    <div>
      <Header user={user} setIsSignUp={setIsSignUp}></Header>
      {isHasData ? (
        <>
          <div className={cx("layout")}>
            <div className={cx("layout_back")}>
              <div className={cx("img_film_layout")}>
                <img className={cx("img_film")} src={film.url}></img>
              </div>
            </div>
            <div className={cx("layout_up")}>
              <Container>
                <div className={cx("title_films")}>{film.filmName}</div>
                <Rate user={user} film={film}></Rate>
                <div className={cx("describe")}>
                  <Row>
                    <Col
                      xs={9}
                      style={{ paddingRight: "100px", paddingTop: "50px" }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          marginBottom: "20px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--text-title-describe)",
                            marginRight: "10px",
                          }}
                        >
                          M?? t???:
                        </span>
                        <span
                          className={cx("fillm_des", hide ? "hide" : "")}
                          dangerouslySetInnerHTML={{ __html: film.description }}
                        />
                        <span
                          className={cx("hide_option")}
                          onClick={() => setHide(!hide)}
                        >
                          {hide ? "Xem th??m" : "Thu g???n"}
                        </span>
                      </div>
                    </Col>

                    <Col xs={3}>
                      <div>
                        <TextInformation
                          title="T??n kh??c: "
                          text={film.filmName}
                          color="white"
                        />
                        <TextInformation
                          title="Th??? Lo???i: "
                          text={film.category}
                          color="#ea6016"
                        />
                        <TextInformation
                          title="N??m Ph??t H??nh: "
                          text={film.year}
                          color="white"
                        />
                        <TextInformation
                          title="Tr???ng th??i: "
                          text={film.duration}
                          color="white"
                        />
                        <TextInformation
                          title="????nh gi??: "
                          text={film.point || "Ch??a c?? ????nh gi?? n??o"}
                          color="white"
                        />
                        <TextInformation
                          title="Ph??t S??ng: "
                          text="T???p m???i m???i Th??? 3, Th??? 5, Th??? 7 v?? Ch??? nh???t"
                          color="white"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <Navbar
              className={cx("navbar")}
              user={user}
              episodeFilm={episodeFilm}
              film={film}
            ></Navbar>
          </div>
        </>
      ) : (
        <div className={cx("loading-wrapper")}>
          <LoadingOutlined className={cx("loading-icon")} />
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default ListEpisode;
