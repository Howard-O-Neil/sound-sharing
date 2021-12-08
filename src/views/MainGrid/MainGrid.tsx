import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ResendConfirmation from '@/components/ResendConfirmation/ResendConfirmation';
import styles from "./MainGrid.module.scss"

const MainGrid = () => {
  return (
    <div className={styles["main-panel"]}>
        <div className={styles["main-wrapper"]}>
            <div className={styles.headerDiv}><Header /></div>
            
          <div className={styles.appWrapper}>
            
           <ResendConfirmation />
          </div>
           <div className={styles.footerDiv}><Footer /></div>
            
        </div>
    </div>
  )
};

export default MainGrid;