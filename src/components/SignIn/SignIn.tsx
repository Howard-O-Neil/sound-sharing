import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./SignIn.module.scss";

const SignIn = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget)
    console.log(e.currentTarget.value)
    e.preventDefault()
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

            <input name="email" type="text" /> <br /> <br />

            <label>Password</label> <br />

            <input name="pass" type="text" /> <br /> <br />

            <input name="remember" type="checkbox" className={styles.checkbox} />
            <label>Remember me</label>

            <div className={styles.divSubmit}>
              <input className={styles.submitBtn} type="submit" value="LOG IN" /> <br />
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

export default SignIn;
