import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      } else {
        return initialValue;
      }
    } catch (error) {
      console.log("Error getting from localStorage");
      return initialValue;
    }
  });
  const saveValue = (newValue) => {
    setValue(newValue);
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log("Error saving to localStorage");
    }
  };
  const deleteValue = () => {
    try {
      localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.log("Error deleting from localStorage");
    }
  };
  return [value, saveValue, deleteValue];
};

export { useLocalStorage };