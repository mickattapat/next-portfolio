export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
      <>
      <div className="flex justify-center w-full animate-pulse mt-8 mb-8">
        <div className="text-sm w-[800px] font-bold px-4">
          <div className="float-right">
            <div className="bg-gray-700/50 w-[120px] rounded-lg">
              <h2 className="text-lg invisible">
                skeleton
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-sm w-[800px]">
          {Array.from({ length: 3 }, (data:any , index: number) => {
            return (
              <div key={index} className="bg-gray-700/50 rounded-lg h-52 mt-4 mx-4 lg:mx-0">
              </div>
            );
          })}
        </div>
      </div>
      </>
  );
}
