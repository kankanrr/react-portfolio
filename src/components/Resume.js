import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto pb-10">
          Feel free to download a copy of my resume
        </p>
        <div className="flex -m-4 justify-center">
          <a
            href=""
            target="_blank"
            key="./resume.png"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex">
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100 hover:bg-gray-900">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  My Resume
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Click here to view full document
                </h1>
                <p className="leading-relaxed">
                  Resume hosted on google docs for ease of access
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
