"use client";
import { delay } from "@/utils/allFunc";
import Image from "next/image";
import React from "react"
import { motion } from 'framer-motion';

type Props = {}

export default async function Portfolio({ }: Props) {
  await delay(100)
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      id="div"
      className="sm:container mx-auto px-8"
    >
      <div className="flex flex-wrap justify-center items-start gap-8 pt-8">
        {Array.from({ length: 5 }, (data: any, index: number) => {
          return (
            <div className="w-full md:w-[44%] lg:w-[30%]" key={index}>
              <Image
                className="rounded-lg w-full"
                src={"https://placehold.co/400x300"}
                alt="port"
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  )
}