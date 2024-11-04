import CategoriesCard from "./ui/featured-categories-ui/CategoriesCard";

function CategoriesSection(){
    return (
        <div className="mb-24">
            <div className="mx-auto text-gray-200">
                <div className="flex justify-between align-bottom w-full py-6 px-6 lg:px-8">
                    <h1 className="font-bold text-2xl">Featured Categories</h1>
                    <span className="underline underline-offset-2 self-end cursor-pointer font-semibold hover:text-neutral-100">See all categories</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-8">
                    <CategoriesCard/>
                </div>
            </div>
        </div>
    )
}

export default CategoriesSection;