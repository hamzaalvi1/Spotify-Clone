import styles from "./Layout.module.scss"
import Sidebar from "../Sidebar/Sidebar"
import Rightbar from "../Rightbar/Rightbar"

function Layout({children}) {
  return (
    <div className={styles.layout}>
      <Sidebar/>
      {children}
      <Rightbar/>
    </div>
  )
}

export default Layout