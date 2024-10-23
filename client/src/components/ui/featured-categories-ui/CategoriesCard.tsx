import Categories from "./categories";
import { IoAlertCircleOutline } from "react-icons/io5";

interface CategoryCard {
    image: string;
    description: string;
    discount: string;
    category: string;
}

function CategoriesCard() {
    return (
        <>
            {Categories.map((card: CategoryCard, index: number) => (
                <div 
                    key={index} 
                    className="flex flex-col gap-3 p-5 bg-gray-800 rounded-xl border border-gray-700"
                >
                    <div className="w-full h-72 mx-auto">
                        <img 
                            src={card.image} 
                            alt="image" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="text-start">
                        <div className="bg-gray-700 text-gray-300 py-1 px-3 rounded-md text-xs font-medium inline-flex align-center gap-1">
                            <IoAlertCircleOutline className="text-base"/>
                            <span className="">
                                Up to {card.discount} off today
                            </span>
                        </div>
                    </div>
                    <h2 className="text-white text-lg font-semibold text-start">
                        {card.description}
                    </h2>
                    <span className="text-blue-400 font-medium text-start">
                        See more {card.category} deals →
                    </span>
                </div>
            ))}
        </>
    );
}

export default CategoriesCard;
