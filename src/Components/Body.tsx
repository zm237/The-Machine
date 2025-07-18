import styles from './body.module.css';
import Stock from './Stock';
import StockInterface from './StockInterface';
import { useState } from 'react';
import { UserContext } from '../Hooks/useUserData';

// Main body of the page
export default function Body() {
  // States to manage user balance and iterations
  const [userBalance, setUserBalance] = useState(0);
  const [iterations, setIterations] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalLosses, setTotalLosses] = useState(0);


  return (
    <div className={styles.bodyContainer}>
      <UserContext.Provider value={{ userBalance, setUserBalance, iterations, 
                                      setIterations, totalEarnings, 
                                      setTotalEarnings, totalLosses, setTotalLosses 
        }}>
        <Stock />
        <StockInterface />
      </UserContext.Provider>
    
    </div>
  );
}