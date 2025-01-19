export default function Info() {
    const products = [
      { id: 1, name: "Mens Fashion Wear", image: "/productdetails/product1.png", price: "$26.00", rating: "★★★☆☆" },
      { id: 2, name: "Womens Fashion", image: "/productdetails/product2.png", price: "$26.00", rating: "★★★☆☆" },
      { id: 3, name: "Wolx Dummy Fashion", image: "/productdetails/product3.png", price: "$26.00", rating: "★★★☆☆" },
      { id: 4, name: "Top Wall Digital Clock", image: "/productdetails/product4.png", price: "$26.00", rating: "★★★☆☆" },
    ];
  
    return (
      <div className="container mx-auto py-10 px-20 mt-20">
        {/* Heading for Related Products */}
        <h2 className="text-2xl text-[#101750] font-bold  mb-8 ml-7">Related Products</h2>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative">
              {/* Product Image with Overlay */}
              <div className="relative flex justify-center items-center h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  width={270}
                  height={340}
                  className="w-full max-h-full object-contain"
                />
              </div>
  
              {/* Product Details */}
              <div className="text-center mt-4">
                <h3 className="text-base font-semibold text-[#151875] mb-2 flex items-center justify-center gap-2 whitespace-nowrap">
                  {product.name}
                  <span className="text-yellow-500">{product.rating}</span>
                </h3>
                {/* Prices */}
                <div className="flex justify-center items-center gap-2">
                  <span className="text-lg font-bold text-[#151875]">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  