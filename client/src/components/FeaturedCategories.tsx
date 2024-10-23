import CategoriesCard from "./ui/featured-categories-ui/CategoriesCard";

function CategoriesSection(){
    return (
        <div>
            <div className="mx-auto bg-gray-900 text-neutral-200 ">
                <div className="flex justify-between align-bottom w-full py-8 sm:px-6 lg:px-8">
                    <h1 className="font-bold text-2xl">Featured Categories</h1>
                    <span className="underline underline-offset-2 self-end cursor font-semibold">See all categories</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    <CategoriesCard/>
                </div>
            </div>
        </div>
    )
}

export default CategoriesSection;