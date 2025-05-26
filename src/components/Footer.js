import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-dry py-4 border-t-2 border-black">
      <div className="contianer mx-auto px-2 items-center">
        Copyright &copy;{" "}
        <Link href="https://musicmayhem.com">Music Mayhem</Link>
      </div>
    </div>
  );
};

export default Footer;
