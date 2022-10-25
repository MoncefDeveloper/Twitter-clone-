import { Toaster } from "react-hot-toast";
import styles from "../styles/Home.module.css";
import News from "./News/News";
import contentstyles from "../styles/Content.module.css";
import SideBar from "./SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      <main className={styles.container}>
        <SideBar />

        <div className={contentstyles.content}>{children}</div>

        <News />
      </main>
    </>
  );
}
