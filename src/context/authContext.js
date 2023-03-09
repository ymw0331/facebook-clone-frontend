import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ( { children } ) =>
{
  const [ currentUser, setCurrentUser ] = useState(
    JSON.parse( localStorage.getItem( "user" ) ) || null
  );

  const login = () =>
  {
    //TO DO
    setCurrentUser( {
      id: 1,
      name: "Wayne Yong",
      profilePic:
        "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    } );
  };

  useEffect( () =>
  {
    localStorage.setItem( "user", JSON.stringify( currentUser ) );
  }, [ currentUser ] );

  return (
    <AuthContext.Provider
      value={ { currentUser, login } }>
      { children }
    </AuthContext.Provider>
  );
};
