import styles from './stock.module.css';
import laptopImage from '../Images/Laptop.png';
import handsImage from '../Images/Hands.png';
import profitImage from '../Images/Money.png'; // Import profit image
import lossImage from '../Images/Alert.png';   // Import loss image
import { useState } from 'react';
import { useUserData } from '../Hooks/useUserData';

export default function Stock() {
  // Boolean state to track if the user is typing
  const [typing, setTyping] = useState<boolean>(false);
  
  // State to track trade result
  const [tradeResult, setTradeResult] = useState<'profit' | 'loss' | null>(null);
  
  // Pull context data
  const {userBalance, setUserBalance, setIterations, setTotalEarnings, setTotalLosses} = useUserData();

  // Function to handle trading logic
  const handleTrade = (): void => {
    if (userBalance <= 100) {
      alert("Insufficient balance to trade.");
      setTyping(false);
      return;
    }

    const randomNumber = Math.random();

    // Made money
    if (randomNumber < 0.5) {
      const profitAmount = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random profit between 100 and 500
      setUserBalance((prevBalance) => prevBalance + profitAmount);
      setTotalEarnings((prevEarnings) => prevEarnings + profitAmount);
      setTradeResult('profit'); // Set result to 'profit'
    }
    // Lost money 
    else {
      const lossAmount = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random loss between 100 and 500
      setUserBalance((prevBalance) => prevBalance - lossAmount);
      setTotalLosses((prevLosses) => prevLosses + lossAmount);
      setTradeResult('loss'); // Set result to 'loss'
    }

    setIterations((prevCount) => prevCount + 1);

    // Reset the trade result after 2 seconds so the icon disappears
    setTimeout(() => {
      setTradeResult(null);
    }, 2000);
  };

  return (
    <div className={styles.stock}>
      
      {/* Laptop Image */}
      <img 
        src={laptopImage} 
        alt="A Laptop" 
        className={styles.laptop}
        onClick={() => {if (!typing) setTyping(true)}}
      />

      {/* Hands Animation Image */}
      <img 
        src={handsImage} 
        alt="Typing Hands" 
        className={`${styles.hands} ${typing ? styles.typing : ''}`}
        onAnimationEnd={() => {handleTrade()}}
      />

      {/* Profit Indicator - Conditionally rendered */}
      {tradeResult === 'profit' && (
        <img src={profitImage} alt="Profit" className={styles.indicator} 
        onAnimationEnd={() => setTyping(false)}/>
      )}

      {/* Loss Indicator - Conditionally rendered */}
      {tradeResult === 'loss' && (
        <img src={lossImage} alt="Loss" className={styles.indicator} 
        onAnimationEnd={() => setTyping(false)}/>
      )}
    </div>
  );
}

