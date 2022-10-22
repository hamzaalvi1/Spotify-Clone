import styles from "./Searchbar.module.scss";
import { FiSearch } from "react-icons/fi";
function Searchbar({ search, handleSearch }) {
  return (
    <div className={styles.Searchbar}>
      <span>
        <FiSearch />
      </span>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Searchbar;
