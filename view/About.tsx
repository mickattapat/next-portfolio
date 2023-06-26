"use client";

import Terminal from "@/components/terminal/terminal"
import { delay } from "@/utils/allFunc";
import Link from "next/link"
import React from "react"


export default async function About({ bio = "", skills = [], hobbies = [] }: AboutModel) {
  // await delay(10)
  const abouMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cat &nbsp;about-attapat
        </p>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
        </p>
        <p>{bio}</p>
      </>
    )
  }

  const skillsMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cd &nbsp;frontend/skills/tools && ls
        </p>
        <ul>
          <li className="inline-block list-none py-2 px-4" style={{ color: "#27c93f" }}>Proficient With</li>
          {skills.Intermediate_FE.map((skill: string, index: number) => {
            return (
              <li key={index} className="inline-block list-none py-2 px-4 duration-300 hover:-translate-y-1">
                {skill}
              </li>
            )
          })}
        </ul>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cd &nbsp; backend/skills/tools && ls
        </p>
        <ul>
          <li className="inline-block list-none py-2 px-4" style={{ color: "#27c93f" }}>Intermediate</li>
          {skills.Intermediate_BE.map((skill: string, index: number) => {
            return (
              <li key={index} className="inline-block list-none py-2 px-4 duration-300 hover:-translate-y-1">
                {skill}
              </li>
            )
          })}
        </ul>
        <ul>
          <li className="inline-block list-none py-2 px-4" style={{ color: "#27c93f" }}>Basic</li>
          {skills.Intermediate_BE_Basic.map((skill: string, index: number) => {
            return (
              <li key={index} className="inline-block list-none py-2 px-4 duration-300 hover:-translate-y-1">
                {skill}
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const hobbiesMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cd &nbsp;hobbies/interests && ls
        </p>
        <ul>
          {hobbies.map((hobbie, index) => {
            return (
              <li key={index} className="list-none leading-8 duration-300 hover:-translate-y-1">
                {hobbie.emoji} &nbsp;{hobbie.label}
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  return (
    <div className="pt-8 mx-4 lg:mx-0">
      <div className="flex justify-center w-full">
        <div className="w-[800px] text-xl font-bold px-4">
          <div className="flex float-right gap-3 duration-300 hover:text-[#27c93f] hover:gap-0">
            👉🏻
            <Link className="underline" target="_blank" href="https://drive.google.com/file/d/1pOJlSU9R_i0RXVBofDKrxMtTcTQhicZi/view?usp=sharing">
              open cv.
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-sm w-[800px]">
          <Terminal detail={abouMe()} />
          <Terminal detail={skillsMe()} />
          <Terminal detail={hobbiesMe()} />
        </div>
      </div>
    </div>
  )
}