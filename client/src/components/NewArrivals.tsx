import NewArrivalsCard from "./ui/new-arrivals-ui/NewArrivalsCard";

function NewArrivals(){
    return (
        <div className="mb-10">
            <div className="mx-auto text-neutral-300">
                <div className="flex justify-between align-bottom w-full py-6 px-6 lg:px-8">
                    <h1 className="font-bold text-2xl">New Arrivals</h1>
                    <span className=" self-end cursor-pointer font-semibold text-blue-500 hover:underline">View more →</span>
                </div>
                <NewArrivalsCard/>
            </div>
        </div>
    )
}

export default NewArrivals;