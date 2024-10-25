import { AnimatedGroup } from "@/components/core/AnimatedGroup";
import {
  brands1,
  brands2,
  brands3,
  brands4,
  brands5,
  brands6,
  brands7,
  brands8,
  brands9,
} from "@/constants/image";
import Image from "next/image";
import React from "react";

const BrandsLogo = () => {
  return (
    <AnimatedGroup
      className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-3"
      preset="scale"
    >
      <Image
        src={brands1}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
      />
      <Image
        src={brands2}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
        style={{ marginTop: 30 }}
      />
      <Image
        src={brands3}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
      />
      <Image
        src={brands4}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
        style={{ marginTop: -30 }}
      />
      <Image
        src={brands5}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
      />
      <Image
        src={brands6}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
        style={{ marginTop: -30 }}
      />
      <Image
        src={brands7}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
        style={{ marginTop: -30 }}
      />
      <Image
        src={brands8}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
      />
      <Image
        src={brands9}
        alt="impressionist painting, uploaded to Cosmos"
        className="h-auto w-full rounded-[4px]"
        width={300}
        height={300}
        style={{ marginTop: -30 }}
      />
    </AnimatedGroup>
  );
};

export default BrandsLogo;
