"use client";
import axios from "axios";
import React, { useEffect } from "react";
import CardList from "./CardList";

const VideoList = ({ videoList }) => {
  const videosPlaying = videoList.filter((video) => video.state == "playing");
  const videosScheduled = videoList.filter(
    (video) => video.state == "scheduled"
  );
  return (
    <>
      <div>
        {videosPlaying && (
          <CardList videos={videosPlaying} title="Playing Now" />
        )}
      </div>
      <div>
        {videosScheduled && (
          <CardList videos={videosScheduled} title="Comming up later ..." />
        )}
      </div>
    </>
  );
};

export default VideoList;
