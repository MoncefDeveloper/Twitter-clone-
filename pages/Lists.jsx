import Image from "next/image";
import React from "react";
import MyHead from "../functions/Head";

function Lists() {
  return (
    <>
      <MyHead title="Lists " />

      <div className="pages">
        <h2>Lists</h2>
        <p>Soon...</p>
        <picture>
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

export default Lists;
