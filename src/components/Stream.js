import React from "react";
import { getState } from "redux";
import Loader from "./Loader";
import axios from "axios";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import NavBar from "./Navbar";
import youtube from "../api/Youtube";
import VideoList from "./YoutubeList";

import "./stream.css";

// import bg from "https://www.youtube.com/watch?v=KcUnXunuDTs&t=2127s";

import FetchRequest from "../actions/FetchRequest";
import FetchSuccess from "../actions/FetchSuccess";
import FetchFailure from "../actions/FetchFailure";
import TwitchApp from "../reducers/TwitchApp";
class Stream extends React.Component {
  state = {
    displayname: "",
    streamer: "deadlyfoxsin",
    youtube: "bjergsen",
    youtubeVideos: []
  };
  componentDidMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.apiRequest();
    this.dispatchFetchRequest();
    this.youtubeFetch();
  }
  youtubeFetch = async channel => {
    const response = await youtube.get("/search", {
      params: {
        q: this.state.youtube,
        type: "video"
      }
    });
    this.setState({ youtubeVideos: response.data.items });
    console.log(this.state.youtubeVideos);
  };
  apiRequest() {
    axios
      .get("https://api.twitch.tv/helix/users?login=" + this.state.streamer, {
        headers: {
          "Client-ID": "ffid0hjsu47c8dw5of4ejkt3grgrzy"
        }
      })
      .then(response => {
        console.log(response);
        console.log("bleh");
        this.setState({ displayname: response.data.data[0].display_name });
        // this.dispatchFetchSuccess(stream);
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
      // <div clasName="pagewithnav">
      <div className="page">
        <div className="left-side">
          <NavBar streamer={this.state.displayname} />

          <div className="stream">
            {status === "loading" ? (
              <Loader />
            ) : status === "success" ? (
              // streamCardItems
              <div id="focused-item">
                <ReactPlayer
                  url={"https://www.twitch.tv/" + this.state.streamer}
                  width="100%"
                  height="100%"
                />
              </div>
            ) : (
              <div />
            )}
          </div>
          <div className="panel-container-container">
            <div className="youtube-panel">
              <div className="youtube-head">My videos</div>
              <VideoList videos={this.state.youtubeVideos} />{" "}
            </div>
            <div className="panel-container-rest">
              <div className="panel">C</div>
              <div className="panel">D</div>
              <div className="panel">E</div>
              <div className="panel">F</div>
              <div className="panel">F</div>
              <div className="panel">F</div>
            </div>
          </div>
        </div>
        <div className="chat">
          <Iframe
            id={this.state.streamer}
            src={
              "https://www.twitch.tv/embed/" +
              this.state.streamer +
              "/chat?darkpopout"
            }
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>
      // </div>
    );
  }
}

export default Stream;
