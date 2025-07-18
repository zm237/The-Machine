import { useUserData } from "../Hooks/useUserData";
import styles from './stockButtons.module.css'; // Import the new styles

export default function StockButtons() {

  // Pull context data
  const { userBalance, setUserBalance } = useUserData();

  // Function to handle loan request
  const handleLoanRequest = (): void =>
    {
      // If less than 100 dollars, give the user a loan of 100 dollars
      if (userBalance < 100) {
        setUserBalance((prevBalance) => prevBalance + 600);
        alert("You have been given a loan of 600 dollars. One of your organs was given as collateral.");
      }
      else {
        alert("You have enough balance to trade. No loan is needed.");
      }
    }

  return (
    <div className={styles.buttonContainer}>
      {
          (userBalance < 100) && 
          <button className={styles.button} onClick={ handleLoanRequest }>Ask For a Loan</button>
      }
    </div>
  );
}
