// AmountContext.js
import React, { createContext, useState } from 'react';

export const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
    const [amount, setAmount] = useState(0);

    return (
        <AmountContext.Provider value={{ amount, setAmount }}>
            {children}
        </AmountContext.Provider>
    );
};
