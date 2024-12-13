import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from "lucide-react";

const Polo = () => {
  const [polos] = useState(Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Polo t-shirt ${index + 1}`,
    image: { src: "https://www.snitch.co.in/cdn/shop/files/4MST2201-04-M31.jpg?v=1699959172", alt: `T-shirt ${index + 1} image` },
    rating: 4.5,
    reviews: 444,
    colors: ["bg-blue-500", "bg-black", "bg-red-500"],
    variants: [
      {
        price: 1000 + (index * 10),
        compare_at_price: 1200 + (index * 10)
      }
    ]
  })));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <div className="bg-[#0b1f113d] p-4 font-mono">
      <h2 className="flex flex-row items-center mt-[5em]">
        <span className="flex-grow border-t border-black"></span>
        <span className="mx-4 px-4 py-2.5 text-xl font-medium bg-black text-green-400 uppercase">
          Polo~by~@Snapprints
        </span>
        <span className="flex-grow border-t border-black"></span>
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8'>
        {polos.map((item, index) => (
          <Link to={`/product/polo/${item.id}`} key={index}>
            <div className='w-[180px] md:w-[300px] bg-white rounded-lg shadow-md border-2 border-black p-4 border-r-[7px] border-b-[7px] hover:border-green-500 transition-all'>
              <div className='relative'>
                <div className='absolute top-2 left-2 bg-[#00b852] text-white text-xs font-medium px-2 py-1 rounded'>
                  {((item.variants[0].compare_at_price - item.variants[0].price) / item.variants[0].compare_at_price * 100).toFixed(2)}% OFF
                </div>
                <img src={item.image.src} alt={item.image.alt} className='w-full h-[200px] md:h-[300px] object-fill' />
                <div className='absolute bottom-2 left-2 bg-white rounded px-2 py-1 flex items-center gap-1'>
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  <span className='text-sm font-medium'>{item.rating}</span>
                  <span className='text-xs text-gray-500'>({item.reviews})</span>
                </div>
              </div>

              <div className='mt-4'>
                <h3 className='text-gray-700 font-medium text-sm line-clamp-2'>{item.title}</h3>
                <div className='mt-2 flex items-center gap-2'>
                  <p className='line-through opacity-70'>₹{item.variants[0].compare_at_price}</p>
                  <p className='font-bold'>₹{item.variants[0].price}</p>
                  <div className='md:px-2 flex gap-0'>

                  {item.colors.map((color, idx) => (
                    <div key={idx} className={`h-4 w-4 md:w-10 md:h-4 rounded-full ${color} border-2 border-white`}></div>
                  ))}
                  </div>

                </div>
                  
                <Link to="/">
                  <div className='mt-4 flex'>
                    <button className='flex-1 bg-black text-white py-2 text-sm font-medium hover:opacity-90 transition-opacity'>
                      ADD TO CART
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Polo;
