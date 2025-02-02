export function Newsletter() {
  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/newsletter/image1.png')" }}
    >
      <div className="max-w-4xl mx-auto text-center bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#151875] sm:text-4xl">
            Get Latest Updates By Subscribing
          </h2>
          <p className="text-xl font-bold text-[#151875] sm:text-2xl">
            Our Newsletter
          </p>
          <button className="w-[200px] h-[57px] bg-[#FB2E86] text-white font-bold rounded hover:bg-pink-700 transition-transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
