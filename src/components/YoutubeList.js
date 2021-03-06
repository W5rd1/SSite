import React from "react";
import VideoItem from "./YoutubeItem";
import "./youtubeitem.css";

const VideoList = ({ videos }) => {
  console.log(videos);
  const RenderedList = videos.map(video => {
    // console.log(video);
    return <VideoItem key={video.id.videoId} video={video} />;
  });
  //   console.log(RenderedList);
  return <div className="">{RenderedList}</div>;
};
export default VideoList;
