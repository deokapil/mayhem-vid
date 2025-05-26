"use client";
import React, { useEffect, useState } from "react";
import VideoJsPlayer from "./VideoJsPlayer";
import { useRouter } from "next/navigation";
import { pusherClient } from "@/lib/pusher";
import VideoPlayer from "./VideoPlayer";
const VideoContainer = ({ video }) => {
  console.log(process.env.NEXT_PUBLIC_PUSHER_APP_KEY);

  const router = useRouter();
  const [connected, setConnected] = useState(false);

  console.log(`video-channel-${video.id}`);
  useEffect(() => {
    //   console.log(`video-channel-${video.id}`);
    // const channel = pusherClient.subscribe(`video-channel-${video.id}`);
    // return () => {};
  }, []);

  return (
    <div className="bg-zinc-950">
      <div className="text-xl text-center py-2 my-2">{video.title}</div>
      <div className="flex justify-center flex-row h-[calc(100%-56px)]">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <span className="loading loading-spinner loading-md"></span>
          {video.state == "live" ? (
            <VideoJsPlayer url={video.video_url} videoId={video.id} />
          ) : (
            <VideoPlayer video={video} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
