"use client";
import Image from "next/image";
import React from "react";

import { MdUploadFile } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
const Abouttwo = () => {
  return (
    <section className="flex flex-col items-center mt-14 w-full h-[500px]  ">
      <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>

      <div className="flex flex-row items-center justify-center">
        <div className="items-center flex justify-center  w-[50%] h-[50%] ">
          {" "}
          <Image
            className="ml-32"
            src="/phototwo.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>

        <div className=" w-[50%] h-[50%] flex flex-col gap-3 mr-24 mb-6">
          <p className="text-gray-900">
            Hello, I'm Enes Başar, 22 years old, I graduated from Akdeniz
            University Management Information Systems in June 2023. I chose to
            be a frontend developer and I continue to develop projects and learn
            new technologies in this field. I am ambitious, open to learning and
            prone to teamwork. You can find my CV attached, you can find my own
            projects on my Github account.
            <br />
            <span className="flex gap-4 mt-3 text-2xl">
              <Link href="https://github.com/mahzunes">
                <AiFillGithub></AiFillGithub>
              </Link>

              <Link href="https://www.linkedin.com/in/enes-b-192a8a248/">
                <AiFillLinkedin></AiFillLinkedin>
              </Link>
            </span>
          </p>

          <a
            download=""
            href="/CV.pdf"
            className="flex border rounded-md w-36 p-3 mt-1 items-center gap-1 justify-center bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:animate-bounce"
          >
            Download CV <MdUploadFile className="text-md"></MdUploadFile>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Abouttwo;
