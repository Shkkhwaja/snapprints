import React from 'react'
import { Link } from 'react-router-dom';

export default function Homepage() {


    const categories = [
        {
            id: "01",
            img: "https://readymadeui.com/images/product1.webp",
            title: "T-shirt",
            amount: "299",
            link: "/product/1"
        },
        {
            id: "02",
            img: "https://readymadeui.com/images/product2.webp",
            title: "Polo shirt",
            amount: "349",
            link: "/product/1"
        },
        {
            id: "03",
            img: "https://readymadeui.com/images/product3.webp",
            title: "Hoodie",
            amount: "399",
            link: "/product/1"
        },
        {
            id: "04",
            img: "https://readymadeui.com/images/product4.webp",
            title: "Sweatshirt",
            amount: "399",
            link: "/product/1"
        },
        {
            id: "05",
            img: "https://readymadeui.com/images/product5.webp",
            title: "Tank Top",
            amount: "299",
            link: "/product/1"
            
        },
        {
            id: "06",
            img: "https://readymadeui.com/images/product6.webp",
            title: "Jacket",
            amount: "699",
            link: "/product/1"
        }
    ]


  return (
    <div className='bg-[#d4e9da56]'>

    <div class="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Categories...</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            categories.map((product, index) => (
        <Link to={product.link}><div key={index} class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src={product.img} alt={product.id}
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-xl text-center font-bold text-gray-800">{product.title}</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-sm font-bold text-gray-800">Starting From ~ <span className='text-black underline -tracking-tight'>₹{product.amount}</span></h4>
            </div>
          </div>
        </div>
        </Link>
            ))
        }
        
      </div>
    </div>
    </div>
  )
}
