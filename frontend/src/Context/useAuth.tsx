import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email: string, username: string, password: string) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = {
          userName: res.data.userName,
          email: res.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.data.token);
        setUser(userObj);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        toast.success("Registration Successful!");
        setTimeout(() => {
          navigate("/search");
        }, 200);
      } else{
        toast.error("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a symbol.");
      }
    } catch (e) {
      toast.error("Server error occurred");
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        localStorage.setItem("token", res?.data.token);
        const userObj = {
          userName: res?.data.userName,
          email: res?.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        
        // Set token and user state properly
        setToken(res?.data.token!);
        setUser(userObj!);
        
        // Immediately set axios authorization header
        axios.defaults.headers.common["Authorization"] = `Bearer ${res?.data.token}`;
  
        toast.success("Login Success!");
  
        // Use a small delay to ensure state is fully updated before navigation
        setTimeout(() => {
          navigate("/search");
        }, 200);  // You can tweak this delay as needed
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };
  
  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);