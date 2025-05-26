"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

// check permission
// subscribe to pusher
// load video
const LiveVideo = ({ video }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`video-${video.id}`],
    queryFn: () => {
      fetch(`/api/permisison?channel-name=video-channel-${video.id}`);
    },
  });
  console.log(data);
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    console.log("Hello Loading");
    return () => {};
  }, [loading]);

  return <div>LiveVideo</div>;
};

export default LiveVideo;
