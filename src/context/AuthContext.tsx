"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { User } from "@/types";

// Define the type for the context value
interface AuthContextValue {
  user: User | null;
}

// Create the AuthContext with the defined type
export const AuthContext = createContext<AuthContextValue>({ user: null });

// Create a custom hook to access the AuthContext
export const useAuthContext = () => useContext(AuthContext);

// Define the type for the AuthContextProvider props
interface AuthContextProviderProps {
  children: React.ReactNode;
}

// Create the AuthContextProvider component with the defined types
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // You should map the relevant properties from the user object
        // returned by Firebase to the User interface defined earlier
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
