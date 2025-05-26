"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }) => {
  console.log(video);
  return (
    <div>
      <ReactPlayer
        url={video.video_cdn}
        height="85vh"
        width="850px"
        controls={true}
        className="bg-dark overflow-hidden"
      />
    </div>
  );
};

export default VideoPlayer;
