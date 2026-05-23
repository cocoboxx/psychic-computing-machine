import { createContext, useContext, useState } from 'react';



const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);



  
  const login = (credentials) => {
    // Simple simulation - in real app, this would be an API call
    const {email, password} = credentials;
    if (email && password) {
      setIsAuthenticated(true);
      // setUser({ email, name: 'Alex Johnson' });
    
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    if (name && email && password) {
      setIsAuthenticated(true);
      // setUser({ email, name });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);