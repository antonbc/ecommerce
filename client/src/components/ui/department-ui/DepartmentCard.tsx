import departments from "./departments";

function DepartmentCard() {
    return (
        <>
            {departments.map((department, index) => (
                <div className="border border-gray-700 bg-gray-800" key={index}>
                    <div className="grid grid-cols-2">
                        {department.subCategories.map((subCategory, subIndex) => (
                            <div
                                className={`relative p-4 transition grid grid-rows-2 ${
                                    subIndex === 0
                                        ? "border-b-gray-700"
                                        : subIndex === 1
                                        ? "border-l-gray-700 border-b-gray-700"
                                        : subIndex === 2
                                        ? "border-r-gray-700 border-b-gray-700"
                                        : "border-t-gray-700"
                                }`}
                                key={subIndex}
                            >
                                <div className="w-full h-32 mx-auto overflow-hidden">
                                    <img
                                        src={subCategory.image}
                                        alt={subCategory.categoryName}
                                        className="w-full h-full object-cover"
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
