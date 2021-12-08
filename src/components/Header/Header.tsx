import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./Header.module.scss";
import logo from "@/Resource/Img/logo.png";
const Header = () => {
  return (
    <div>
      <div className={styles.mainPanelParent}>
        <div className={styles.mainPanel}>
          <div className={styles.listBtn}>
            <img src={logo} className={styles.logo} alt="sound sharing logos" />
            <button>Categories</button>
            <button>Tags</button>
            <button>Collection</button>
            <button>Upload</button>
            <button>Blog</button>
            <button>Log In</button>
            <button>Sign Up</button>

            <button className={styles.feedback}>
              <i className="fas fa-bullhorn"></i>
              &nbsp;Feedback
            </button>
          </div>
        </div>

        <div className={styles.searchBar}>
          <i className={styles.searchIcon + " fas fa-search"}></i>
          <input placeholder="Search for anythings" type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
