import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="animate-pulse sm:container mx-auto px-8">
      <div className="flex flex-wrap justify-center items-start gap-8 pt-8">
        {Array.from({ length: 5 }, (data: any, index: number) => {
          return (
            <div className="bg-gray-700/50 rounded-lg w-full md:w-[44%] lg:w-[30%]" key={index}>
              <Image
                className="w-full opacity-0 bg-opacity-0"
                src={"https://placehold.co/400x300"}
                alt="port"
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}