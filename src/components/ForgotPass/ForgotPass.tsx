import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./ForgotPass.module.scss";

const ForgotPass = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget)
    console.log(e.currentTarget.value)
    e.preventDefault()
  }

  return (
    <div className={styles.mainPanel}>
      <div className={styles.heading}>Forgot your password?</div>
      <div className={styles.subPanel}>
        <br />

        <div className={styles["just-a-div"]}>
          <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
            <label>Email address</label> <br />

            <input name="email" type="text" /> <br /> <br />

            <div className={styles.divSubmit}>
              <input className={styles.submitBtn} type="submit" value="SEND ME RESET PASSWORD INSTRUCTIONS" /> <br />
            </div>
          </form>
        </div>

        <br />
        <a href="#">Sign Up?</a> <br />
        <a href="#">Forgot your password?</a> <br />

        <a href="#">Didn't receive confirmation instruction?</a> <br />

      </div>
    </div>
  );
};

export default ForgotPass;
