import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchClick, setSearchClick] = useState(false);

    return (
        <SearchContext.Provider value={{ searchClick, setSearchClick }}>
            {children}
        </SearchContext.Provider>
    );
};
