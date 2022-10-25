import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/SideBar.module.css";

function SideBarRow({ row }) {
  const { Icon, title, link, ActiveIcon } = row;
  const { pathname } = useRouter();
  return (
    <Link href={link}>
      <a className={styles.row}>
        <div className={styles.icon}>
          {pathname === link ? <ActiveIcon.type /> : <Icon.type />}
        </div>
        <div className={styles.title}>{title}</div>
      </a>
    </Link>
  );
}

export default SideBarRow;
