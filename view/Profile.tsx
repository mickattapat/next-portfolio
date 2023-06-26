"use client";
import { delay } from "@/utils/allFunc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiExternalLinkFill } from "react-icons/ri"

export default async function Profile(profile: ProfileModel) {
  // await delay(10)
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row profile">
      <div className="flex items-center m-8 rounded-full border-8 border-bl border-[#6bfaae] shadow-lg shadow-[#6bfaae] duration-300 hover:shadow-[#058340]">
        <Image
          className="bg-gradient-to-br from-[#6bfaae] to-[#8decde] border-8 border-[#fff] rounded-full"
          src={profile.profileLogo}
          width={300}
          height={300}
          alt="profile"
        />
      </div>
      <div className="lg:m-8 m-4">
        <div className="flex gap-2 flex-wrap">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6bfaae] to-[#8decde]">
            Hi, I&apos;m {profile.firstName}
          </div>
          <div className="text-3xl animate-bounce">🤙🏻</div>
        </div>
        <h2 className="mt-2">I&apos;m {profile.position}</h2>
        <ul className="list-none">
          {profile.miniBio.map((miniBio: any, index: number) => {
            if (!miniBio.link) {
              return (
                <li key={index} className="leading-[30px] duration-300 hover:-translate-y-[3px]">
                  {miniBio.emoji} &nbsp; {miniBio.text}
                </li>
              );
            } else {
              return (
                <li key={index} className="leading-[30px] duration-300 hover:-translate-y-[3px]">
                  {miniBio.emoji} &nbsp; <a href={miniBio.isLink} className="text-[#000000] underline" target="_blank" rel="noreferrer">
                    {miniBio.text}
                  </a>
                </li>
              );
            }
          })}
          <li className="leading-[30px] text-center lg:text-left">
            <Link className="underline" target="_blank" href="https://drive.google.com/file/d/1pOJlSU9R_i0RXVBofDKrxMtTcTQhicZi/view?usp=sharing">
              <button className="bg-[#6bfaae] duration-300 hover:bg-[#5bd594] text-[#515252] font-bold mt-5 px-4 border-b-4 border-[#32d47d] hover:border-[#1c7646] rounded">
                open cv. <RiExternalLinkFill></RiExternalLinkFill>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
