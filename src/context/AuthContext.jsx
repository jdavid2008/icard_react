import React, { createContext, useState, useEffect } from "react";
import {setToken, getToken, removeToken} from "../api/token"
import { useUser } from "../hooks"

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
  });

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(undefined);
    const {getME} = useUser();

    useEffect(() => {
      (async () => {
        const token = getToken();
        console.log('Token',token);
        if (token) {
            const me = await getME(token);
            setAuth({...me, token});
        }
        else {
            setAuth(null);
        }
        
      })();        
    }, [])
    
    
    const login = async (token) => {
        setToken(token) // Se guarda en el LocalStorage
        const me = await getME(token);
        setAuth({...me, token});
    }
    
    const logout = async () => {
        if (auth) {
            removeToken();
            setAuth(null);
        }
    }

    const valueContext = {
        auth ,
        login ,
        logout,
    }
    
    if (auth===undefined) return null; // PAra evitar el efecto del refresco
    
    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}

