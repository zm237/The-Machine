import styles from './pageInfo.module.css';

export default function PageInfo() {
    
    return (
        <div className={styles.pageInfo}>
            <h1>Welcome to The Machine</h1>
            <p className={styles.infoText}>
                On your left, you will see a laptop. To begin trading, please "type" on the laptop.
                <br/>
                <br/>
                You can only trade if you have a balance of at least $100, the price of buying stock on
                one day.
                <br/>
                <br/>
                Once the day is over, you will either gain or lose a random amount of money. If your balance 
                falls below $100, be prepared to lose something if you want to continue trading.....
            </p>
        </div>
    );


}