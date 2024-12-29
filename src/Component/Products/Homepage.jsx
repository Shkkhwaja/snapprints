import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from "lucide-react";

export default function CategoriesPage() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])

  const categories = [
    {
      id: "01",
      img: "https://readymadeui.com/images/product1.webp",
      title: "T-shirt",
      amount: "299",
      offer: "10% off",
      link: "tshirt"
    },
    {
      id: "02",
      img: "https://readymadeui.com/images/product2.webp",
      title: "Polo shirt",
      amount: "349",
      offer: "15% off",
      link: "polo"

    },
    {
      id: "03",
      img: "https://readymadeui.com/images/product3.webp",
      title: "Hoodie",
      amount: "399",
      offer: "20% off",
      link: "hoodie"

    },
    {
      id: "04",
      img: "https://readymadeui.com/images/product4.webp",
      title: "Sweat shirt",
      amount: "399",
      offer: "5% off",
      link: "sweatshirt"

    },
    {
      id: "05",
      img: "https://readymadeui.com/images/product5.webp",
      title: "Custom Design",
      amount: "299",
      offer: "25% off",
      link: "customdesign"

    },
    {
      id: "06",
      img: "https://readymadeui.com/images/product6.webp",
      title: "Jacket",
      amount: "699",
      offer: "30% off",
      link: "jacket"

    }
  ];

  return (
    <div className="bg-[#d4e9da56]">
      <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 className="text-4xl text-black mb-12 text-center font-mono w-full  p-2 border-green-500 border-2 border-r-[5px] border-b-[5px] border-r-green-500 border-b-green-500">
  Categories...
</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          {categories.map((product) => (
            <Link to={`/product/${product.link}`} key={product.id}>
              <div className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden border-2 border-black p-2 border-r-[5px] border-b-[5px] border-r-green-500 border-b-green-500 hover:border-green-500 transition-all">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-[#00b852] text-white text-xs font-medium px-2 py-1 rounded">
                    {product.offer}
                  </div>

                  <img src={product.img} alt={product.title} className="w-full h-[300px] object-fit" />

                  <div className="absolute bottom-2 left-2 bg-white rounded px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <span className="text-sm font-medium">4.6</span>
                    <span className="text-xs text-gray-500">(444)</span>
                  </div>

                </div>

                <div className="p-4">
                  <h3 className="text-gray-700 font-medium text-sm line-clamp-2">{product.title}</h3>

                  <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm">Starting from</span>
                    <span className="text-lg font-bold">₹{product.amount}</span>
                    <span className="text-[#00b852] text-sm">{product.offer}</span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-black text-white py-2 text-sm font-medium hover:opacity-90 transition-opacity uppercase">
                      View
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
