import React, { ChangeEvent, FormHTMLAttributes, useContext, useRef } from "react";
import styles from "./Header.module.scss";
import logo from "@/Resource/Img/logo.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/AppContext";

const Header = () => {
  const navigate = useNavigate()

  const [_, dispatch] = useContext(AppContext)

  const timeoutId = useRef<number>(0)
  const searchString = useRef<string>("")
  
  return (
    <div>
      <div className={styles.mainPanelParent}>
        <div className={styles.mainPanel}>
          <div className={styles.listBtn}>
            <img src={logo} className={styles.logo} alt="sound sharing logos" />
            <button>Categories</button>
            <button>Tags</button>
            <button>Collection</button>
            <button onClick={(e) => {navigate('/upload-sound')}}>Upload</button>
            <button>Blog</button>
            <button onClick={(e) => {navigate('/sign-in')}}>Login</button>
            <button onClick={(e) => {navigate('/sign-up')}}>Sign Up</button>

            <button className={styles.feedback}>
              <i className="fas fa-bullhorn"></i>
              &nbsp;Feedback
            </button>
          </div>
        </div>

        <div className={styles.searchBar}>
          <i className={styles.searchIcon + " fas fa-search"}></i>
          <input placeholder="Search for anythings" type="text" onChange={(e) => {
            searchString.current =  e.currentTarget.value;

            window.clearInterval(timeoutId.current)
            timeoutId.current = window.setTimeout(() => {
              console.log("fuck")
              dispatch({type: "update_search_key", value: searchString.current})
            }, 3000)
            
          }}></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
