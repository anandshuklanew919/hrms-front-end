import React from "react";

export const userAuthData = {
    authenticated: false,
    setAuthenticated: (auth) => { }
};

const authContext = React.createContext(userAuthData);

export default authContext;