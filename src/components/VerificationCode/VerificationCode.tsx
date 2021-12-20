import { BACKEND_PUBLIC_API } from "@/App";
import { AppContext } from "@/AppContext";
import axios from "axios";
import React, { ChangeEvent, FormHTMLAttributes, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VerificationCode.module.scss";

interface VerificationCode_t {
  email: string;
  key: string;
}

const VerificationCode = () => {
  const navigate = useNavigate()

  const [appState, dispatch] = useContext(AppContext)

  const [verificationCode, setVerificationCode] = useState<VerificationCode_t>({
    email: "",
    key: "",
  })

  const keyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode({
      email: appState.email,
      key: e.currentTarget.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios.post(`${BACKEND_PUBLIC_API}/account/verify-email`, verificationCode)
      .then(res => {
        if (res.data["status"]) {
          
          navigate('/sign-in')
        }
      }).catch(err => {
        alert(err.response.data["message"])
        navigate('/resend-confirmation')
      })
    e.preventDefault()  }

  return (
    <div className={styles.mainPanel}>
      <div className={styles.heading}>Email verification</div>
      <div className={styles.subPanel}>
        <br />

        <div className={styles["some-caution"]}>
          <div>We have sent you a verification code via email</div>
          <div>Make sure to check it and type it here. Thanks</div>
        </div>
        <br />
        <div className={styles["just-a-div"]}>
          <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
            <label>Code</label> <br />

            <input name="code" type="text" onChange={keyChange} /> <br /> <br />

            <div className={styles.divSubmit}>
              <input className={styles.submitBtn} type="submit" value="VERIFY MY EMAIL" /> <br />
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

export default VerificationCode;
