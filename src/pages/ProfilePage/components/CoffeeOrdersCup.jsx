import { IconCoffee } from '@/assets/icons';
const CoffeeOrdersCup = ({ hasOrder, isFree }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-light-blue p-2 rounded-full w-14 h-14">
        {hasOrder ? (
          isFree ? (
            <span className="font-bold text-white">FREE</span>
          ) : (
            <IconCoffee />
          )
        ) : null}
      </div>
    </div>
  );
};
export { CoffeeOrdersCup };
