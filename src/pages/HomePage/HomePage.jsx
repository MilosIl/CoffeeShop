import COFFEE_DATA from '@/data/coffee_data.json';
import { Cart, CoffeeCard } from '@/components/';
import { Loader } from '@/components/Loader';
import { useLoader } from '@/hooks/useLoader';

const HomePage = () => {
  const isLoading = useLoader();

  return (
    <div className="relative">
      <div className="flex md:flex-row flex-col md:flex-wrap items-start gap-2 pb-[calc(6.7em+1rem)]">
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
      </div>
      <Cart />
    </div>
  );
};

export { HomePage };
