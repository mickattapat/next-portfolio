"use client";
import Terminal from "@/components/terminal/terminal"
import { motion } from 'framer-motion';
import Link from "next/link"
import React from "react"


export default async function About({ bio = "", skills = [] }: AboutModel) {
  const softSkills = ["Active listening" , "Adaptability", "Problem-solving", "Creativity", "Accountability", "Confidence", "Time and project management"]
  const abouMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cat &nbsp;about-attapat
        </p>
        <p className="text-justify px-4">&nbsp;&nbsp;&nbsp;&nbsp;{bio}</p>
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
          &nbsp;cd &nbsp;frontend/skills && ls
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
        <br />
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cd &nbsp; backend/skills && ls
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
        <br />
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
          &nbsp;cat &nbsp; soft-skills
        </p>
        <ul>
          {softSkills.map((skill: string, index: number) => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="div"
      className="sm:container sm:mx-auto"
    >
      <div className="pt-8 mx-4 lg:mx-0">
        <div className="flex justify-center w-full">
          <div className="w-[800px] text-xl font-bold px-4">
            <div className="flex float-right gap-3 duration-300 hover:text-[#27c93f] hover:gap-0">
              👉🏻
              <Link className="underline" target="_blank" href={`${process.env.NEXT_PUBLIC_CV_LINK}`}>
                open cv.
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-sm w-[800px]">
            <Terminal detail={abouMe()} />
            <Terminal detail={skillsMe()} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}