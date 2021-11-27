import React from 'react';
import styles from "./Welcome.module.scss"

const Welcome = () => {
  return (
    <div className={styles["main-panel"]}>
      <div className={styles["grid-wrapper"]}>

        {/* header */}
        <div className={styles["grid-item-1"]}>
          <div className={styles["item-panel-left"]}>
            <i className="fas fa-4x fa-headphones"></i>
            <h1>SoundSharing</h1>
          </div>
          <div className={styles["item-panel-right"]}>
            <button>Support</button>
            <div className={styles["vertical-divider"]}>|</div>
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </div>

        {/* body */}
        <div className={styles["grid-item-2"]}>
          <div className={styles.txt1}>LISTENING IS</div>
          <div className={styles.txt2}>EVERYTHING</div>
          <div className={styles.txt3}>Millions of songs. Enjoy!</div>
        </div>

        {/* footer */}
        <div className={styles["grid-item-3"]}>
          <div className={styles["block-div"]}>

            <div className={styles["left-div"]}>
              <div className={styles["flex-div1"]}>
                <i className="fas fa-2x fa-headphones"></i>
                <h3>SoundSharing</h3>
              </div>
              <div className={styles["flex-div2"]}>
                <i className="fab fa-2x fa-facebook"></i>
                <i className="fab fa-2x fa-instagram"></i>
                <i className="fab fa-2x fa-twitter"></i>
              </div>
            </div>

            <div className={styles["right-div"]}>
              <div className={styles["div-card"]}>
                <h3>COMPANY</h3>

                <div>About</div>
                <div>Jobs</div>
                <div>For the Record</div>
              </div>

              <div className={styles["div-card"]}>
                <h3>COMMUNITIES</h3>

                <div>For Artists</div>
                <div>Developers</div>
                <div>Advertising</div>
                <div>Investors</div>
                <div>Vendors</div>
              </div>

              <div className={styles["div-card"]}>
                <h3>USEFUL LINKS</h3>

                <div>Supports</div>
                <div>Web Player</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Welcome;