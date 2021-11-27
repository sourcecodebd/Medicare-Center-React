import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';
import useInfo from '../../hooks/useInfo';
import useMedical from '../../hooks/useMedical';

export const AuthContext = createContext('Welcome to Medicare Center')

const AuthProvider = ({ children }) => {
    const firebase = useFirebase();
    const medicals = useMedical();
    const carts = useCart();
    const contactForm = useInfo();

    return (
        <AuthContext.Provider value={{ firebase, medicals, carts, contactForm }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;