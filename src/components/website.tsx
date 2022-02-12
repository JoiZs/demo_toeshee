import React from "react";
import Navbar from "./navbar";
import Particlebg from "./particlebg";

interface Props {
  component: JSX.Element;
}

const Website = (props: Props) => {
  return (
    <div className="w-screen h-screen text-black dark:text-gray-200 ">
      <Navbar />
      {props.component}
      <Particlebg />
    </div>
  );
};

export default Website;
