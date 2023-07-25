import React from "react";

const Title = ({ title, Icon }) => {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center my-6">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4" />
      <h2 className="sm:text-xl font-bold">{title}</h2>
    </div>
  );
};

export default Title;
