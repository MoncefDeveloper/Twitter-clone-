import styles from "../../styles/News.module.css";
import Search from "./Search";
import Trends from "./Trends";

function News() {
  return (
    <div className={styles.news}>
      <Search />
      <Trends />
    </div>
  );
}

export default News;
