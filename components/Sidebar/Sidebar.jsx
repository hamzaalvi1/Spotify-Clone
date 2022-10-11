import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { HiHome, HiChartBar, HiClock, HiDotsHorizontal } from "react-icons/hi";
import { FaCompass, FaMicrophoneAlt } from "react-icons/fa";
import SidebarIcons from "../SidebarIcons/SidebarIcons";
function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <Image
        src={"https://rb.gy/xkacau"}
        height={56}
        width={56}
        objectFit="contain"
        alt="logo"
      />

      <SidebarIcons
        icons={[
          HiHome,
          FaCompass,
          FaMicrophoneAlt,
          HiChartBar,
          HiClock,
          HiDotsHorizontal,
        ]}
        classes={styles.sidebarIcons}
      />
    </div>
  );
}

export default Sidebar;
