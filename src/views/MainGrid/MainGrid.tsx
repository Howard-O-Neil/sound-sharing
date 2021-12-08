import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SignIn from '@/components/SignIn/SignIn';
import SignUp from '@/components/SignUp/SignUp';
import React from 'react';
import styles from "./MainGrid.module.scss"

const MainGrid = () => {
  return (
    <div className={styles["main-panel"]}>
        <div className={styles["main-wrapper"]}>
            <div className={styles.headerDiv}><Header /></div>
            
          <div className={styles.appWrapper}>
            {/* <SignIn /> */}
            <SignUp />
          </div>
           <div className={styles.footerDiv}><Footer /></div>
            
        </div>
    </div>
  )
};

export default MainGrid;