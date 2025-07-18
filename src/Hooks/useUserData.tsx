import { createContext, useContext } from 'react';

// Define the context data and types
type UserDataType = {
  userBalance: number;
  setUserBalance: React.Dispatch<React.SetStateAction<number>>;

  iterations: number;
  setIterations: React.Dispatch<React.SetStateAction<number>>;
  
  totalEarnings: number;
  setTotalEarnings: React.Dispatch<React.SetStateAction<number>>;
  
  totalLosses: number;
  setTotalLosses: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context with a default value of undefined
export const UserContext = createContext<UserDataType | undefined>(undefined);

// Custom hook for using the UserContext
export function useUserData(): UserDataType{
    // Access the context
    const context = useContext(UserContext);
    
    // Ensure the context is used within a provider
    if (context === undefined) {
        throw new Error('useUserData must be used within a UserProvider');
    }

    return context;
}