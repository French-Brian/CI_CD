import { createContext, useEffect, useContext, useState } from "react";
import Supabase from "../../backend/supabase/supabaseClient";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  Supabase.auth.signInWithPassword({ email, password });

const Authorization = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const { data } = Supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setAuth(true);
        setUser(session.user);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export default Authorization;
