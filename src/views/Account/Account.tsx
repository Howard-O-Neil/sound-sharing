import React from "react";
import "@fortawesome/fontawesome-free/js/all";
import "./Account.scss";

interface Account_prop {
  child: (props: any) => any
}

const Account = (props: Account_prop) => {
  return (
    <div className="main-panel">
      <div className="main-wrapper">
        <div className="wrapper">
          <div className="flex-div">
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
