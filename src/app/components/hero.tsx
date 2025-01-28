/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative w-full bg-black px-4 sm:px-6 md:px-[80px] lg:px-[135px] flex flex-col md:flex-row items-center justify-between py-[50px] overflow-hidden">
      {/* Heading */}
      <div className="text-white w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D]">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[50px] font-bold mt-3">
          <span className="text-[#FF9F0D]">The</span> Art of Speed Food Quality
        </h1>

        <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start mt-6">
          <Link href="/menu">
            <button className="bg-[#FF9F0D] text-white w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-full hover:bg-yellow-800 transition duration-300 ease-in-out">
              See More
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/main.png"
          alt="Hero Image"
          className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
