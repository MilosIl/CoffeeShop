import CoffeeCup from "../assets/coffee-cup.svg";
import CoffeeSplash from "../assets/coffee-splash.svg"
import ButtonCup from "../assets/button-cup.svg"
const CoffeCard = () => {
    return (
        <div>
            {/* <div className="bg-dark-blue rounded-[12px] flex max-w-[340px] flex-wrap">
            <img src={CoffeeSplash}/>
            <img src={CoffeeCup}/>
            <h3 className="font-montserrat text-base font-semibold text-text">Espresso</h3>
            <p className="font-montserrat text-base font-semibold text-white">150 RSD</p>
            <p className="font-montserrat text-[12px] font-normal text-text flex">Espresso je jaka kafa napravljena 
            pod visokim
            pritiskom vruće 
            vode kroz fino mlevenu kafu.</p>
            </div> */}
            <div className="flex items-center bg-dark-blue rounded-[12px] max-w-[340px]">
                <div className="mr-4 bg-text">
                    <img src={CoffeeCup} className="w-20 h-20"/>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="font-montserrat text-base/21px font-semibold text-text mt-[15.37px]">Espresso</h3>
                        <span className="font-montserrat text-[12px]/21px font-normal text-white mt-[16.27px] mr-[18.67px]">150 RSD</span>
                    </div>
                        <p className="font-montserrat text-[12px] font-normal text-text pr-[18.67px]">Espresso je jaka kafa napravljena 
                            pod visokim
                            pritiskom vruće 
                            vode kroz fino mlevenu kafu.
                        </p>
                        <div className="flex space-x-2 mt-2">
                            <button className="w-8 h-8 bg-text text-black rounded-full text-sm flex items-center justify-center"><img src={ButtonCup} className="w-[8.57px] h-[10.29px]"/></button>
                            <button className="w-8 h-8 bg-text text-black rounded-full text-sm flex items-center justify-center"><img src={ButtonCup}/></button>
                            <button className="w-8 h-8 bg-text text-black rounded-full text-sm flex items-center justify-center"><img src={ButtonCup}/></button>
                        </div>
                </div>


            </div>

        </div>
    );
}

export {CoffeCard};