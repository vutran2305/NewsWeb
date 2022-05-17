import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import userApi from "../../hook/userApi";
import useForm from "../../hook/useForm";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./register.css";

export default function Register() {
  const history = useHistory();
  const formRegister = () => {
    userApi.register(values).then((resp) => {
      if (resp?.result === "Insert thất bại") {
        toast.error("Đăng ký tài khoản thất bại !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      } else {
        toast.success("Đăng ký tài khoản thành công !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        setTimeout(() => {
          history.push("/login");
        }, 1500);
      }
    });
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formRegister);
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleClickLogin = () => {
    history.push("/login");
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="register">
        <span className="registerTitle">Đăng Ký</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="registerInput"
            type="text"
            name="username"
            placeholder="Nhập username của bạn..."
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
          <label htmlFor="email">Email</label>
          <input
            className="registerInput"
            type="email"
            name="email"
            placeholder="Nhập email của bạn..."
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
            className="registerButton"
            onClick={handleSubmit}
          >
            Đăng Ký
          </button>
          <div className="login-btn">
            <p>Nếu bạn đã có tài khoản, xin quay lại đăng nhập</p>
            <button onClick={handleClickLogin} className="login-Button">
              Đăng nhập
            </button>
            <Link to="/">
              <p className="link-home">Quay về trang chủ!</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

// const [details, setDetails] = useState({
//   username: "",
//   email: "",
//   password: "",
// });
/*
  const register = async (detail) => {
    await userApi.register(detail).then((resp) => {
      if (resp) {
        console.log("check resp register:", resp);
      } else return;
    });
  };
  */

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (
//     details.name === "" ||
//     details.email === "" ||
//     details.password === ""
//   ) {
//     setError(true);
//   } else {
//     setSubmitted(true);
//     setError(false);
//     try {
//       register(details);
//     } catch (err) {
//       if (!err.response) {
//         console.log("No Server Response");
//       } else if (err.response.status === 409) {
//         console.log("Username Taken");
//       } else {
//         console.log("Đăng ký thất bại");
//       }
//     }
//   }
// };

// const [username, setUsername] = useState(null);
// const [email, setEmail] = useState(null);
// const [password, setPassword] = useState(null);
// const [confirmPassword, setConfirmPassword] = useState(null);

// const handleOnChange = (e) => {
//   const { name, value } = e.target;
//   if (name === "username") {
//     setUsername(value);
//   }
//   if (name === "email") {
//     setEmail(value);
//   }
//   if (name === "password") {
//     setPassword(value);
//   }

// };
