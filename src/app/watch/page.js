import { BsArrowLeftCircleFill } from "react-icons/bs";
import React from "react";
import { getVideoById } from "@/lib/videos";
import NotPlaying from "@/components/NotPlaying";
import VideoContainer from "@/components/VideoContainer";

const page = async ({ searchParams }) => {
  const { video } = searchParams;
  const res = await getVideoById(video);
  console.log(res);

  return (
    <div className="container mx-auto bg-black p-6 mb-12 ">
      <div className="nav">
        <button className="btn">
          <BsArrowLeftCircleFill />
        </button>
      </div>
      <div className="my-2">
        {res.state == "playing" ? (
          <VideoContainer video={res} />
        ) : (
          <NotPlaying />
        )}
      </div>
    </div>
  );
};

export default page;
