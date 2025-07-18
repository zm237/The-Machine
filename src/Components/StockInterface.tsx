import UserInfo from "./UserInfo";
import StockButtons from "./StockButtons";
import styles from "./stockInterface.module.css";
import PageInfo from "./PageInfo";
import { useUserData } from "../Hooks/useUserData";

export default function StockInterface() {
  // Pull context data
  const { userBalance } = useUserData();
  
  
  return (
    <div className={styles.stockInterface}>
      <UserInfo />
      {(userBalance < 100) && (<StockButtons />)}
      <PageInfo />

    </div>
  );
}