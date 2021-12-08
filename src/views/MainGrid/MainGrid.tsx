import Footer from '@/components/Footer/Footer';
import ForgotPass from '@/components/ForgotPass/ForgotPass';
import Header from '@/components/Header/Header';
import ResendConfirmation from '@/components/ResendConfirmation/ResendConfirmation';
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
           {/* <ForgotPass /> */}
           <ResendConfirmation />
          </div>
           <div className={styles.footerDiv}><Footer /></div>
            
        </div>
    </div>
  )
};

export default MainGrid;