"use client";
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useRouter } from "next/navigation";

export const VideoJsPlayer = ({ url, videoId }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  //   const {options, onReady} = props;

  const router = useRouter();
  React.useEffect(() => {
    const options = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${url}`,
          type: "application/x-mpegURL",
        },
      ],
    };

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
      }));
      // player.on("error", function () {
      //   router.push(`/err?code=1004&videoId=${videoId}`);
      // });
      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJsPlayer;
