"use client";

import React from "react";
import { useCart } from "@/app/Context/CartContext";
import Image from "next/image";
import Navbar from "./Navbar";

const Cart = () => {
  const { cart } = useCart();

  function clearCart(event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  function removeFromCart(name: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="mx-auto h-[285px] bg-gray-100 py-10 px-6 sm:px-28">
        <div className="container mx-auto flex flex-col justify-center items-start h-full">
          <h2 className="text-3xl text-[#101750] font-bold mb-2">Shoping Cart</h2>
          <div className="flex flex-row items-center">
            <p className="text-black">Home.Page</p>
            <p className="text-pink-500">.Shoping Cart</p>
          </div>
        </div>
        </div>

      <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Table */}
          <div className="lg:col-span-2 bg-white p-4 sm:p-6 overflow-x-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
            ) : (
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-2 sm:px-4 text-[#151875] font-semibold">Product</th>
                    <th className="py-2 px-2 sm:px-4 text-[#151875] font-semibold">Price</th>
                    <th className="py-2 px-2 sm:px-4 text-[#151875] font-semibold">Quantity</th>
                    <th className="py-2 px-2 sm:px-4 text-[#151875] font-semibold">Total</th>
                    <th className="py-2 px-2 sm:px-4 text-[#151875] font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.name} className="border-b">
                      <td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
                        <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md object-cover" />
                        <h4 className="text-sm font-semibold text-[#151875]">{item.name}</h4>
                      </td>
                      <td className="py-4 px-2 sm:px-4">${item.price}</td>
                      <td className="py-4 px-2 sm:px-4">{item.quantity}</td>
                      <td className="py-4 px-2 sm:px-4">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="py-4 px-2 sm:px-4">
                        <button onClick={() => removeFromCart(item.name)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Cart Actions */}
            {cart.length > 0 && (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
                <button className="bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-[#E02B7B] w-full sm:w-auto">
                  Update Cart
                </button>
                <button onClick={clearCart} className="bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-[#E02B7B] w-full sm:w-auto">
                  Clear Cart
                </button>
              </div>
            )}
          </div>

          {/* Cart Totals and Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border rounded-md w-full">
              <h2 className="text-lg font-bold text-[#151875] mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span className="text-[#1D3178]">Subtotals:</span>
                <span className="text-[#151875] font-semibold">
                  ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Shipping & taxes calculated at checkout.</p>
              <button className="bg-[#3BB77E] text-white w-full py-2 rounded-md hover:bg-[#36A569]">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
