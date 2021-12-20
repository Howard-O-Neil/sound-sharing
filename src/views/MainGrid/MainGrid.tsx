import React, { useContext, useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ResendConfirmation from '@/components/ResendConfirmation/ResendConfirmation';
import styles from "./MainGrid.module.scss"
import Dashboard from '@/views/Dashboard/Dashboard';
import SignIn from '@/components/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '@/components/SignUp/SignUp';
import ForgotPass from '@/components/ForgotPass/ForgotPass';
import VerificationCode from '@/components/VerificationCode/VerificationCode';
import UploadSound from '@/components/UploadSound/UploadSound';
import { AppContext } from '@/AppContext';
import axios from 'axios';
import { BACKEND_PUBLIC_API } from '@/App';

const MainGrid = () => {
  const [appState, dispatch] = useContext(AppContext)

  useEffect(() => {
    appState.listTags.length
    axios.get(`${BACKEND_PUBLIC_API}/sound/get-tags`)
      .then(res => {
        dispatch({
          type: "update_list_tags",
          value: res.data["listTags"]
        })
      })
  }, []);
  
  if (appState.listTags.length <= 0) {
    return <h2>Initializing...</h2>
  } else {
    return (
    <div className={styles["main-panel"]}>
      <div className={styles["main-wrapper"]}>
        <div className={styles.headerDiv}><Header /></div>

        <div className={styles.appWrapper}>
          {/* <Route path="/" /> */}
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/resend-confirmation" element={<ResendConfirmation />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/upload-sound" element={<UploadSound />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <div className={styles.footerDiv}><Footer /></div>

      </div>
    </div>)
  }
};

export default MainGrid;