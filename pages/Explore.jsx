import Image from "next/image";
import React from "react";
import MyHead from "../functions/Head";

function Explore() {
  return (
    <>
      <MyHead title="Explore " />
      <div className="pages ">
        <h2 className="explore-h2">Explore</h2>
        <p>Soon...</p>
        <picture>
          <img src="/Twitter-generic-hero-whats-happening.avif" alt="" />
          <Image
            src="/Twitter-generic-hero-whats-happening.avif"
            width={80}
            objectFit="cover"
            height={100}
            layout="fill"
            alt="img"
          />
        </picture>
      </div>
    </>
  );
}

export default Explore;
