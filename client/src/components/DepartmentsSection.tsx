import DepartmentCard from "./ui/department-ui/DepartmentCard";
function DepartmentSection(){
    return(
        <div className="bg-gray-900">
            <div>
                <div className="flex justify-between align-bottom w-full p-6 lg:px-8">
                    <h1 className="font-bold text-2xl tracking-wide text-gray-200">Browse Departments</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-8 pb-16">
                    <DepartmentCard />
                </div>
            </div>
        </div>
    )
}

export default DepartmentSection;