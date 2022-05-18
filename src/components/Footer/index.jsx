import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLogo from "../../asset/logo/FooterLogo.svg";
import { social } from "../../constant/social";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-wrap">
            <div className="footer-logo">
              <a href="/">
                {" "}
                <img
                  className="main-logo"
                  src={FooterLogo}
                  alt="logo"
                  width={"350px"}
                />
              </a>
              {/* <ul className="footer-social">
                {social.map((item, index) => (
                  <li key={index}>
                    <a href={item?.link}>
                      <img
                        src={item?.logo}
                        key={index}
                        width="40px"
                        alt="logo-social"
                      />
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="footer-home">
              <p className="footer-title">Chủ Đề</p>
              <ul className="footer-title topic">
                <a href="/topic/1">
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Thời Sự</span>
                  </li>
                </a>
                <a href="/topic/2">
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Thể Thao</span>
                  </li>
                </a>
                <a href="/topic/3">
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Giáo Dục</span>
                  </li>
                </a>
                <a href="/topic/4">
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Giải Trí</span>
                  </li>
                </a>
                <a href="/topic/5">
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Pháp Luật</span>
                  </li>
                </a>
                <a href="/topic/7">
                  <li>
                    <FontAwesomeIcon icon={faBookmark} />
                    <span>Y Tế</span>
                  </li>
                </a>
              </ul>
            </div>
            <div className="footer-about">
              <p className="footer-title about">Về Chúng Tôi</p>
              <div className="about-content">
                <p>
                  Nơi mang đến những thông tin chính xác, nhanh chóng, giúp
                  người dùng có được những nguồn thông tin tin cậy, tiếp cận
                  những kiến thức mới mẻ, phong phú, đa dạng.
                </p>
              </div>
            </div>
            <div className="footer-network">
              <p className="footer-title subcribe">Liên Hệ</p>
              <ul className="footer-social">
                {social.map((item, index) => (
                  <li key={index}>
                    <a href={item?.link}>
                      <img
                        src={item?.logo}
                        key={index}
                        width="40px"
                        alt="logo-social"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">CopyRight @2022. Made by Van Tran</div>
      </footer>
    </>
  );
};
export default Footer;
