import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from'./App.module.scss';
import MainGrid from "@/views/MainGrid/MainGrid";
// <Nav/>
// <Routes>
//   {/* <Route path=":id" element={<UserProfile />} />
//   <Route path="me" element={<OwnUserProfile />} /> */}
// </Routes>

const App = () => {
  return (
    <div className={styles.App}>
      <MainGrid />
    </div>
  )
};

export default App;
