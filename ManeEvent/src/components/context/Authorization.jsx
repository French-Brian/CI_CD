import { createContext, useContext, useState } from "react";
import Supabase from "../../backend/supabase/supabaseClient";

const userContext = createContext({});

{
  /**creates the context to be set if the user is authenticated via supabase */
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signOut = () => Supabase.auth.signOut();
  return (
    <userContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </userContext.Provider>
  );
};
export const useUser = () => useContext(userContext);
