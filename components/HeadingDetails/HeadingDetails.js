import styles from "./HeadingDetails.module.scss";
import Link from "next/link";
function HeadingDetails({ headingName, linkDetails, Icon }) {
    const {url,title,} = linkDetails
  return (
    <div className={styles.headingBar}>
      <div className={styles.headingDetails}>
        <Icon /> <h4>{headingName}</h4>
      </div>
      <Link className={styles.links} href={url}>{title}</Link>
    </div>
  );
}

export default HeadingDetails;
