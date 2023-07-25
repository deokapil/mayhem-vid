"use client";
import React from "react";
import Title from "./Title";
import VideoJsPlayer from "./VideoJsPlayer";

const VideoContainer = ({ video }) => {
  return (
    <div className="bg-zinc-950">
      <div className="text-xl text-center py-2 my-2">{video.title}</div>
      <div className="flex justify-center flex-row h-[calc(100%-56px)]">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <VideoJsPlayer url={video.video_url} />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
