"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/types";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  register: (name: string, email: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_USER_STORAGE_KEY = "glasil_user";
const AUTH_COOKIE_NAME = "glasil_auth";

function setAuthCookie(isLoggedIn: boolean) {
  if (typeof document === "undefined") return;
  if (isLoggedIn) {
    const maxAge = 7 * 24 * 60 * 60;
    document.cookie = `${AUTH_COOKIE_NAME}=true; path=/; max-age=${maxAge}`;
  } else {
    document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedUser = window.localStorage.getItem(AUTH_USER_STORAGE_KEY);
    if (!storedUser) return;
    try {
      const parsed = JSON.parse(storedUser) as User;
      setUser(parsed);
    } catch {
      setUser(null);
    }
  }, []);

  const login = async (email: string) => {
    const mockUser: User = {
      id: "1",
      name: "Usuario Teste",
      email: email,
    };

    await new Promise(resolve => setTimeout(resolve, 1000));

    setUser(mockUser);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(mockUser));
      setAuthCookie(true);
    }
  };

  const register = async (name: string, email: string) => {
    const mockUser: User = {
      id: "1",
      name: name,
      email: email,
    };

    await new Promise(resolve => setTimeout(resolve, 1000));

    setUser(mockUser);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(mockUser));
      setAuthCookie(true);
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(AUTH_USER_STORAGE_KEY);
      setAuthCookie(false);
    }
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
