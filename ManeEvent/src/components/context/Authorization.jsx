import { createContext, useContext, useState } from "react";
import Supabase from "../../backend/supabase/supabaseClient";

const userContext = createContext({});
export const useUser = () => useContext(userContext);
{
  /**creates the context to be set if the user is authenticated via supabase */
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
