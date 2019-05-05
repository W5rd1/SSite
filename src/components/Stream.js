import React from "react";
// import { getState } from "redux";
// import Loader from "./Loader";
// import axios from "axios";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import Iframe from "react-iframe";
import "./stream.css";

// import FetchRequest from "../actions/FetchRequest";
// import FetchSuccess from "../actions/FetchSuccess";
// import FetchFailure from "../actions/FetchFailure";
class Stream extends React.Component {
  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://api.twitch.tv/kraken/streams/featured?client_id=ffid0hjsu47c8dw5of4ejkt3grgrzy"
  //     )
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  render() {
    // const stateProps = this.props.store.getState();
    // const status = stateProps.status;
    // const status = "loading";
    return (
      <div className="page">
        <div className="slimjim">
          <div className="left-side">
            <div className="headers">
              <div className="link">Home</div>
              <div className="link">About Me</div>
              <img className="logo" src="https://i.imgur.com/rP1BZto.png" />
              <div className="link">Feed</div>
              <div className="link">Socials</div>
            </div>
            <div className="header">
              Full-Time Dad, Developer and Entertainer
            </div>
            <ReactTwitchEmbedVideo
              channel="monstercat"
              layout="video"
              theme="dark"
              height="100%"
              width="100%"
            />
          </div>
        </div>
        <div className="chat">
          <Iframe
            id="ward1"
            src="https://www.twitch.tv/embed/ward1/chat?darkpopout"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}

export default Stream;
