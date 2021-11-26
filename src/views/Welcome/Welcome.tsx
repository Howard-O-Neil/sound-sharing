import React from 'react';
import "@fortawesome/fontawesome-free/js/all"
import "./Welcome.scss"

const Welcome = () => {
  return (
    <div className="main-panel">
      <div className="grid-wrapper">

        {/* header */}
        <div className="grid-item-1">
          <div className="item-panel-left">
            <i className="fas fa-4x fa-headphones"></i>
            <h1>SoundSharing</h1>
          </div>
          <div className="item-panel-right">
            <button>Support</button>
            <div className="vertical-divider">|</div>
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </div>

        {/* body */}
        <div className="grid-item-2">
          <div className="txt1">LISTENING IS</div>
          <div className="txt2">EVERYTHING</div>
          <div className="txt3">Millions of songs. Enjoy!</div>
        </div>

        {/* footer */}
        <div className="grid-item-3">
          <div className="block-div">

            <div className="left-div">
              <div className="flex-div1">
                <i className="fas fa-2x fa-headphones"></i>
                <h3>SoundSharing</h3>
              </div>
              <div className="flex-div2">
                <i className="fab fa-2x fa-facebook"></i>
                <i className="fab fa-2x fa-instagram"></i>
                <i className="fab fa-2x fa-twitter"></i>
              </div>
            </div>

            <div className="right-div">
              <div className="div-card">
                <h3>COMPANY</h3>

                <div>About</div>
                <div>Jobs</div>
                <div>For the Record</div>
              </div>

              <div className="div-card">
                <h3>COMMUNITIES</h3>

                <div>For Artists</div>
                <div>Developers</div>
                <div>Advertising</div>
                <div>Investors</div>
                <div>Vendors</div>
              </div>

              <div className="div-card">
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