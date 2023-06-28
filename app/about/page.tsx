import { info } from "@/models/info.mock"
import About from "@/view/About"
import React from "react"

type Props = {}

export default function AboutPage({ }: Props) {
  return (
    <>
    {/* @ts-expect-error Server Component */}
    <About bio={info.bio} skills={info.skills} />
    </>

  )
}