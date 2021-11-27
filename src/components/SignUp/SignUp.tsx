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

      <div className={styles["signup-div"]}>
        <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
          <label>Email address</label> <br/>
          
          <input name="email" type="text" /> <br/>
          
          <label>Password</label> <br/>
          
          <input name="pass" type="text" /> <br/>

          <label>Confirm your password</label> <br/>
          
          <input name="confirm-pass" type="text" /> <br/>

          <label>What should we call you?</label> <br/>
          
          <input name="profile-name" type="text" /> <br/>

          <input className={styles["submit-btn"]} type="submit" value="Sign up" /> <br/>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
