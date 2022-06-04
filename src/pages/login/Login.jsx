import { toast, ToastContainer } from "react-toastify";
import useForm from "../../hook/useForm";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import userApi from "../../hook/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

export default function LoginPage({ handleLogin }) {
  const history = useHistory();
  const formLogin = () => {
    userApi.login(values).then((resp) => {
      if (resp.text === "Đăng nhập thành công") {
        localStorage.setItem("status", resp.text);
        localStorage.setItem("userId", resp.userId);
        localStorage.setItem("username", resp.username);
        toast.success("Đăng nhập thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        handleLogin();
        setTimeout(() => {
          history.push("/");
        }, 1500);
      } else if (resp === "Vui lòng nhập Username and Password!!!") {
        toast.warning("Mời bạn nhập dữ liệu !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      } else
        return toast.error("Đăng nhập thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
    });
  };
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  const handleClickRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <ToastContainer />
      <div className="login">
        <span className="loginTitle">Đăng Nhập</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="loginInput"
            placeholder="Nhập Email của bạn..."
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}{" "}
          <label className="label-pass" htmlFor="password">
            Password
          </label>
          <div className="password-container">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              minLength="8"
              className="loginInput"
              placeholder="Nhập mật khẩu của bạn..."
              onChange={handleChange}
              required
            />
            <i className="icon-password">
              <FontAwesomeIcon
                onClick={handleShowPass}
                icon={showPass ? faEyeSlash : faEye}
                size="lg"
              />
            </i>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <button
            type="submit"
            value="Submit"
            className="loginButton"
            onClick={handleSubmit}
          >
            Đăng nhập
          </button>
          <div className="register-btn">
            <p>Nếu chưa có tài khoản mời bạn đăng ký</p>
            <button onClick={handleClickRegister} className="btn-register">
              Đăng ký
            </button>
          </div>
          <Link to="/">
            <p className="link-home">Quay về trang chủ!</p>
          </Link>
        </form>
      </div>
    </>
  );
}
