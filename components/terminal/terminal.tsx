type Props = {
  detail:any
}

const Terminal = (props: Props) => {
  const { detail } = props

  return (
    <div className="mt-4">
      <div className="px-4 py-0 md:p-0">
        <div className="shadow-[0_0_25px_0_#bbb] w-full h-6 box-border bg-[#bbb] rounded-t">
          <div
            className="h-[10px] w-[10px] rounded-full border border-solid border-[#9d252b] relative left-[15px] bg-[#ff3b47] inline-block"
          ></div>
          <div
            className="h-[10px] w-[10px] rounded-full border border-solid border-[#9d802c] relative left-[20px] bg-[#ffc100] inline-block"
          ></div>
          <div
            className="h-[10px] w-[10px] rounded-full border border-solid border-[#049931] relative left-[25px] bg-[#00d742] inline-block"
          ></div>
        </div>
        <div className="shadow-[0_0_25px_0_#bbb] bg-[#151515] text-white box-border w-full p-5 rounded-r">
          {detail}
        </div>
      </div>
    </div>
  )
}

export default Terminal
