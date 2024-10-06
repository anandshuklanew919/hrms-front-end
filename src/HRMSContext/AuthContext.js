import React, { useState } from "react";

export const userAuthData = {
    authenticated: false,
    setAuthenticated: (auth) => {},
};

const AuthContext = React.createContext(userAuthData);

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
