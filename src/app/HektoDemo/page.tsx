import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function HektoDemo() { // Array of product data
    const products = [
      {
        src: "/hektodemo/image1.png",
        name: "Ut diam consequat",
        color: "Brown",
        size: "XL",
        price: "$32.00",
      },
      {
        src: "/hektodemo/image2.png",
        name: "Ut diam consequat",
        color: "Brown",
        size: "XL",
        price: "$45.00",
      },
      {
        src: "/hektodemo/image3.png",
        name: "Ut diam consequat",
        color: "Brown",
        size: "XL",
        price: "$55.00",
      },
      {
        src: "/hektodemo/image4.png",
        name: "Ut diam consequat",
        color: "Brown",
        size: "XL",
        price: "$120.00",
      },
      {
        src: "/hektodemo/image5.png",
        name: "Ut diam consequat",
        color: "Brown",
        size: "XL",
        price: "$80.00",
      },
    ];

  return (
  <>

  <Navbar />

    {/* Hero Section */}
    <div className="mx-auto h-[285px] bg-gray-100 py-10 px-28">
    <div className="container mx-auto flex flex-col justify-center items-start h-full">
      {/* About Us Title */}
      <h2 className="text-3xl text-[#101750] font-bold mb-2">
        Contact Us
      </h2>

      {/* Home.Page.About Us Row */}
      <div className="flex flex-row items-center">
        <p className="text-black">Home.Page</p>
        <p className="text-pink-500">.Contact Us</p>
      </div>
    </div>
  </div>

    <div className="min-h-screen bg-white p-8 px-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 bg-[#F8F8FD] rounded-md p-8">
          <h1 className="text-2xl font-bold text-[#1D3178]">Hekto Demo</h1>
          <p className="text-sm text-gray-500 mt-1">
            Cart / Information / Shipping / Payment
          </p>

          {/* Contact Information */}
          <section className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#1D3178]">
                Contact Information
              </h2>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Already have an account? Log in
              </a>
            </div>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email or mobile phone number
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-md mt-1 p-2"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="news"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="news" className="ml-2 text-sm text-gray-700">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </form>
          </section>

          {/* Shipping Address */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-[#1D3178]">
              Shipping Address
            </h2>
            <form className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm text-gray-700"
                  >
                    First name (optional)
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full border-gray-300 rounded-md mt-1 p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full border-gray-300 rounded-md mt-1 p-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border-gray-300 rounded-md mt-1 p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="apartment"
                  className="block text-sm text-gray-700"
                >
                  Apartment, suite, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="w-full border-gray-300 rounded-md mt-1 p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full border-gray-300 rounded-md mt-1 p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm text-gray-700"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    className="w-full border-gray-300 rounded-md mt-1 p-2"
                  />
                </div>
              </div>
              <button className="mt-6 bg-[#FB2E86] text-white py-2 px-4 rounded-md">
                Continue Shipping
              </button>
            </form>
          </section>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 rounded-md ">
          <div>
            {/* Product List */}
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="flex items-center border rounded-lg p-4 bg-[#F8F8FD] w-full"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 flex-shrink-0">
                    <Image
                      src={product.src}
                      alt={product.name}
                      width={83}
                      height={87}
                      className="object-cover rounded-md"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="ml-4 flex-grow">
                    <h2 className="text-sm font-medium text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-xs text-gray-500">Color: {product.color}</p>
                    <p className="text-xs text-gray-500">Size: {product.size}</p>
                  </div>
                  {/* Product Price */}
                  <p className="text-sm font-medium text-gray-800">{product.price}</p>
                </li>
              ))}
            </ul>

            {/* Cart Totals and Checkout */}
            <div className="mt-8 bg-[#F4F4FC] p-6 rounded-md shadow-md">
              <h2 className="text-lg font-bold text-[#151875] mb-4">
                Cart Totals
              </h2>
              <div className="flex justify-between mb-2">
                <span className="text-[#1D3178]">Subtotals:</span>
                <span className="text-[#151875] font-semibold">£219.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-[#1D3178]">Totals:</span>
                <span className="text-[#151875] font-semibold">£325.00</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="bg-[#3BB77E] text-white w-full py-2 rounded-md hover:bg-[#36A569]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}
