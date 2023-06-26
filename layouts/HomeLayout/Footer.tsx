'use client'

import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='flex flex-col w-full justify-center items-center h-[65px] backdrop-opacity-40 text-xs'>
      <p className='m-0 p-0'>attapat kayasa &copy; 2022</p>
    </div>
  )
}