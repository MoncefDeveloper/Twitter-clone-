import {
  RiHome7Fill,
  RiHome7Line,
  RiNotification2Fill,
  RiFileList2Line,
  RiNotification2Line,
  RiFileList2Fill,
  RiSearchLine,
  RiSearchFill,
} from "react-icons/ri";
import { HiOutlineHashtag } from "react-icons/hi";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import {
  FaRegBookmark,
  FaFeatherAlt,
  FaBookmark,
  FaHashtag,
} from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import SideBarRow from "./Row";
import styles from "../../styles/SideBar.module.css";

function SideBar() {
  const { data: session } = useSession();
  const { pathname } = useRouter();

  const items = [
    {
      ActiveIcon: <RiHome7Fill />,
      Icon: <RiHome7Line />,
      title: "Home",
      link: "/",
    },
    {
      ActiveIcon: <FaHashtag />,
      Icon: <HiOutlineHashtag />,
      title: "Explore",
      link: "/Explore",
    },
    {
      ActiveIcon: <RiNotification2Fill />,
      Icon: <RiNotification2Line />,
      title: "Notifications",
      link: "/Notifications",
    },
    {
      ActiveIcon: <MdEmail />,
      Icon: <MdOutlineEmail />,
      title: "Messages",
      link: "/Messages",
    },
    {
      ActiveIcon: <FaBookmark />,
      Icon: <FaRegBookmark />,
      title: "BookMarks",
      link: "/BookMarks",
    },
    {
      ActiveIcon: <RiFileList2Fill />,
      Icon: <RiFileList2Line />,
      title: "Lists",
      link: "/Lists",
    },
    {
      ActiveIcon: <IoEllipsisHorizontalCircleSharp />,
      Icon: <CgMoreO />,
      title: "More",
      link: "/More",
    },
  ];

  const itemsBottom = [
    {
      ActiveIcon: <AiFillHome />,
      Icon: <AiOutlineHome />,
      title: "Home",
      link: "/",
    },
    {
      ActiveIcon: <RiSearchFill />,
      Icon: <RiSearchLine />,
      title: "Explore",
      link: "/Explore",
    },
    {
      ActiveIcon: <RiNotification2Fill />,
      Icon: <RiNotification2Line />,
      title: "Notifications",
      link: "/Notifications",
    },
  ];

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <BsTwitter />
        </div>
        {items.map((row, id) => (
          <SideBarRow row={row} key={id} />
        ))}

        {/* Sign In and Sign out button */}
        <div
          className={styles.row}
          onClick={() => (session ? signOut() : signIn())}
        >
          <div className={styles.icon}>
            {session ? <VscSignOut /> : <VscSignIn />}
          </div>
          <div className={styles.title}>
            {!session ? "Sign In" : "Sign Out"}
          </div>
        </div>

        <Link href="/">
          <a>
            {" "}
            <div className={styles.btn_prem}>Tweet</div>
          </a>
        </Link>
        <div className={styles.btn_plume}>
          <FaFeatherAlt />
        </div>
      </div>
      <div className={styles.sidebar_bottom}>
        {itemsBottom.map(({ Icon, link, ActiveIcon }, key) => (
          <Link href={link} key={key}>
            <div className={styles.row}>
              {pathname === link ? <ActiveIcon.type /> : <Icon.type />}
            </div>
          </Link>
        ))}
        <div
          className={styles.row}
          onClick={() => (session ? signOut() : signIn())}
        >
          {session ? <VscSignOut /> : <VscSignIn />}
        </div>
      </div>
    </>
  );
}

export default SideBar;
