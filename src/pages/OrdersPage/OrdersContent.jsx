import { OrderItem } from './components/OrderItem';
import data from '@/data/orders_data.json';
const OrdersContent = () => {
  return (
    <div className="h-full">
      <h1 className="my-5.5 font-medium text-dark-blue text-lg text-center leading-5">
        Status porudžbine
      </h1>

      <div className="flex justify-between items-center bg-dark-blue px-4 py-2 text-white">
        <span>ID porudžbine</span>
        <span>Priprema se</span>
        <span>Sprema</span>
      </div>

      {data.map((item) => {
        return <OrderItem id={item.id} list={item.coffee_list} />;
      })}
    </div>
  );
};

export { OrdersContent };
