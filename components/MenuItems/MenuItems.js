import styles from "./MenuItems.module.scss";
import Link from "next/link";
function MenuItems({ menuList }) {
  console.log(menuList);
  return (
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
  );
}

export default MenuItems;
