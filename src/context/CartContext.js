import { createContext } from 'react';

const CartContext = createContext();

const CartInitialState = {
  id: 0,
  user_id: '',
  status: 'pending',
  coffee_list: [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        id: `order_${state.id + 1}`,
        user_id: action.payload.user_id,
        coffee_list: [
          ...state.coffee_list,
          {
            coffee_id: action.payload.coffee_id,
            coffee_name: action.payload.coffee_name,
            quantity: action.payload.quantity,
            price: action.payload.price,
            size: action.payload.size,
            milk: action.payload.milk,
            bean: action.payload.bean,
          },
        ],
      };
    }
    case 'accepted': {
      return {
        ...state,
        status: 'accepted',
      };
    }
    case 'pending': {
      return {
        ...state,
        status: 'pending',
      };
    }
    case 'inProgress': {
      return {
        ...state,
        status: 'in-progress',
      };
    }
    case 'completed': {
      return {
        ...state,
        status: 'completed',
      };
    }
  }
};

export { CartContext, CartInitialState, CartReducer };
