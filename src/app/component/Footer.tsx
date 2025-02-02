export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] text-gray-700 mt-10">
      {/* Top Section */}
      <div className="container mx-auto py-10 px-5 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding and Subscription */}
        <div className="mb-10 w-full md:w-[344px]">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Hekto</h2>
          <div className="flex flex-col md:flex-row items-center space-x-2 mb-6">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="text-[#8A8FB9] flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none mb-3 md:mb-0"
            />
            <button className="bg-[#FB2E86] text-white px-4 h-10 rounded-md">
              SignUp
            </button>
          </div>
          <p className="text-[#8A8FB9] mb-2 font-semibold">Contact Info:</p>
          <p className="text-sm text-[#8A8FB9]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div className="w-full md:w-[344px]">
          <h3 className="text-black text-lg font-semibold mb-4 md:ml-20">Categories</h3>
          <ul className="text-[#8A8FB9] list-none pl-5 md:pl-20 space-y-2">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="w-full md:w-[344px]">
          <h3 className="text-black text-lg font-semibold mb-4 md:ml-20">Customer Care</h3>
          <ul className="text-[#8A8FB9] list-none pl-5 md:pl-20 space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="w-full md:w-[344px]">
          <h3 className="text-black text-lg font-semibold mb-4">Pages</h3>
          <ul className="text-[#8A8FB9] list-none pl-0 space-y-2">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#8A8FB9]">©Hekto - All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="w-4 h-4 bg-indigo-900 rounded-full"></div>
            <div className="w-4 h-4 bg-indigo-900 rounded-full"></div>
            <div className="w-4 h-4 bg-indigo-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
