import { capitalizeFirstLetter } from '@/utils/capitelizeFirstLetter';

const OrderItem = ({ id, list }) => {
  return (
    <>
      <details className="group shadow-[1px_1px_6px_1px_#00000040] mb-2 pl-9.5">
        <summary className="flex justify-between items-center py-2 pr-5 font-bold text-dark-blue text-xs leading-5 cursor-pointer">
          <span className="flex items-center gap-2">
            <span className="group-open:rotate-180 transition-transform duration-200 transform">
              ▼
            </span>
            {id}
          </span>
          {/* priprema se checkbox */}
          <input type="checkbox" className="w-4.5 h-4.5" />
          {/* sprema se checkbox  */}
          <input type="checkbox" className="w-4.5 h-4.5" />
        </summary>
        <ul className="py-5">
          {list?.map((item) => (
            <li className="my-1 text-light-blue" key={list.coffee_id}>
              {item.quantity}x {item.coffee_name}{' '}
              {item.milk == 'none' ? '' : item.milk}(
              {capitalizeFirstLetter(item.size)})
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};

export { OrderItem };
