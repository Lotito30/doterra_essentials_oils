import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [content, setContent] = useState('Dashboard');

    return (
        <DashboardContext.Provider value={{ content, setContent }}>
            {children}
        </DashboardContext.Provider>
    );
};
