import React from "react";
import { useRef } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  login,
  loadUser,
  register,
} from "../../Actions/userAction";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Loader from "../Layout/Loader/Loader";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log("register call");
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "warning",
        title: error,
      }).then(() => {
        navigate("/login");
      });
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/account");
      dispatch(loadUser());
    }
  }, [error, dispatch, navigate, isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="body">
            <div className="section">
              <div className="container">
                <div className="row full-height justify-content-center">
                  <div className="col-12 text-center align-self-center py-5">
                    <div className="section pb-5 pt-5 pt-sm-2 text-center">
                      <h6 className="mb-0 pb-3">
                        <span>Log In </span>
                        <span>Sign Up</span>
                      </h6>
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="reg-log"
                        name="reg-log"
                      />
                      <label htmlFor="reg-log" ref={switcherTab}></label>
                      <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="center-wrap">
                              <form
                                className="loginForm"
                                ref={loginTab}
                                onSubmit={loginSubmit}
                              >
                                <div className="section text-center">
                                  <h4 className="mb-4 pb-3">Log In</h4>
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      className="form-style"
                                      placeholder="Your Email"
                                      // autoComplete="none"
                                      name="email"
                                      required
                                      value={loginEmail}
                                      onChange={(e) =>
                                        setLoginEmail(e.target.value)
                                      }
                                    />
                                    <i className="input-icon fa fa-at"></i>
                                  </div>
                                  <div className="form-group mt-2">
                                    <input
                                      type="password"
                                      name="password"
                                      className="form-style"
                                      placeholder="Your Password"
                                      // autoComplete="none"
                                      required
                                      value={loginPassword}
                                      onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                      }
                                    />
                                    <i className="input-icon fa fa-lock"></i>
                                  </div>

                                  <input
                                    type="submit"
                                    value="Login"
                                    className="btn mt-4"
                                  />

                                  <p className="mb-0 mt-4 text-center">
                                    <Link
                                      to="/password/forgot"
                                      className="link"
                                    >
                                      Forget Password ?
                                    </Link>
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="card-back">
                            <div className="center-wrap">
                              <form
                                className="signUpForm"
                                ref={registerTab}
                                encType="multipart/form-data"
                                onSubmit={registerSubmit}
                              >
                                <div className="section text-center">
                                  <h4 className="mb-4 pb-3">Sign Up</h4>
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-style"
                                      placeholder="Your Full Name"
                                      id="logname"
                                      autoComplete="none"
                                      required
                                      name="name"
                                      value={name}
                                      onChange={registerDataChange}
                                    />
                                    <i className="input-icon fa fa-user"></i>
                                  </div>
                                  <div className="form-group mt-2">
                                    <input
                                      type="email"
                                      className="form-style"
                                      placeholder="Your Email"
                                      autoComplete="none"
                                      required
                                      name="email"
                                      value={email}
                                      onChange={registerDataChange}
                                    />
                                    <i className="input-icon fa fa-at"></i>
                                  </div>
                                  <div className="form-group mt-2">
                                    <input
                                      type="password"
                                      className="form-style"
                                      placeholder="Your Password"
                                      autoComplete="none"
                                      required
                                      name="password"
                                      value={password}
                                      onChange={registerDataChange}
                                    />
                                    <i className="input-icon fa fa-lock"></i>
                                  </div>
                                  <div
                                    className="form-group mt-2 "
                                    id="registerImage"
                                  >
                                    <img
                                      src={avatarPreview}
                                      alt="avatar preview"
                                    />
                                    <input
                                      className="form-style"
                                      type="file"
                                      name="avatar"
                                      accept="image/*"
                                      onChange={registerDataChange}
                                    />
                                  </div>
                                  <input
                                    type="submit"
                                    value="Register"
                                    className="btn mt-4"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginSignup;
