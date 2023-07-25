import React from "react";
import Title from "./Title";
import { BsCollectionFill } from "react-icons/bs";
import Link from "next/link";

const CardList = ({ videos, title }) => {
  return (
    <>
      <Title title={title} Icon={BsCollectionFill} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {videos.map((video) => {
          return (
            <div
              key={video.title}
              className="card w-96 bg-fuchsia-600 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{video.title}</h2>
                <div className="card-actions justify-end">
                  {video.state == "playing" ? (
                    <Link href={`/watch?video=${video.id}`}>
                      <button className="btn btn-primary">Watch Now</button>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
