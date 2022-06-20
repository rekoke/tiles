import React, { createContext, useState, useEffect } from "react";
import { tileData } from '../data';

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(tileData)
    }, []);

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;