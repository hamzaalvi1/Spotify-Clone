import styles from "./PremiumTicket.module.scss";
import {BsArrowRightShort} from "react-icons/bs"
function PremiumTicket() {
  return <div className={styles.premium}>
    <h4>
      Upgrade To  <br/>
      Premium User
    </h4>
    <p>Access to the latest music
       and more features
    </p>
    <a href="www.google.com">
      Upgrade Now <BsArrowRightShort/>
    </a>
  </div>;
}

export default PremiumTicket;
