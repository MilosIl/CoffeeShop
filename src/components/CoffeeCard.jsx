import { CoffeeImage } from "../components/CoffeeImage";
import { IconMinus, IconLargeCoffee, IconMediumCoffee, IconSmallCoffee, IconShopCart } from "../assets/icons";
import { Select, Button } from "../components/ui";
import { BEAN, MILK } from "../constants";
import { useState } from "react";

const CoffeeCard = ({ name, price, text }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [counter, setCounter] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleToggle = () => { setIsToggled(true) };
    const increaseCounter = () => setCounter(counter + 1);
    const decreaseCounter = () => {
        if (counter > 1) setCounter(counter - 1)
    };
    const handleSelect = (size) => { setSelectedSize(size); };


    return (
        <>
            {isToggled ? (
                <div className="bg-dark-blue p-4 rounded-xl w-fit">
                    <div className="flex items-start gap-3 text-white">
                        <div className="bg-light-gray rounded-lg">
                            <CoffeeImage />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center w-full font-bold">
                                <h3 className="text-base">{name}</h3>
                                <span className="text-xs">{price}</span>
                            </div>
                            <p className="font-normal text-xs">
                                {text}
                            </p>
                            <div className="flex justify-start items-center gap-3.5">
                                <button className="cursor-pointer" onClick={() => handleSelect("small")}><IconSmallCoffee fillColor={selectedSize === "small" ? "#000" : "#164864"} /></button>
                                <button className="cursor-pointer" onClick={() => handleSelect("medium")}><IconMediumCoffee fillColor={selectedSize === "medium" ? "#000" : "#164864"} /></button>
                                <button className="cursor-pointer" onClick={() => handleSelect("large")}><IconLargeCoffee fillColor={selectedSize === "large" ? "#000" : "#164864"} /></button>
                            </div>
                            <div className="flex items-center gap-3.5">
                                <Select label="Zrno" options={BEAN} />
                                <Select label="Mleko" options={MILK} />
                            </div>
                        </div>
                    </div>
                    <hr className="my-4.5 w-full text-light-blue" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">

                            <button className="relative flex justify-center items-center bg-light-blue rounded-full w-6 h-6 cursor-pointer" onClick={decreaseCounter}>
                                <span className="absolute">
                                    <IconMinus />
                                </span>
                            </button>
                            <span className="text-white text-xl">{counter}</span>
                            <button className="relative flex justify-center items-center bg-light-blue rounded-full w-6 h-6 cursor-pointer" onClick={increaseCounter}>
                                <span className="absolute">
                                    <IconMinus />
                                </span>
                                <span className="absolute rotate-90">
                                    <IconMinus />
                                </span>
                            </button>
                        </div>
                        <Button
                            className="bg-gradient-to-b from-light-blue to-dark-blue px-3.5 py-2 rounded-xl font-bold text-xs"
                            icon={<IconShopCart />}
                        >
                            Dodaj u korpu
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-3 bg-dark-blue p-4 rounded-xl max-w-fit text-white">
                    <div className="bg-light-gray rounded-lg">
                        <CoffeeImage />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base">{name}</h3>
                        <p className="font-normal text-xs">
                            {text}
                        </p>
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span>Cena</span>
                                <span>{price}</span>
                            </div>
                            <button
                                className="relative flex justify-center items-center bg-light-blue rounded-full w-6 h-6 cursor-pointer"
                                onClick={handleToggle}
                            >
                                <span className="absolute">
                                    <IconMinus />
                                </span>
                                <span className="absolute rotate-90">
                                    <IconMinus />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export { CoffeeCard };