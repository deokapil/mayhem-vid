import { errorCodes } from "@/lib/ErrorCodes";
import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const MayhemError = async ({ searchParams }) => {
  const { code, videoId } = searchParams;

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
        <div className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{errorCodes[code]}</span>
          <div>
            <Link href={`/watch?video=${videoId}`}>
              <button className="btn btn-sm btn-primary">Retry</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MayhemError;
