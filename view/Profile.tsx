"use client";
import HireMeModal from "@/components/HireMeModal";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiExternalLinkFill } from "react-icons/ri"
import emailjs from '@emailjs/browser';
import { AiOutlineSend } from "react-icons/ai";

export default function Profile(profile: ProfileModel) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showHireMeModal = (req: any) => {
    if (!showModal) {
      document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
      setShowModal(false);
    }

    if (req.sentReq) {
      console.log(req.sentReq);
      emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_EMAIL}`, `${process.env.NEXT_PUBLIC_SERVICE_EMAIL_TEMP}`, req.sentReq, `${process.env.NEXT_PUBLIC_SERVICE_EMAIL_TOKEN}`)
        .then((result) => {
          console.log(result.text);
          alert('success')
        }, (error) => {
          console.log(error.text);
        });
    }
  }
  // await delay(10)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="div"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 flex flex-col justify-center items-center lg:flex-row profile">
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
            <li className="leading-[30px] text-center lg:text-left flex justify-center gap-4">
              <Link className="underline" target="_blank" href={`${process.env.NEXT_PUBLIC_CV_LINK}`}>
                <button className="duration-300 text-[#404141] font-bold mt-5 px-4 border-4 border-[#6bfaae] hover:bg-[#effff7] rounded">
                  open cv. <RiExternalLinkFill></RiExternalLinkFill>
                </button>
              </Link>
              <button
                onClick={showHireMeModal}
                className="bg-gradient-to-br from-[#6bfaae] to-[#8decde] duration-300 hover:bg-[#5bd594] text-[#515252] font-bold mt-5 px-4 border-b-4 border-[#32d47d] hover:border-[#1c7646] rounded"
                aria-label="Hire Me Button"
              >
                contact me <AiOutlineSend></AiOutlineSend>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {showModal ? (
          <HireMeModal
            onClose={showHireMeModal}
            onRequest={showHireMeModal}
          />
        ) : null}
        {/* { showModal ? showHireMeModal : null } */}
      </div>
    </motion.div>
  );
}
