import imgLogo from "../../imgs/logo_hqbh.png";
import imgIconGooglePlay from "../../imgs/googleplay.png";
import imgIconSmartTV from "../../imgs/smartTV.png";
import imgIconAppStore from "../../imgs/appstore.png";

import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    // html
    <footer className={cx("footer")}>
      <div className={cx("footer_content")}>
        <div className={cx("footer_overview")}>
          <Link to="/">
            <img className={cx("footer_logo")} src={imgLogo} alt="" />
          </Link>
          <p>
            Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù
            hợp mọi độ tuổi và an toàn cho trẻ em.
          </p>
          <div className={cx("footer_icon")}>
            <a href="#">
              <img src={imgIconAppStore} />
            </a>
            <a href="#">
              <img src={imgIconGooglePlay} />
            </a>
            <a href="#">
              <img src={imgIconSmartTV} />
            </a>
          </div>
        </div>
        <div className={cx("footer_category")}>
          <h6>Nội dung</h6>
          <div className={cx("flex-container")}>
            <div className={cx("footer_category_content")}>
              <ul>
                <a href="#">
                  <li>
                    <p>Trang Chủ</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Truyện Tranh</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Originals</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Anime</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Show</p>
                  </li>
                </a>
              </ul>
            </div>
            <div className={cx("footer_category_content")}>
              <ul>
                <a href="#">
                  <li>
                    <p>Âm nhạc</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Series</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Thiếu nhi</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Giáo dục</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Giải trí</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("footer_category")}>
          <h6>Hỗ trợ</h6>
          <div className={cx("flex-container")}>
            <div className={cx("footer_category_content")}>
              <ul>
                <a href="#">
                  <li>
                    <p>FAQs</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Chính Sách Về Quyền Riêng Tư</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Điều Khoản Và Điều Kiện Sự Dụng</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Điều Khoản Thanh Toán</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Chính Sách Và Quy Trình Sử Lý Khiếu Nại</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("footer_category")}>
          <h6>Thông tin liên hệ</h6>
          <div className={cx("flex-container")}>
            <div className={cx("footer_category_content")}>
              <ul>
                <a href="#">
                  <li>
                    <p>Add:</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Tel:</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>Mail:</p>
                  </li>
                </a>
              </ul>
            </div>
            <div className={cx("footer_category_content")}>
              <ul>
                <a href="#">
                  <li>
                    <p>Hoàng Đạo Thúy, Thanh Xuân</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>0374 989 546</p>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <p>binhtrinh8122002@gmail.com</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
