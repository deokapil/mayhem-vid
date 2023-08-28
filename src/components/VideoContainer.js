"use client";
import React, { useEffect, useState } from "react";
import VideoJsPlayer from "./VideoJsPlayer";
import { io as ClientIO } from "socket.io-client";
import { useRouter } from "next/navigation";

const VideoContainer = ({ video }) => {
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  console.log(video);

  useEffect(() => {
    const socket = new ClientIO(process.env.NEXT_PUBLIC_SITE_URL, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    // update chat on new message dispatched
    socket.on("message", (message) => {
      if (!message.show) {
        router.push(`/err?code=1003&videoId$=${video.id}`);
      }
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  return (
    <div className="bg-zinc-950">
      <div className="text-xl text-center py-2 my-2">{video.title}</div>
      <div className="flex justify-center flex-row h-[calc(100%-56px)]">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          {!connected ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <VideoJsPlayer url={video.video_url} videoId={video.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
