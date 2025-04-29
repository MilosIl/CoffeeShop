import { CoffeeImage } from '@/components/';
import {
  IconMinus,
  IconLargeCoffee,
  IconMediumCoffee,
  IconSmallCoffee,
  IconShopCart,
} from '@/assets/icons';
import { Select, Button } from '@/components/ui';
import { BEAN, MILK } from '@/constants';
import { useState } from 'react';
import { useCartContext } from '../hooks/useCartContext';

const CoffeeCard = ({ id, name, price, description }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [counter, setCounter] = useState(1);
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedBean, setSelectedBean] = useState(BEAN[0]);
  const [selectedMilk, setSelectedMilk] = useState(MILK[0]);

  const { action } = useCartContext();

  const handleToggle = () => {
    setIsToggled(true);
  };
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(1);
      setIsToggled(false);
    }
  };
  const handleSelect = (size) => {
    setSelectedSize(size);
  };
  const handleAddToCart = () => {
    let multiplier = 1;
    if (selectedSize === 'medium') multiplier = 1.5;
    if (selectedSize === 'large') multiplier = 2;
    const finalPrice = price * multiplier;

    const coffeeOrder = {
      id: `order_${id}`,
      coffee_name: name,
      price: finalPrice,
      size: selectedSize,
      bean: selectedBean,
      milk: selectedMilk,
      quantity: counter,
      total_price: finalPrice * counter,
    };

    action({ type: 'add', payload: coffeeOrder });
  };

  return (
    <>
      {isToggled ? (
        <div className="bg-dark-blue p-4 rounded-xl max-w-[30rem]">
          <div className="flex items-start gap-3 text-white">
            <div className="bg-light-gray rounded-lg">
              <CoffeeImage />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center w-full font-bold">
                <h3 className="text-base">{name}</h3>
                <span className="text-xs">{price} RSD</span>
              </div>
              <p className="font-normal text-xs">{description}</p>
              <div className="flex justify-start items-center gap-3.5">
                <Button
                  className="cursor-pointer"
                  onClick={() => handleSelect('small')}
                >
                  <IconSmallCoffee
                    fillColor={selectedSize === 'small' ? '#000' : '#164864'}
                  />
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => handleSelect('medium')}
                >
                  <IconMediumCoffee
                    fillColor={selectedSize === 'medium' ? '#000' : '#164864'}
                  />
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => handleSelect('large')}
                >
                  <IconLargeCoffee
                    fillColor={selectedSize === 'large' ? '#000' : '#164864'}
                  />
                </Button>
              </div>
              <div className="flex items-center gap-3.5">
                <Select
                  label="Zrno"
                  options={BEAN}
                  onChange={(e) => setSelectedBean(e.target.value)}
                />
                <Select
                  label="Mleko"
                  options={MILK}
                  onChange={(e) => setSelectedMilk(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr className="my-4.5 w-full text-light-blue" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Button
                className="relative flex justify-center items-center bg-light-blue rounded-full w-6 h-6 cursor-pointer"
                onClick={decreaseCounter}
              >
                <span className="absolute">
                  <IconMinus />
                </span>
              </Button>
              <span className="text-white text-xl">{counter}</span>
              <Button
                className="relative flex justify-center items-center bg-light-blue rounded-full w-6 h-6 cursor-pointer"
                onClick={increaseCounter}
              >
                <span className="absolute">
                  <IconMinus />
                </span>
                <span className="absolute rotate-90">
                  <IconMinus />
                </span>
              </Button>
            </div>
            <Button
              className="bg-gradient-to-b from-light-blue to-dark-blue px-3.5 py-2 rounded-xl font-bold text-xs cursor-pointer"
              icon={<IconShopCart />}
              onClick={handleAddToCart}
            >
              Dodaj u korpu
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-dark-blue p-4 rounded-xl max-w-[30em] text-white">
          <div className="bg-light-gray rounded-lg">
            <CoffeeImage />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">{name}</h3>
            <p className="font-normal text-xs">{description}</p>
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span>Cena</span>
                <span>{price} RSD</span>
              </div>
              <Button
                className="relative flex justify-center items-center bg-light-blue rounded-full w-6 h-6 cursor-pointer"
                onClick={handleToggle}
              >
                <span className="absolute">
                  <IconMinus />
                </span>
                <span className="absolute rotate-90">
                  <IconMinus />
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { CoffeeCard };
