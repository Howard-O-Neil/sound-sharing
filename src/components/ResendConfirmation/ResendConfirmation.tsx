import { BACKEND_PUBLIC_API } from "@/App";
import { AppContext } from "@/AppContext";
import axios from "axios";
import React, { ChangeEvent, FormHTMLAttributes, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResendConfirmation.module.scss";

interface ResendConfirmation_t {
  email: string;
}

const ResendConfirmation = () => {
  const navigate = useNavigate()
  const [appState, dispatch] = useContext(AppContext)

  const [reConfirmation, setReConfirmation] = useState<ResendConfirmation_t>({
    email: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log()
    axios.post(`${BACKEND_PUBLIC_API}/account/resend-confirmation`, reConfirmation)
      .then(res => {
        if (res.data["status"]) {
          dispatch({
            type: "update_info",
            value: {
              email: res.data["old-cache"].email,
              name: res.data["old-cache"].name,
              avatar_url: res.data["old-cache"].avatar_url
            }
          })
          navigate('/verification-code')
        }
      })
    e.preventDefault()
  }

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReConfirmation({
      email: e.currentTarget.value
    })
  }

  return (
    <div className={styles.mainPanel}>
      <div className={styles.heading}>Resend confirmation instructions</div>
      <div className={styles.subPanel}>
        <br />

        <div className={styles["just-a-div"]}>
          <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
            <label>Email address</label> <br />

            <input name="email" type="text" onChange={emailChange} /> <br /> <br />

            <div className={styles.divSubmit}>
              <input className={styles.submitBtn} type="submit" value="RESEND CONFIRMATION INSTRUCTIONS" /> <br />
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

export default ResendConfirmation;
