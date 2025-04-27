import { useLocalStorage } from '../hooks/useLocalStorage';
import users from '../data/users_data.json';
import orders from '../data/orders_data.json';
import coffeeList from '../data/coffee_data.json';

export const STORAGE_KEYS = {
  USERS: 'coffee_shop_users',
  ORDERS: 'coffee_shop_orders',
  COFFEE_LIST: 'coffee_shop_coffee_list',
  CURRENT_USER: 'coffee_shop_current_user',
};

const initialUsers = [];
const initialOrders = [];
const initialCoffeeList = [];
const initialCurrentUser = null;

export const useUsers = () => {
  return useLocalStorage(STORAGE_KEYS.USERS, initialUsers);
};

export const useOrders = () => {
  return useLocalStorage(STORAGE_KEYS.ORDERS, initialOrders);
};

export const useCoffeeList = () => {
  return useLocalStorage(STORAGE_KEYS.COFFEE_LIST, initialCoffeeList);
};

export const useCurrentUser = () => {
  return useLocalStorage(STORAGE_KEYS.CURRENT_USER, initialCurrentUser);
};

export const initializeLocalStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }

  if (!localStorage.getItem(STORAGE_KEYS.ORDERS)) {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }

  if (!localStorage.getItem(STORAGE_KEYS.COFFEE_LIST)) {
    localStorage.setItem(STORAGE_KEYS.COFFEE_LIST, JSON.stringify(coffeeList));
  }
};
