import { Button } from '../ui/Button';
import { IconNextArrow } from '@/assets/icons';
import { ShopCartItem } from './ShopCartItem';

const DATA = [
  { id: 1, name: 'Espreso', amount: 2 },
  { id: 2, name: 'Americano', amount: 1 },
  { id: 3, name: 'Cappucino', amount: 1 },
  { id: 4, name: 'Ice Coffee', amount: 1 },
];

const ShopCart = () => {
  return (
    <div className="bottom-0 bg-light-blue px-6 pt-2 pb-5 rounded-t-lg">
      <div className="bg-white/45 mx-auto mt-2 mb-11.5 rounded w-1/5 h-2"></div>
      <div className="flex justify-between items-center font-bold text-white text-base leading-6 tracking-tight">
        <div className="flex flex-col">
          <span>Ukupno:</span>
          <span>920,00 RSD</span>
        </div>
        <Button
          className="bg-dark-blue px-5 py-1 rounded-md font-medium leading-4.5"
          icon={<IconNextArrow />}
        >
          Naruči
        </Button>
      </div>
      <div>
        <hr className="my-5 text-white/20" />
        {DATA.map((item) => {
          return (
            <ShopCartItem key={item.id} amount={item.amount} name={item.name} />
          );
        })}
      </div>
    </div>
  );
};

export { ShopCart };
