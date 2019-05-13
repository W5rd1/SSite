import React from "react";
import { getState } from "redux";
import Loader from "./Loader";
import axios from "axios";
import Iframe from "react-iframe";
import "./stream.css";

// import bg from "https://www.youtube.com/watch?v=KcUnXunuDTs&t=2127s";

import FetchRequest from "../actions/FetchRequest";
import FetchSuccess from "../actions/FetchSuccess";
import FetchFailure from "../actions/FetchFailure";
import TwitchApp from "../reducers/TwitchApp";
class Stream extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.apiRequest();
    this.dispatchFetchRequest();
    const script = document.createElement("script");
    script.type = "text/javascript";
    var options = {
      width: 600,
      height: 600,
      channel: "ward1"
    };
    document.body.appendChild(script);

    var player = Twitch.player("test", options);
  }

  apiRequest() {
    axios
      .get("https://api.twitch.tv/helix/streams?user_login=danucd", {
        headers: {
          "Client-ID": "ffid0hjsu47c8dw5of4ejkt3grgrzy"
        }
      })
      .then(response => {
        console.log(response);
        const stream = "A";
        console.log(response);
        this.dispatchFetchSuccess(stream);
      })
      .catch(e => {
        this.dispatchFetchFailure(e);
      });
  }
  dispatchFetchRequest() {
    this.props.store.dispatch(FetchRequest());
  }
  dispatchFetchSuccess(stream) {
    this.props.store.dispatch(FetchSuccess(stream));
  }
  dispatchFetchFailure(error) {
    this.props.store.dispatch(FetchFailure(error));
  }
  render() {
    const stateProps = this.props.store.getState();
    const status = "success";
    // const streamCardItems = stateProps.streams.map(stream => (
    //   <StreamCard
    //     key={stream._id}
    //     streamCover={stream.preview.medium}
    //     streamLink={stream.channel.url}
    //   />
    // ));
    // console.log(streamCardItems);
    return (
      <div className="page">
        <div className="slimjim">
          <div className="left-side">
            <div className="headers">
              <img className="logo" src="https://i.imgur.com/rP1BZto.png" />
              {/* <div className="link">Home</div>
              <div className="link">About Me</div>

              <div className="link">Feed</div>
              <div className="link">Socials</div> */}
            </div>
            <div className="header">
              Full-Time Dad, Developer and Entertainer
            </div>
            <div className="stream">
              {status === "loading" ? (
                <Loader />
              ) : status === "success" ? (
                // streamCardItems
                <div id="test" />
              ) : (
                // <ReactTwitchEmbedVideo
                //   channel="monstercat"
                //   layout="video"
                //   theme="dark"
                //   height="100%"
                //   width="100%"
                // />
                <div />
              )}
            </div>
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
