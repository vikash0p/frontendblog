'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
axios.defaults.withCredentials = true;

interface AuthContextProps {
  user: UserProps;
  isUser: boolean;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

interface UserProps {
  user: User;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [isUser, setIsUser] = useState<boolean>(false);
  const router=useRouter();


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://backendblog-eta.vercel.app/auth/user", {
          withCredentials: true,
        });
        setUser(res.data);
        setIsUser(false); // Update isUser state after successfully fetching user
        // router.refresh();
      } catch (error) {
        console.log("🚀 ~ file: UserFetch.tsx:12 ~ error:", error.message);
      }
    };
    fetchUser();
  }, [router]);

  const value: AuthContextProps = {
    user,
    isUser,
    setIsUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useGlobalAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useGlobalAuthContext must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
