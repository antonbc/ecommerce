import departments from "./departments";

function DepartmentCard() {
    return (
        <>
            {departments.map((department, index) => (
                <div className="border border-gray-700 bg-gray-800 rounded-xl" key={index}>
                    <div className="grid grid-cols-2">
                        {department.subCategories.map((subCategory, subIndex) => (
                            <div
                            className={`relative p-4 transition grid grid-rows-2 h-full ${
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
                                <div className="w-full h-32 mx-auto">
                                    <img
                                        src={subCategory.image}
                                        alt={subCategory.categoryName}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-white text-center">{subCategory.categoryName}</h3>
                            </div>
                        ))}
                    </div>
                    <span className="text-blue-500">Shop now →</span>
                </div>
            ))}
        </>
    );
}

export default DepartmentCard;
