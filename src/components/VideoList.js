"use client";
import axios from "axios";
import React, { useEffect } from "react";
import CardList from "./CardList";

const VideoList = () => {
  const [videosPlaying, setVideosPlaying] = React.useState(null);
  const [videosScheduled, setVideosScheduled] = React.useState(null);
  useEffect(() => {
    axios.get(`/api/videos`).then((data) => {
      console.log(data);
      setVideosPlaying(
        data.data.videos.filter((video) => video.state == "playing")
      );
      setVideosScheduled(
        data.data.videos.filter((video) => video.state == "scheduled")
      );
    });
  }, []);

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
