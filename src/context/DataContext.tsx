
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  
  const clearData = () => {
    setProfileData(null);
  };

  return (
    <DataContext.Provider
      value={{
        profileData,
        setProfileData,
        clearData,
      }}>
      {children}
    </DataContext.Provider>
  );
};
