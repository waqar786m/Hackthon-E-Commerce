import Image from "next/image";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/toCategories/image1.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/toCategories/image2.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/toCategories/image3.png", // Replace with actual image path
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/toCategories/image4.png", // Replace with actual image path
    },
  ];

  return (
    <div className="py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Top Categories
        </h2>
        <div className="flex justify-center items-center space-x-6 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative flex flex-col justify-center items-center bg-[#F6F7FB] p-4 w-48 h-48 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative w-28 h-28">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="mt-4 font-medium text-[#151875]">{category.name}</p>
              <p className="text-[#151875]">{category.price}</p>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === 0 ? "bg-pink-500" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
