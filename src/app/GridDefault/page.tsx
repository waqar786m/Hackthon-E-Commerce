import Fashion from "./Fashion";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Products() {
    const products = [
      { id: 1, name: "Vel elit euismod", image: "/griddefault/image1.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 2, name: "Ultricies condimentum imperdiet", image: "/griddefault/image2.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 3, name: "Vitae suspendisse sed", image: "/griddefault/image3.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 4, name: "Sed at fermentum", image: "/griddefault/image4.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 5, name: "Fusce pellentesque at", image: "/griddefault/image5.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 6, name: "Vestibulum magna laoreet", image: "/griddefault/image6.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 7, name: "Sollicitudin amet orci", image: "/griddefault/image7.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 8, name: "Ultrices mauris sit", image: "/griddefault/image8.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 9, name: "Pellentesque condimentum ac", image: "griddefault/image9.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 10, name: "Cras scelerisque velit", image: "/griddefault/image10.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 11, name: "Lectus vulputate faucibus", image: "/griddefault/image11.png", price: "$26.00", oldPrice: "$42.00" },
      { id: 12, name: "Purus risus, ut", image: "/griddefault/image12.png", price: "$26.00", oldPrice: "$42.00" },
    ];
  
    return (
        <>
        <Navbar />

        
        {/* Hero Section */}
        <div className="mx-auto h-[285px] bg-gray-100 py-10 px-28">
          <div className="container mx-auto flex flex-col justify-center items-start h-full">
            {/* About Us Title */}
            <h2 className="text-3xl text-[#101750] font-bold mb-2">
             Grid Default
            </h2>

            {/* Home.Page.About Us Row */}
            <div className="flex flex-row items-center">
              <p className="text-black">Home.Page</p>
              <p className="text-pink-500">.</p>Grid Default
            </div>
          </div>
        </div>
        
     <Fashion />
        
      <div className="container mx-auto py-10 flex justify-center items-center px-4 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className=""
            >
              {/* Product Image */}
              <div className="w-full h-[210px] relative flex justify-center items-center bg-[#F6F7FB] rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full max-w-[201px] max-h-[201px]"
                />
              </div>
  
              {/* Product Details */}
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-[#151875] mb-2">
                  {product.name}
                </h3>
                {/* Color Dots */}
                <div className="flex justify-center gap-2 mb-3">
                  <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
                  <span className="w-4 h-4 bg-[#EC42A2] rounded-full"></span>
                  <span className="w-4 h-4 bg-[#8568FF] rounded-full"></span>
                </div>
                {/* Prices */}
                <div className="flex justify-center items-center gap-2">
                  <span className="text-lg font-bold text-[#151875]">
                    {product.price}
                  </span>
                  <span className="text-sm line-through text-[#FB2E86]">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      </>
    );
  }
  