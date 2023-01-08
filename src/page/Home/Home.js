import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import CardFilm from "../Home/CardFilm/CardFilm";
import SlideHome from "../Home/SlideHome/SlideHome";
import HotSlide from "./HotSlide/HotSlide";

import imgBanner1 from "../../imgs/conan.jpg";
import imgBanner2 from "../../imgs/doraemonbanner.jpg";
import imgBanner3 from "../../imgs/conan.jpg";
import imgBanner4 from "../../imgs/doraemonbanner.jpg";

import imgAdds from "../../imgs/adds.jpg";

import imgSlideUp1 from "../../imgs/down.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
const Home = ({ user, setIsSignUp }) => {
  let { page } = useParams();
  if (page === undefined) page = "1";
  const [checkedRadio, setCheckedRadio] = useState("");
  const [countSlide, setCountSlide] = useState(1);
  const [isHasData, setIsHasData] = useState(false);
  const [films, setFilms] = useState();
  const getDataFilms = async () => {
    setIsHasData(false);
    const res = await axios.get("https://backend-test-production-51c0.up.railway.app/api/user/getFilm");
    setFilms(res.data);
    setIsHasData(true);
  }
  const slideEffect = () => {
    setTimeout(function () {
      setCountSlide(countSlide + 1);
      setCheckedRadio("radio" + countSlide);
      if (countSlide > 4) {
        setCountSlide(1);
      }
    }, 5000);
  };
  useEffect(() => {
    slideEffect();
  }, [countSlide]);
  useEffect(() => {
    getDataFilms();
  }, []);
  return (
    <div>
      <Header user={user} setIsSignUp={setIsSignUp}></Header>
      <div className={cx("home")}>
        <div className={cx("slider")}>
          <div className={cx("slides-drop")}>
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio1")}
              checked={checkedRadio === "radio1"}
            />
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio2")}
              checked={checkedRadio === "radio2"}
            />
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio3")}
              checked={checkedRadio === "radio3"}
            />
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio4")}
              checked={checkedRadio === "radio4"}
            />

            <div className={cx("slide", "first")}>
              <img src={imgBanner1} alt="" />
              <div className={cx("slider-text")}>
                <div className={cx("container")}>
                  <div className={cx("text-heading")}>
                    <h3>Doraemon: Cuộc phiêu lưu của Yasuo và Yone!</h3>
                  </div>
                  <div className={cx("text-description")}>
                    <p>
                      Năm phát hành: <span>1998</span>
                    </p>
                  </div>
                  <button className={cx("button-slider")}>CHI TIẾT</button>
                </div>
              </div>
            </div>
            <SlideHome imgSlide={imgBanner3} nameTitle={"Doraemon: Cuộc phiêu lưu của Yasuo và Yone!"} releaseYear={"Năm phát hành:"} year={1998} detail={"Chi tiết"} />
            <SlideHome imgSlide={imgBanner3} nameTitle={"Doraemon: Cuộc phiêu lưu của Yasuo và Yone!"} releaseYear={"Năm phát hành:"} year={1998} detail={"Chi tiết"} />
            <SlideHome imgSlide={imgBanner3} nameTitle={"Doraemon: Cuộc phiêu lưu của Yasuo và Yone!"} releaseYear={"Năm phát hành:"} year={1998} detail={"Chi tiết"} />

            <div className={cx("navigation-manual", "container")}>
              <ul>
                <li>
                  <label htmlFor="radio1" className={cx("manual-btn")}>
                    {" "}
                  </label>
                </li>
                <li>
                  <label htmlFor="radio2" className={cx("manual-btn")}>
                    {" "}
                  </label>
                </li>
                <li>
                  <label htmlFor="radio3" className={cx("manual-btn")}>
                    {" "}
                  </label>
                </li>
                <li>
                  <label htmlFor="radio4" className={cx("manual-btn")}>
                    {" "}
                  </label>
                </li>
              </ul>
            </div>

            <div className={cx("navigation-auto", "container")}>
              <ul>
                <li>
                  <div className={cx("auto-btn1")} />
                </li>
                <li>
                  <div className={cx("auto-btn2")} />
                </li>
                <li>
                  <div className={cx("auto-btn3")} />
                </li>
                <li>
                  <div className={cx("auto-btn4")} />
                </li>
              </ul>
            </div>
          </div>

          <div className={cx("slider-up", "container")}>
            <div className={cx("text-hot-series")}>
              <h3>
                <button />
                <span>Hot Series</span>
              </h3>
            </div>
            <div className={cx("img-hot-series")}>
              <div className={cx("mySlides")}>
                <HotSlide href="#" img={imgSlideUp1} />
                <HotSlide href="#" img={imgSlideUp1} />
                <HotSlide href="#" img={imgSlideUp1} />
                <HotSlide href="#" img={imgSlideUp1} />
                <HotSlide href="#" img={imgSlideUp1} />
                <HotSlide href="#" img={imgSlideUp1} />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("adds", "container")}>
          <img src={imgAdds} />
        </div>

        <div className={cx("content", "container")}>
          <div className={cx("text-content")}>
            <h3>
              <button />
              <span>Phim Mới</span>
            </h3>
          </div>
          <Container fluid="md">
            <Row>
              {
                isHasData ?console.log(films) 
                // films.map((film, index) => {
                //   if (index >= (page * 30 - 30) && index <= (30 * page - 1))
                //     return <Col><CardFilm href={"/ListEpisode/" + film.filmName} imgUrl={film.url} name={film.filmName} episode={1} duration={film.duration}></CardFilm></Col>
                // })
                 : <></>
              }
            </Row>

          </Container>
          <div className={cx("pagination")}>
            <a href={"/" + (Number(page) - 1)}>&lt;&lt;</a>
            <a className={page === "1" ? cx("active") : <></>} href="/1">
              1
            </a>
            <a href="/2" className={page === "2" ? cx("active") : <></>}>2</a>
            <a href="/3" className={page === "3" ? cx("active") : <></>}>3</a>
            <span>...</span>
            {page !== "1" && page !== "2" && page !== "3" ?
              <>
                <a href={"/" + page}>{page}</a>
                <span>...</span>
              </> : <></>
            }
            <a href={"/" + (Number(page) + 1)}>&gt;&gt;</a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
};
export default Home;
