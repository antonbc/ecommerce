import NewArrivals from "./items";

function NewArrivalsCard() {
  return (
    <div className="px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {NewArrivals.map((item, index) => (
          <div
            key={index}
            className={`relative p-4 transition ${
              index === 0 ? "lg:row-span-2 col-span-1 lg:col-span-2" : 
              index === 1 ? "col-span-1 lg:col-span-2" :
              "col-span-1"
            } bg-black text-white rounded-lg shadow-lg`}
          >
            {/* Image Container */}
            <div className="w-full h-64 mx-auto overflow-hidden rounded-md">
              <img
                src={item.backgroundImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-80 bg-gray-900 rounded-b-lg">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsCard;
