import styles from "./Sidebar.module.scss";
import { MdMusicNote, MdAlbum, MdHeadset } from "react-icons/md";
import { HiHome, HiUser, HiClock, HiHeart, HiMusicNote } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";
import MenuItems from "../MenuItems/MenuItems";
import PremiumTicket from "../PremiumTicket/PremiumTicket";
function Sidebar() {
  const menuList = [
    { title: "Home", path: "/", Icon: HiHome },
    { title: "Albums", path: "/album", Icon: MdAlbum },
    { title: "Artist", path: "/artist", Icon: HiUser },
    { title: "Discover", path: "/discover", Icon: FaCompass },
  ];
  const playlist = [
    { title: "Recent", path: "/recent", Icon: HiClock },
    { title: "Favourites", path: "/favourite", Icon: HiHeart },
    { title: "My Pop", path: "/mylist", Icon: MdHeadset },
    { title: "Hits Update", path: "/hits", Icon: HiMusicNote },
  ];
  return (
    <div className={styles.sidebar}>
      {/* logo-start */}
      <div className={styles.logo}>
        <span className={styles.icon}>
          <MdMusicNote />
        </span>
        <p>Myuzige</p>
      </div>
      {/* logo-end  */}
      {/* menu-items-start */}
      <MenuItems menuList={menuList} titleName="Menu" />
      {/* menu-items-end */}

      {/* playlist-items-start */}
      <MenuItems menuList={playlist} titleName="Playlist" />
      {/* playlist-items-end */}

      {/* premiumTicket-start */}
      <PremiumTicket/>
      {/* premiumTicket-end */}


    </div>
  );
}

export default Sidebar;
