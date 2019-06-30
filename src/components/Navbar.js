import React from "react";
import "./navbar.css";
import URL from "../api/twitch/Auth";
class NavBar extends React.Component {
  render() {
    return (
      <div className="navbarbg">
        <div className="navbarcontainer">
          <div className="lefty">
            <div className="navbarlogo">
              <img className="logo" src="https://i.imgur.com/rP1BZto.png" />
            </div>
            <div className="navbarstreamer">{this.props.streamer}</div>
          </div>
          <div className="righty">
            <div className="streamerlinks">
              <div className="highlight">Follow</div>
              <div>Subscribe</div>
              <div>Tip</div>
              <div>
                <a href={URL}>Auth</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
