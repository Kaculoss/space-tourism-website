import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/5 transition-all backdrop-blur-2xl">
      <div className="w-full flex justify-center items-center text-center py-4">
        <span className="text-sm tablet:text-base font-keezy-bellefar text-[#D0D6F9] text-center">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://twitter.com/Sani_M_Alhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D0D6F9] text-black font-semibold rounded-md p-[2px]"
          >
            KEEZY🚀✨💫
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default Footer;
