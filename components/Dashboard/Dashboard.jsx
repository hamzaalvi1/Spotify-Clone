import Main from "../Main/Main"
import Sidebar from "../Sidebar/Sidebar"
import Rightbar from "../Rightbar/Rightbar"
import styles from "./Dashboard.module.scss"
function Dashboard() {
  return (
    <div className={styles.dashboard}>
       <Sidebar/>
       <Main/>
       <Rightbar/>
    </div>
  )
}

export default Dashboard