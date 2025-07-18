import { useUserData } from "../Hooks/useUserData";
import styles from "./userInfo.module.css";

export default function UserInfo() {
  
  // Pull context data
  const { userBalance, totalEarnings, totalLosses, iterations } = useUserData();
  
  return (
    <div className={styles.userInfo}>
      <h1>Current Balance: <strong>${userBalance}</strong></h1>
      
      {(totalEarnings > 0) && 
        <h3>Total Earnings: <strong className={styles.earnings}>${totalEarnings}</strong></h3>
      }

      {(totalLosses > 0) && 
        <h3>Total Losses: <strong className={styles.losses}>${totalLosses}</strong></h3>
      }

      <h1 className={styles.heading}>Day {iterations}</h1>
    </div>
  );
}
