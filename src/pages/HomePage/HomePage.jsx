import COFFEE_DATA from '@/data/coffee_data.json';
import { Cart, CoffeeCard } from '@/components/';
import { Loader } from '@/components/Loader';
import { useLoader } from '@/hooks/useLoader';

const HomePage = () => {
  const isLoading = useLoader();

  return (
    <div className="flex md:flex-row flex-col md:flex-wrap gap-2">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {COFFEE_DATA.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              price={coffee.price}
              description={coffee.description}
            />
          ))}
        </>
      )}
      <Cart />
    </div>
  );
};

export { HomePage };
