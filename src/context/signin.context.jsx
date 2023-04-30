import { createContext, useState } from "react";

export const SignInContext = createContext({
    isSignedIn: false,
    setIsSignIn: () => null
})

export const SignInProvider = ({children}) => {
    const [isSignedIn, setIsSignIn] = useState(false);

    const value = {isSignedIn, setIsSignIn};

    return <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
}