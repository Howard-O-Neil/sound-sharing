import React from "react";
import styles from "./Account.module.scss";

interface Account_prop {
  child: (props: any) => any
}

const Account = (props: Account_prop) => {
  return (
    <div className={styles["main-panel"]}>
      <div className={styles["main-wrapper"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["flex-div"]}>
            <i className="fas fa-4x fa-headphones"></i>
            <h1>SoundSharing</h1>
          </div>
          <props.child />
        </div>
      </div>
    </div>
  );
};

export default Account;
