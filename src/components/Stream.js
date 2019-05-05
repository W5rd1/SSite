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
      <div class="page">
        <div>
          <ReactTwitchEmbedVideo
            channel="monstercat"
            layout="video"
            theme="dark"
          />
        </div>
        <div>
          <Iframe
            id="ward1"
            src="https://www.twitch.tv/embed/ward1/chat"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default Stream;
