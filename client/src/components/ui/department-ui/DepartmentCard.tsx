import departments from "./departments";

function DepartmentCard() {
    return (
        <>
            {departments.map((department, index) => (
                <div className="border border-gray-700 bg-gray-800 rounded-xl p-6" key={index}>
                    <h3 className="mb-2 tracking-wide text-lg font-bold text-neutral-200">{department.departmentName}</h3>
                    <div className="grid grid-cols-2">
                        {department.subCategories.map((subCategory, subIndex) => (
                            <div
                            className={`relative p-4 grid grid-cols-2 h-full gap-2 ${
                                subIndex === 0
                                    ? "border-r border-b border-gray-700"  // Top-left item
                                    : subIndex === 1
                                    ? "border-b border-gray-700"            // Top-right item
                                    : subIndex === 2
                                    ? "border-r border-gray-700"            // Bottom-left item
                                    : ""                                     // Bottom-right item (no additional border)
                            }`}
                                key={subIndex}
                            >
                                <div className="w-full h-28 mx-auto col-span-2">
                                    <img
                                        src={subCategory.image}
                                        alt={subCategory.categoryName}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-white text-center font-semibold text-sm col-span-2">{subCategory.categoryName}</h3>
                            </div>
                        ))}
                    </div>
                    <h6 className="text-blue-500 cursor-pointer hover:underline">Shop now →</h6>
                </div>
            ))}
        </>
    );
}

export default DepartmentCard;
