import React, { ChangeEvent, FormHTMLAttributes, useContext, useState } from "react";
import styles from "./SignIn.module.scss";
import axios from "axios";
import { BACKEND_APP_API, BACKEND_PUBLIC_API } from "@/App";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "@/AppContext";

interface SignInAccountInfo {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate()
  
  const [appState, dispatch] = useContext(AppContext)

  const [account, setAccount] = useState<SignInAccountInfo>({
    email: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    console.log(account)
    // console.log()
    axios.post(`${BACKEND_PUBLIC_API}/account/sign-in`, account)
      .then(res => {
        if (res.data["status"]) {
          dispatch({
            type: "update_info",
            value: {
              email: res.data["account"].email,
              name: res.data["account"].name,
              avatar_url: res.data["account"].avatar_url
            }
          })
          window.localStorage.setItem("token", res.data["token"])
          navigate("/dashboard")
        }
      })

    e.preventDefault()
  }

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      email: e.currentTarget.value
    })
  }

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      password: e.currentTarget.value
    })
  }

  return (
    <div className={styles.mainPanel}>
      <div className={styles.heading}>Sign In</div>
      <div className={styles.subPanel}>
        <button className={styles.facebook}>
          <i className="fab fa-2x fa-facebook"></i>
          &nbsp;Continue with Facebook
        </button>
        <button className={styles.google}>
          <i className="fab fa-2x fa-google"></i>
          &nbsp;Continue with Google
        </button>

        <hr />

        <div className={styles.orTxt}>
          <p >Or login with email</p>
        </div>


        <div className={styles["login-div"]}>
          <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
            <label>Email address</label> <br />

            <input name="email" type="text" onChange={emailChange} /> <br /> <br />

            <label>Password</label> <br />

            <input name="pass" type="text" onChange={passwordChange} /> <br /> <br />

            <input name="remember" type="checkbox" className={styles.checkbox} />
            <label>Remember me</label>

            <div className={styles.divSubmit}>
              <input className={styles.submitBtn} type="submit" value="LOG IN" /> <br />
            </div>
          </form>
        </div>

        <br />
        <a href="/sign-up">Sign Up?</a> <br />
        <a href="/forgot-password">Forgot your password?</a> <br />
        <a href="/resend-confirmation">Didn't receive confirmation instruction?</a> <br />
      </div>
    </div>
  );
};

export default SignIn;
