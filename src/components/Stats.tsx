import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="bg-blue-600 ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-white dark:sm:divide-white">
              <div className="flex flex-col px-4 py-8 text-center">
                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  $4.8m
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-white dark:text-white">
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-white dark:text-white">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
