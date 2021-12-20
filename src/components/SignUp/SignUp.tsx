import { BACKEND_APP_API, BACKEND_PUBLIC_API, CDN_API } from "@/App";
import { AppContext } from "@/AppContext";
import axios from "axios";
import React, { ChangeEvent, FormHTMLAttributes, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss";

interface SignUpAccountInfo {
  email: string;
  password: string;
  retypePassword: string;
  name: string;
  avatar_url: string;
}

const SignUp = () => {
  const navigate = useNavigate()
  const [appState, dispatch] = useContext(AppContext)
  const [avatarForm, setAvatarForm] = useState<FormData>()

  const [account, setAccount] = useState<SignUpAccountInfo>({
    email: "",
    password: "",
    retypePassword: "",
    name: "",
    avatar_url: "",
  })

  useEffect(() => {
    if (account.avatar_url !== "") {
      axios.post(`${BACKEND_PUBLIC_API}/account/sign-up`, account)
        .then(res => {
          if (res.data["status"]) {
            dispatch({
              type: "update_info",
              value: {
                email: account.email,
                name: account.name,
                avatar_url: account.avatar_url
              }
            })
            navigate('/verification-code')
          }
        })
    }
  }, [account])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios.post(`${CDN_API}/upload-file`, avatarForm, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      setAccount({
        ...account,
        avatar_url: `${CDN_API}/serve?file-id=${res.data["filename"]}`
      })
    })

    e.preventDefault()
  };

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

  const retypePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      retypePassword: e.currentTarget.value
    })
  }

  const fullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      name: e.currentTarget.value
    })
  }

  const avatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const formData = new FormData();
    formData.append("file", e.currentTarget.files[0])

    setAvatarForm(formData)

    // setAccount({
    //   ...account,
    //   name: e.currentTarget.value
    // })
  }

  return (
    <div className={styles.mainPanel}>
      <div className={styles.heading}>
        Ready to explore the world's greatest sound library?
      </div>
      <div className={styles.heading1}>1. Create your FREE account</div>
      <div className={styles.heading1}>2. Start downloading right away</div>
      <div className={styles.gridPanel}>
        <div className={styles.subPanel1}>
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
            <p>Or sign up with email</p>
          </div>

          <br />
        </div>

        <div className={styles.subPanel2}>
          <div className={styles["signup-div"]}>
            <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
              <label>What should we call you?</label> <br />
              <input name="name" type="text" onChange={fullnameChange} /> <br /> <br />
              <label>Your avatar</label> <br />
              <input name="name" type="file" onChange={avatarChange} /> <br /> <br />
              <label>Email address</label> <br />
              <input name="email" type="text" onChange={emailChange} /> <br /> <br />
              <label>Password</label> <br />
              <input name="pass" type="text" onChange={passwordChange} /> <br /> <br />
              <label>Retype password</label> <br />
              <input name="pass" type="text" onChange={retypePasswordChange} /> <br />
              <div className={styles.divSubmit}>
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="SIGN UP"
                />{" "}
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <a href="/sign-in">Log In</a> <br />
      <a href="/forgot-password">Forgot your password?</a> <br />
      <a href="/resend-confirmation">Didn't receive confirmation instruction?</a> <br />
    </div>
  );
};

export default SignUp;
