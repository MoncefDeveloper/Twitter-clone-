import Image from "next/image";
import React from "react";
import MyHead from "../functions/Head";

function BookMarks() {
  return (
    <>
      <MyHead title="Book Marks " />
      <div className="pages">
        <h2>BookMarks</h2>
        <p>Soon...</p>
        <picture>
          <Image
            src="/621165.jfif"
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

export default BookMarks;
