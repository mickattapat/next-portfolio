import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="animate-pulse flex justify-center mt-8">
      <div className="flex flex-wrap justify-center items-start gap-8 mx-4 md:mx-0">
        {Array.from({ length: 5 }, (data: any, index: number) => {
          return (
            <div className="bg-gray-700/50 rounded-lg w-[350px] h-[250px] px-4" key={index}>
            </div>
          );
        })}
      </div>
    </div>
  );
}