import CoffeeCup from '../assets/CoffeeCup.svg';
import CoffeeSplash from '../assets/CoffeeSplash.svg';

const CoffeeImage = () => {
  return (
    <div
      className={`relative flex justify-center items-center h-[100px] aspect-1/1 `}
    >
      <img src={CoffeeCup} alt="" className="z-10 absolute" />
      <img src={CoffeeSplash} alt="" className="absolute scale-125" />
    </div>
  );
};

export { CoffeeImage };
