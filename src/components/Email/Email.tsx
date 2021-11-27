import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./Email.module.scss";

const Email = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget)
    console.log( e.currentTarget.value)
    e.preventDefault()
  }

  return (
    <div>
      <hr></hr>
      <div className={styles.heading}>Reset Password</div>
      <div className={styles["note-wrapper"]}>
        <div className={styles.note}>
          Enter you SoundSharing username, or the email address that you used to register.
          We'll send you an email with your profile name and a link to reset your password
        </div>
      </div>
    
      <br/><br/>
      <div className={styles["reset-div"]}>
        <form onSubmit={handleSubmit} className={styles["form-wrap"]}>
          <label>Email address or profile name</label> <br/>
          
          <input name="profile-identical" type="text" /> <br/>
          
          <input className={styles["submit-btn"]} type="submit" value="Send code" /> <br/>
        </form>
      </div>
    </div>
  );
};

export default Email;
