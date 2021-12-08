import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.value);
    e.preventDefault();
  };

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
              <label>Full name</label> <br />
              <input name="name" type="text" /> <br /> <br />
              <label>Email address</label> <br />
              <input name="email" type="text" /> <br /> <br />
              <label>Password</label> <br />
              <input name="pass" type="text" /> <br /> <br />
              <label>Retype password</label> <br />
              <input name="pass" type="text" /> <br />
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
      <a href="#">Log In</a> <br />
      <a href="#">Forgot your password?</a> <br />
      <a href="#">Didn't receive confirmation instruction?</a> <br />
    </div>
  );
};

export default SignUp;
