import { useParams } from 'react-router';
import { useCartContext } from '@/hooks/';
import PlaceOrder from '@/assets/PlaceOrder.svg';
import CoffeeInProcess from '@/assets/CoffeeInProcess.svg';
import CoffeeCompleted from '@/assets/CoffeeCompleted.svg';
import { Timer } from './components/Timer';

const OrderPage = () => {
  const { id } = useParams();
  const { state, action } = useCartContext();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 font-medium text-light-blue text-sm leading-5">
        ID porudžbine: <span className="font-bold">{id}</span>
      </div>
      <Timer />
      <div className="flex justify-between items-start mb-14.5">
        <div className="flex flex-col flex-1 items-center gap-2.5">
          <div className="bg-gray-500 rounded-full w-6 h-6"></div>
          <span className="font-semibold text-xs text-center align-middle leading-4 tracking-normal">
            Porudžbina primljena
          </span>
        </div>
        <hr className="w-1/3" />
        <div className="flex flex-col flex-1 items-center gap-2.5">
          <div className="bg-gray-500 rounded-full w-6 h-6"></div>
          <span className="font-semibold text-xs text-center align-middle leading-4 tracking-normal">
            Kafa se sprema
          </span>
        </div>
        <hr className="w-1/3" />
        <div className="flex flex-col flex-1 items-center gap-2.5">
          <div className="bg-gray-500 rounded-full w-6 h-6"></div>
          <span className="font-semibold text-xs text-center align-middle leading-4 tracking-normal">
            Kafa je spremna
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center font-bold text-dark-blue text-2xl leading-8 tracking-[1px]">
        {state.status === 'pending' && (
          <>
            <img src={PlaceOrder} alt="" />
            <span className="block mt-6.5">Porudžbina primljena</span>
          </>
        )}
        {state.status === 'in-progress' && (
          <>
            <img src={CoffeeInProcess} alt="" />
            <span className="block mt-6.5">Kafa se priprema!</span>
          </>
        )}
        {state.status === 'completed' && (
          <>
            <img src={CoffeeCompleted} alt="" />
            <span className="block mt-6.5">Kafa je spremna!</span>
          </>
        )}
      </div>
    </div>
  );
};
export { OrderPage };
