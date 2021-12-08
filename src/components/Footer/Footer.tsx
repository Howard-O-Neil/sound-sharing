import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from "./Footer.module.scss";
import logo from "@/Resource/Img/logo.png";
import facebook from "@/Resource/Img/facebook.png";
import twitter from "@/Resource/Img/twitter.png";
import youtube from "@/Resource/Img/youtube.png";

const Footer = () => {
  return (
      <div>
              <div className={styles.mainPanel}>
      <img src={logo} className={styles.logo} alt="sound sharing logos" />

      <div className={styles.connectWithUs}>
        <p>Connect with us</p>

        <div>
          <img
            src={facebook}
            className={styles.connectWithUsLogo}
            alt="sound sharing logos"
          />
          <img
            src={twitter}
            className={styles.connectWithUsLogo}
            alt="sound sharing logos"
          />
          <img
            src={youtube}
            className={styles.connectWithUsLogo}
            alt="sound sharing logos"
          />
        </div>
      </div>

      <div className={styles.listBtn}>
        <div>
          <button>About/FAQ</button> <br />
          <button>Blog</button> <br />
          <button>Press Kit</button> <br />
          <button>Privacy Policy</button> <br />
          <button>Contact</button> <br />
        </div>
      </div>
    </div>

      </div>
  );
};

export default Footer;
