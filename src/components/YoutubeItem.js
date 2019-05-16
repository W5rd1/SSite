import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="item-container" id="">
      <img
        alt={video.snippet.title}
        className=""
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content-container">{video.snippet.title}</div>
    </div>
  );
};
export default VideoItem;
