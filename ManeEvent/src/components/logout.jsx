import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/Authorization";


export default function useLogout(to = "/login") {
  const { signOut } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const logout = useCallback(async () => {
    setError("");
    try {
      await signOut();   // clears Supabase session
      navigate(to);      // redirect after logout
    } catch (e) {
      console.error(e);
      setError("Failed to log out. Please try again.");
    }
  }, [navigate, signOut, to]);

  return { logout, error };
}