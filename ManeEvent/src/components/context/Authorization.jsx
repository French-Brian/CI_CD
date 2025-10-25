import { createContext, useContext, useState, useEffect } from "react";
import Supabase from "../../backend/supabase/supabaseClient";

const userContext = createContext({});

{
  /**creates the context to be set if the user is authenticated via supabase */
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    // Get the current logged-in user once when the app starts.
    Supabase.auth.getUser().then(({ data, error }) => {
      setUser(error ? null : data?.user ?? null);
    });

    // Listen for login/logout/refresh and update user
    const { data: sub } = Supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      // Stop listening when this component stops
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  const signOut = () => Supabase.auth.signOut();
  return (
    <userContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </userContext.Provider>
  );
};
export const useUser = () => useContext(userContext);
