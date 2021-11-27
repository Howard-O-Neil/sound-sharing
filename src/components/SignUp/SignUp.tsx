import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./SignUp.module.scss";

const SignUp = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget)
    console.log( e.currentTarget.value)
    e.preventDefault()
  }

  return (
    <div>
      <div className={styles.heading}>Sign up for free to start listening!</div>
      <hr></hr>
      <div>
        <button>
          <i className="fab fa-2x fa-facebook"></i>
          Continue with FACEBOOK
        </button>
      </div>
      <div>
        <button>
          <i className="fab fa-2x fa-google"></i>
          Continue with GOOGLE
        </button>
      </div>
      <div className={styles["flex-div"]}>
        <p>----------</p>
        <h3>OR</h3>
        <p>----------</p>
      </div>

      <div className={styles["login-div"]}>
        <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
          <label>Email address</label> <br/>
          
          <input name="email" type="text" /> <br/>
          
          <label>Password</label> <br/>
          
          <input name="pass" type="text" /> <br/>
          
          <input name="remember" type="checkbox" />
          <label>Remember me</label>

          <input className={styles["submit-btn"]} type="submit" value="Login" /> <br/>
        </form>
      </div>

      <br />
      <a href="#">Forgot your password?</a>

      <br /> <br /> <br />
      <hr className={styles["short-ruler"]}></hr>

      <div className={styles.heading}>You don't have account?</div>
      <button>
          <i className="fas fa-2x fa-user-plus"></i>
          Sign up for SoundSharing
        </button>
    </div>
  );
};

export default SignUp;
