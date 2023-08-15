"use client";
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";

const About = (isVisible) => {
  return (
    <div className="w-full h-[500px]  mt-12 flex items-center justify-center ">
      <div className="flex flex-col ">
        <span className="text-5xl font-semibold flex gap-2 text-gray-800">
          Enes Başar{" "}
          <span className="text-3xl text-yellow-500 mt-1">
            <MdOutlineWavingHand />
          </span>
        </span>

        <span className="mt-3  text-gray-800  ">
          <p className=" ">
            Hello, I'm Enes Başar, I'm Front-end React developer{" "}
            <br className="" />
            based in Istanbul,Turkey.
          </p>
        </span>

        <span className="mt-3 flex gap-4 text-gray-800 text-2xl">
          <Link href="https://github.com/mahzunes">
            <AiFillGithub></AiFillGithub>
          </Link>

          <Link href="https://www.linkedin.com/in/enes-b-192a8a248/">
            <AiFillLinkedin></AiFillLinkedin>
          </Link>
        </span>
      </div>

      <div className="flex m-5 rounded-full bg-gradient-to-b from-gray-50 ">
        <Image
          className="object- object-center shadow-md order-1 justify-self-center rounded-full animate-bounce   "
          src="/deved.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default About;
