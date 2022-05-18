/* eslint-disable no-lone-blocks */
import {
  faArrowRightFromBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navigation.css";
export default function Topbar({ isLogin, handleLogin }) {
  const loca = useLocation();
  const [user, setUser] = useState();
  // const [keySearch, setKeySearch] = useState();
  useEffect(() => {
    if (localStorage.getItem("status")) {
      setUser(localStorage.getItem("status"));
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
                    <p>Thời sự</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/2">
                    <p>Thể Thao</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/3">
                    <p>Giáo Dục</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/4">
                    <p>Giải Trí</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/7">
                    <p>Y Tế</p>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/topic/5">
                    <p>Pháp Luật</p>
                  </a>
                </li>
                {user && <li className="menu-item">
                  <a href="/write">
                    <p>Bài Viết</p>
                  </a>
                  </li>}
              </ul>
              <div className="navbar-action">
                {user ? (
                  <div className="authen">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <Link to="/">
                      <p>User</p>
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
                <div className="search">
                  <input type="search" placeholder="Tìm kiếm..." />
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}
