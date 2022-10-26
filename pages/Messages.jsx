import Image from "next/image";
import React from "react";
import MyHead from "../functions/Head";

function Messages() {
  return (
    <>
      <MyHead title="Messages" />

      <div className="pages">
        <h2>Messages</h2>
        <p>Soon...</p>
        <picture>
          <Image
            src="/twitter-2021-10-d.webp"
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

export default Messages;
