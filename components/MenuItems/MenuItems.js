import styles from "./MenuItems.module.scss";
import Link from "next/link";
function MenuItems({ menuList, titleName }) {
  return (
    <div className={styles.menu}>
      <h6>{titleName}</h6>
      <ul className={styles.menulist}>
        {menuList.map(({ title, path, Icon }, idx) => {
          return (
            <li key={idx}>
              <Link href={path}>
                <p>
                  <Icon />
                  {title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuItems;
