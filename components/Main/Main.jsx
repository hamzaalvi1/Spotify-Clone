import Searchbar from "../Search/Search";
import styles from "./Main.module.scss";
function Main() {
  const allClasses = {
    formWrapper: styles.formWrapper,
    formfld: styles.formFld,
    formBtn: styles.formBtn
  };
  
  return (
    <div className={styles.mainWrapper}>
      <Searchbar classes={allClasses} />
    </div>
  );
}

export default Main;
