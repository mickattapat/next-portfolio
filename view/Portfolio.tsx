"use client";

import { delay } from "@/utils/allFunc";
import Image from "next/image";
import React from "react"
import { motion } from 'framer-motion';

type Props = {}

export default async function Portfolio({ }: Props) {
  await delay(10)
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="flex flex-wrap justify-center items-start gap-8 pt-8 mx-4 md:mx-0">
        {Array.from({ length: 5 }, (data: any, index: number) => {
          return (
            <div className="max-w-[350] max-h-[250]" key={index}>
              <Image
                className="rounded-lg"
                src={"https://placehold.co/400x300"}
                alt="port"
                width={350}
                height={250}
              />
            </div>
          );
        })}
      </div>
    </motion.nav>
  )
}