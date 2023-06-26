import Portfolio from "@/view/Portfolio"
import React from "react"

type Props = {}

export default function PortfolioPage({ }: Props) {
  return (
    <>
    {/* @ts-expect-error Server Component */}
    <Portfolio />
    </>
  )
}