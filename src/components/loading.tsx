import React from "react";
import RotateLoader from "react-spinners/RotateLoader";

interface Props {}

const Loading = (props: Props) => {
  return (
    <div className="bg-slate-900 w-screen h-screen flex justify-center items-center">
      <RotateLoader color="#ff4e48" />
      <span className="fixed left-2 bottom-2 uppercase text-white tracking-widest text-xs opacity-40 italic">
        toeshee
      </span>
    </div>
  );
};

export default Loading;
