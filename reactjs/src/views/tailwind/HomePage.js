import React from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import ReactPlayer from "react-player";

export default function DetailPage() {
  return (
    <div className="relative pt-24">
      {/* navbar */}
      <div className="fixed top-0 bg-black w-full h-16 shadow-lg shadow-slate-300">
        <div className="px-5 py-3 flex items-center justify-between">
          {/* kiri */}
          <div class="flex-1 flex items-center text-white">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div class="ml-5 flex items-center justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <h1 className=" font-bold text-xl">_DUNNO</h1>
            </div>

          </div>

          {/* tengah */}
          <div className="flex-1 flex items-center m-auto">
            <div className="relative w-full flex items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-4 absolute"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "gray", fontSize: 16 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="p-2 pl-10 bg-slate-200 w-full tracking-wider outline-gray-600 border-none rounded-full text-sm"
                placeholder="Search movies, actors, and more..."
              />
            </div>
          </div>

          {/* right */}
          <div class="flex-1 flex items-center justify-end text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div class="font-normal cursor-pointer ml-25 mr-2">WISHLIST</div>
            <div class="font-normal cursor-pointer ml-25 mr-2 text-xl">I</div>
            <div class="font-normal cursor-pointer ml-25">SIGN IN</div>
          </div>
        </div>
      </div>

      {/* containts */}

    </div>
  );
}
