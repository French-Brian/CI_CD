/*import React, { useMemo } from "react";
import { useUser } from "./context/Authorization";
import ClientHeader from "./clientHeader";   
import ProviderHeader from "./providerHeader";
import Header from "./header";

/**
 * Chooses the correct header/navbar based on the authenticated user's role.
 * Falls back to <Header /> 
 */
/*export default function CheckHeader() {
  const { user } = useUser?.() ?? {};

  // read role from either user_metadata or app_metadata
  const role = useMemo(() => {
    return (
      user?.user_metadata?.endUser?.ROLE ??
      user?.app_metadata?.role ??
      null
    );
  }, [user]);

  if (!user) return <Header />;             // if not loaded yet
  if (role === "CLIENT") return <ClientHeader />;
  if (role === "PROVIDER") return <ProviderHeader />;

  // user present but no role yet => default
  return <Header />;
}*/


// src/components/checkHeader.jsx   (match your casing/paths)
import React from "react";
import { useUser } from "./context/Authorization";     // same hook as Home
import ClientHeader from "./clientHeader";              // use SAME file as Home (capital C)
import ProviderHeader from "./providerHeader";
import Header from "./header";

export default function CheckHeader() {
  const { user } = useUser();

  // ⬅️ only difference from Home: guard the first render / guest routes
  if (!user) return <Header />;

  // SAME variables as your Home.jsx, just with null-safety to avoid runtime errors
  //const username    = user.user_metadata?.endUser?.USERNAME;
  const role        = user.user_metadata?.endUser?.ROLE;
  //const displayName = user.user_metadata?.endUser?.DISPLAYNAME;
  //const userId      = user.id;

  let header;
  if (role === "CLIENT") {
    header = <ClientHeader />;
  } else if (role === "PROVIDER") {
    header = <ProviderHeader />;
  } else {
    header = <Header />;
  }

  return header;
}