import { useState } from "react";

export function useToken() {
  // Try to load token from localStorage initially
  const getToken = () => {
    const t = localStorage.getItem("token");
    console.log("Retrieved token from storage:", t);
    return t;
  };

  const [token, setTokenState] = useState(getToken);

  const setToken = (newToken) => {
    console.log(" Saving token:", newToken);
    localStorage.setItem("token", newToken);
    setTokenState(newToken);
  };

  const clearToken = () => {
    console.log("Clearing token");
    localStorage.removeItem("token");
    setTokenState(null);
  };

  return { token, setToken, clearToken };
}
