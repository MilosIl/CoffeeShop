import { COFFEE_DATA } from "@/data/coffee_data.json";
import { Cart } from "@/components/";


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
      <Cart />
    </div>
  );
};
export { HomePage };
1