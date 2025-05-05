import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthInitialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(AuthInitialState);
  const [storedUser, setStoredUser, removeStoredUser] = useLocalStorage(
    'current_user',
    null
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (storedUser) {
      setAuthState({
        isAuthenticated: true,
        user: storedUser,
        error: null,
      });
    }
  }, [storedUser]);

  const login = async (email, password) => {
    try {
      const users = JSON.parse(
        localStorage.getItem('coffee_shop_users') || '[]'
      );
      const user = users.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.password === password
      );

      if (user) {
        setAuthState({
          isAuthenticated: true,
          user,
          error: null,
        });
        setStoredUser(user);
        return true;
      } else {
        setAuthState({
          ...authState,
          error: 'Invalid email or password',
        });
        return false;
      }
    } catch (error) {
      setAuthState({
        ...authState,
        error: error.message || 'An error occurred during login',
      });
      return false;
    }
  };
  const logout = () => {
    setAuthState(AuthInitialState);
    removeStoredUser();
    navigate('/')
  };

  const register = async (userData) => {
    try {
      const users = JSON.parse(
        localStorage.getItem('coffee_shop_users') || '[]'
      );
      const existingUser = users.find(
        (u) => u.email.toLowerCase() === userData.email.toLowerCase()
      );

      if (existingUser) {
        setAuthState({
          ...authState,
          error: 'User with this email already exists',
        });
        return false;
      }
      const newUser = {
        id: `user_${users.length + 1}`,
        ...userData,
        roll: 'customer',
      };

      const updatedUsers = [...users, newUser];
      localStorage.setItem('coffee_shop_users', JSON.stringify(updatedUsers));
      setAuthState({
        isAuthenticated: true,
        user: newUser,
        error: null,
      });
      setStoredUser(newUser);
      return true;
    } catch (error) {
      setAuthState({
        ...authState,
        error: error.message || 'An error occurred during registration',
      });
      return false;
    }
  };

  const clearError = () => {
    setAuthState({
      ...authState,
      error: null,
    });
  };

  const value = useMemo(
    () => ({
      isAuthenticated: authState.isAuthenticated,
      user: storedUser,
      error: authState.error,
      login,
      logout,
      register,
      clearError,
    }),
    [authState, storedUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext, useAuth };
