import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const persistParam = window.sessionStorage.getItem("currentUser");
    return persistParam !== null ? JSON.parse(persistParam) : null;
  });
  const [myProfile, setMyProfile] = useState(() => {
    const param = window.sessionStorage.getItem("currentUser");
    return param !== null ? JSON.parse(param) : null;
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [forte, setForte] = useState([]);
  const [error, setError] = useState("");

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        password,
        setPassword,
        signedIn,
        setSignedIn,
        myProfile,
        setMyProfile,
        name,
        setName,
        bio,
        setBio,
        forte,
        setForte,
        error,
        setError,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
