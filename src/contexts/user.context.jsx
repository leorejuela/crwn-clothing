import { createContext, useState } from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const valueX = { currentUser, setCurrentUser };

    return <UserContext.Provider value={valueX}>{children}</UserContext.Provider>
};
