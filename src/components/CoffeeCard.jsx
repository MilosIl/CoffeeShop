import { CoffeeImage } from "../components/CoffeeImage"
import { IconMinus } from "../assets/icons/IconMinus";
const CoffeCard = () => {
    return (

        <div className="flex items-center bg-dark-blue rounded-xl gap-3 text-white max-w-fit p-4">
            <div className="bg-light-gray rounded-lg">
                <CoffeeImage />
            </div>
            <div className="flex flex-col gap-2">


                <h3 className=" text-base font-semibold ">Espresso kratki</h3>

                <p className=" text-xs font-normal max-w-50">Svojom bogatom aromom i punim ukusom,
                    ova mala ali moćna kafica čini savršen početak dana.
                </p>



                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span>Cena</span>
                        <span>120,00 RSD</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#248CC5] flex items-center justify-center relative cursor-pointer">
                        <span className="absolute"> {IconMinus()}</span>
                        <span className="rotate-90 absolute">{IconMinus()}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export { CoffeCard };