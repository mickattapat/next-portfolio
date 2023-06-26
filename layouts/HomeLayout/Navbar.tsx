'use client'

import Link from 'next/link';
import React from 'react'
import { usePathname } from "next/navigation";

type Props = {}
export default function Navbar({}: Props) {
  const pathname = usePathname();

  const path = [
    {
      name: "Attapat.ka",
      path: "/",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
  ]
  
  
  const routPath = path.map((rout, index) => {
    return (
      <li
        key={index}
        className={pathname == rout.path ? 'p-4 duration-300 app-header-item-active' : 'p-4 list-none duration-300 hover:-translate-y-[3px]'}
      >
        <Link href={rout.path} className={pathname == rout.path ? 'no-underline text-lg font-bold text-[#04c738]' : 'no-underline text-black text-lg font-bold hover:text-[#04c738]'}>{rout.name}</Link>
      </li>
    )
  })

  return (
    <header>
      <ul className='flex justify-center items-center w-full h-[65px]'>{routPath}</ul>
    </header>
  )
}