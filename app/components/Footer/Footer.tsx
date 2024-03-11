"use client";

import Image from "next/image";
import React from "react";

const Footer = () => (
  <div className="flex items-center justify-center ">
    <Image
      className="z-1 static "
      src="/pattern-hills.svg"
      width={1539}
      height={266}
      alt="hills"
    />
    <div className="text-white z-2 absolute">
      <div className="flex flex-row gap-8">
        <div className="group">
          <Image
            src="/icon-facebook.svg"
            className=" cursor-pointer group-hover:hidden"
            width={32}
            height={32}
            alt="facebook"
          />
          <Image
            src="/icon-facebook_red.svg"
            className=" cursor-pointer hidden group-hover:block"
            width={32}
            height={32}
            alt="facebook"
          />
        </div>
        <div className="group">
          <Image
            src="/icon-pinterest.svg"
            className=" cursor-pointer group-hover:hidden"
            width={32}
            height={32}
            alt="facebook"
          />
          <Image
            src="/icon-pinterest_red.svg"
            className=" cursor-pointer hidden group-hover:block"
            width={32}
            height={32}
            alt="facebook"
          />
        </div>
        <div className="group">
          <Image
            src="/icon-instagram.svg"
            className=" cursor-pointer group-hover:hidden"
            width={32}
            height={32}
            alt="facebook"
          />
          <Image
            src="/icon-instagram_red.svg"
            className=" cursor-pointer hidden group-hover:block"
            width={32}
            height={32}
            alt="facebook"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
