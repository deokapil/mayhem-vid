import { BsArrowLeftCircleFill } from "react-icons/bs";
import React from "react";
import { getVideoById } from "@/lib/videos";
import NotPlaying from "@/components/NotPlaying";
import VideoContainer from "@/components/VideoContainer";
import Link from "next/link";

const Watch = async ({ searchParams }) => {
  const { video } = searchParams;
  const res = await getVideoById(video);

  return (
    <div className="container mx-auto bg-black p-6 mb-12 ">
      <div className="nav">
        <Link href="/">
          <button className="btn">
            <BsArrowLeftCircleFill />
          </button>
        </Link>
      </div>
      <div className="my-2">
        {res.state != "finished" ? (
          <VideoContainer video={res} />
        ) : (
          <NotPlaying />
        )}
      </div>
    </div>
  );
};

export default Watch;
