import { useState } from 'react';
import { Button } from '../ui/Button';
import { IconNextArrow } from '@/assets/icons';
import { CartItem } from './CartItem';
import { totalPrice, formatPrice } from '@/utils';
import { useNavigate } from 'react-router';
import { useCartContext } from '@/hooks/useCartContext';
import { useOrders } from '@/lib/localStorageService';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCartContext();
  const navigate = useNavigate();
  const [orders, setOrders] = useOrders();
  const total = totalPrice(state.coffee_list);
  const formatedTotal = formatPrice(total);

  const handleNewOrder = () => {
    const nextOrderId = orders.length > 0 ? orders.length + 1 : 1;
    const newOrder = {
      id: `order_${nextOrderId}`,
      coffee_list: [...state.coffee_list],
      status: 'pending',
      // needs to be changed for logged user
      user_id: 'user_1',
    };
    setOrders([...orders, newOrder]);
    navigate(`/orders/${newOrder.id}`);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-light-blue px-6 pt-2 pb-5 rounded-t-lg z-10 transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-6.7em)]'
      }`}
    >
      <div
        className="bg-white/45 mx-auto mt-2 mb-4 rounded w-1/5 h-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div className="flex justify-between items-center font-bold text-white text-base leading-6 tracking-tight">
        <div className="flex flex-col">
          <span>Ukupno:</span>
          <span>{formatedTotal}</span>
        </div>
        <Button
          className="bg-dark-blue px-5 py-1 rounded-md font-medium leading-4.5"
          icon={<IconNextArrow />}
          onClick={handleNewOrder}
          disabled={state.coffee_list.length === 0}
        >
          Naruči
        </Button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-1/2' : 'max-h-0'
        }`}
      >
        <hr className="my-5 text-white/20" />
        {state.coffee_list.map((item) => {
          return (
            <CartItem
              key={item.coffee_id}
              amount={item.quantity}
              name={item.coffee_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Cart };
