import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/News.module.css";

function Search() {
  let search = useRef(null);
  return (
    <button
      type="submit"
      onClick={() => search?.focus()}
      className={styles.search_barr}
    >
      <div className={styles.icon}>
        <FiSearch />
      </div>

      <input
        type="text"
        ref={(e) => (search = e)}
        placeholder="Search Twitter"
      />
    </button>
  );
}

export default Search;
