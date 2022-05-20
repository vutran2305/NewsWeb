/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import {
  faArrowRightFromBracket,
  faCircleUser,
  faFootball,
  faGraduationCap,
  faHouseMedical,
  faNewspaper,
  faPersonRunning,
  faPhotoFilm,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash/debounce";
import "./navigation.css";
import { useHistory } from "react-router-dom";

export default function Topbar({ isLogin, handleLogin }) {
  const loca = useLocation();
  const history = useHistory();
  const [user, setUser] = useState();
  const [username, setUserName] = useState();
  const [keySearch, setKeySearch] = useState();
  // const debouncedSave = useCallback(
  //   debounce((value) => handleRouter(value), 1000),
  //   []
  // );
  // const debouncedSave = useRef(
  //   debounce((nextValue) => handleRouter(nextValue), 1000)
  // ).current;
  const handleChange = (event) => {
    const { value } = event.target;
    console.log("Check value:", value);
    setKeySearch(value);
  };
  const handleSubmit = () => {
    history.push(`/search/${keySearch}`);
  };
  useEffect(() => {
    if (localStorage.getItem("status")) {
      setUser(localStorage.getItem("status"));
      setUserName(localStorage.getItem("username"));
    }
  }, [isLogin]);

  if (loca.pathname === "/login" || loca.pathname === "/register") {
    return "";
  } else
    return (
      <>
        <header className="header-container">
          <nav className="navbar-container">
            <div className="navbar-wrap">
              <ul className="navbar-menu">
                <li className="menu-item">
                  <a href="/">
                    <FontAwesomeIcon icon={faHouse} size="1x" fixedWidth />
                    <p>Trang Chủ</p>
                  </a>
                </li>
                <li className="menu-item icon">
                  <a href="/topic/1">
                    <FontAwesomeIcon icon={faNewspaper} size="1x" fixedWidth />
                    <p>Thời sự</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/2">
                    <FontAwesomeIcon
                      icon={faPersonRunning}
                      size="1x"
                      fixedWidth
                    />
                    <p>Thể Thao</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/3">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      size="1x"
                      fixedWidth
                    />
                    <p>Giáo Dục</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/4">
                    <FontAwesomeIcon icon={faPhotoFilm} size="1x" fixedWidth />
                    <p>Giải Trí</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/7">
                    <FontAwesomeIcon
                      icon={faHouseMedical}
                      size="1x"
                      fixedWidth
                    />
                    <p>Y Tế</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/5">
                    <FontAwesomeIcon
                      icon={faScaleBalanced}
                      size="1x"
                      fixedWidth
                    />
                    <p>Pháp Luật</p>
                  </a>
                </li>
                {/* {user && (
                  <li className="menu-item">
                    <a href={`/`}>
                      <p>Bài Viết</p>
                    </a>
                  </li>
                )} */}
              </ul>
              <div className="navbar-action">
                {user ? (
                  <div className="authen">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <Link to="/" style={{ width: "120px" }}>
                      <p>{username}</p>
                    </Link>
                  </div>
                ) : (
                  <div className="authen">
                    <Link to="/login">
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link to="/login">
                      <p>Đăng nhập</p>{" "}
                    </Link>
                  </div>
                )}
                {user ? (
                  <div
                    className="authen"
                    onClick={() => {
                      setUser(localStorage.clear());
                      handleLogin();
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <Link to="/">
                      <p>Đăng Xuất</p>
                    </Link>
                  </div>
                ) : (
                  <div className="authen">
                    <Link to="/register">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </Link>
                    <Link to="/register">
                      <p>Đăng ký</p>
                    </Link>
                  </div>
                )}
                <form className="search" onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Tìm kiếm..."
                    onChange={handleChange}
                    value={keySearch}
                  />
                  <FontAwesomeIcon icon={faSearch} onClick={handleSubmit} />
                </form>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}
