import Image from "next/image";
import React from "react";

const Trusted = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4  sm:px-6 lg:flex lg:items-center lg:px-8">
      <div className=" w-full  ">
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className=" font-bold text-gray-900 sm:text-xl dark:text-white">
                Trusted by eCommerce Businesses
              </h2>
            </div>

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  <Image
                    src={"/tiktok.svg"}
                    width={100}
                    height={100}
                    alt="image"
                    className="grayscale hover:grayscale-0 duration-300 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  <Image
                    src={"/coursera.svg"}
                    width={100}
                    height={100}
                    alt="image"
                    className="grayscale hover:grayscale-0 duration-300 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  <Image
                    src={"/udacity.svg"}
                    width={100}
                    height={100}
                    alt="image"
                    className="grayscale hover:grayscale-0 duration-300 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  <Image
                    src={"/gdsc.svg"}
                    width={100}
                    height={100}
                    alt="image"
                    className="grayscale hover:grayscale-0 duration-300 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  <Image
                    src={"/reddit.svg"}
                    width={100}
                    height={100}
                    alt="image"
                    className="grayscale hover:grayscale-0 duration-300 cursor-pointer"
                  />
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trusted;
