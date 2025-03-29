import { ShopCart } from '@/components/ShopCart/ShopCart';

import { CoffeeCard } from '@/components';
import COFFEE_DATA from '@/data/coffee_data.json';

const HomePage = () => {
  console.log(COFFEE_DATA);
  return (
    <div className="flex md:flex-row flex-col md:flex-wrap gap-2">
      {COFFEE_DATA.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            price={coffee.price}
            description={coffee.description}
          />
        );
      })}
      <ShopCart />
    </div>
  );
};
export { HomePage };
