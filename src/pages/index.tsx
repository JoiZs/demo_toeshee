import gsap from "gsap";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Darkcontext } from "../context/darkCtx";

const Home: NextPage = () => {
  const [isDark, setIsDark] = useContext(Darkcontext);
  const title = "TOESHEE".split("");
  useEffect(() => {
    gsap.fromTo(
      "#eachTitle",
      { opacity: 0, translateY: 10, scale: 0.8, color: "#ff251d" },
      {
        opacity: 1,
        delay: (i) => i * 0.2,
        translateY: 0,
        scale: 1,
        color: isDark ? "#e5e7eb" : "#000",
      }
    );
    gsap.fromTo(
      "#smdia",
      { scale: 0, translateY: 10 },
      { scale: 1, translateY: 0, delay: 2 }
    );
  });
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-row">
        {title.map((el) => (
          <h1
            className="font-bold text-5xl tracking-wider lg:text-8xl"
            id="eachTitle"
            key={el + Math.random()}
          >
            {el}
          </h1>
        ))}
      </div>
      <p className="opacity-80 m-4 italic text-xs tracking-widest text-red-700 dark:text-red-400 lg:text-sm">
        Toeshee will provide metaverse services
      </p>
      <button className="p-2 border hover:bg-red-300 hover:bg-opacity-40 border-orange-500 dark:border-red-300">
        Explore Toeshee
      </button>
      <div
        id="smdia"
        className="fixed scale-0 space-x-2 bottom-2 flex flex-row items-center"
      >
        <FaFacebookF className="hover:scale-110 cursor-pointer hover:text-orange-600" />
        <FaTwitter className="hover:scale-110 cursor-pointer hover:text-orange-600" />
        <FaGoogle className="hover:scale-110 cursor-pointer hover:text-orange-600" />
        <FaInstagram className="hover:scale-110 cursor-pointer hover:text-orange-600" />
      </div>
    </div>
  );
};

export default Home;
