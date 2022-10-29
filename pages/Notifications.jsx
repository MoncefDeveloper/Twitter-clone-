import Image from "next/image";
import React from "react";
import MyHead from "../functions/Head";

function Notifications() {
  return (
    <>
      <MyHead title=" Notifications" />

      <div className="pages">
        <h2 className="notifications-h2">Notifications</h2>
        <p>Soon...</p>
        <picture>
          <Image
//             src="/twitter-tuite-rede-social-1568572082996_v2_1920x1080.png"
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

export default Notifications;
