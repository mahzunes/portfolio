"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

const contact = () => {
  const [mail, setMail] = useState("");
  const mailCollectionRef = collection(db, "mails");

  const addDocs = async () => {
    await addDoc(mailCollectionRef, { mail: mail });
    setMail("");
  };

  return (
    <div className="flex flex-col items-center w-screen  text-gray-900 mt-28 mb-10 ">
      <h1 className="text-3xl">Contact</h1>

      <div className="flex w-full items-center justify-center mt-12 gap-3">
        <div className="flex flex-col w-1/3 bg-gradient-to-r from-slate-100 h-80 items-center justify-center">
          <h1 className="text-2xl mb-4">Contact you</h1>
          <input
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            type="text"
            placeholder="Your email adress..."
            className="bg-white p-3 w-80 font-bold h-10 text-black border-b-2 placeholder-shown:border-gray-600 placeholder:not-italic placeholder:text-gray-600 rounded-lg "
          />
          <button
            className=" p-1 w-32 mt-3 ml-1 h-10 border-b-2 rounded-lg text-gray-900 bg-gray-50 hover:bg-gray-900 hover:text-gray-50"
            onClick={() => addDocs()}
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col w-1/3 bg-gradient-to-r from-slate-100 h-80 items-center justify-center ">
          <h1 className="text-2xl mb-5">Contact Us</h1>
          <ul className="flex flex-col gap-4 mb-7 ">
            <li className="flex text-xl gap-3 items-center">
              <HiMail className="text-2xl"></HiMail>
              <span className="text-sm">basarreness@gmail.com</span>
            </li>

            <div className="flex flex-row gap-3 text-2xl">
              <li>
                <Link href="https://www.linkedin.com/in/enes-b-192a8a248/">
                  <AiFillLinkedin></AiFillLinkedin>
                </Link>
              </li>

              <li>
                <Link href="https://github.com/mahzunes">
                  <AiFillGithub></AiFillGithub>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
