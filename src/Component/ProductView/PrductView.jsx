import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ProductView() {
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  ];

  const { category, id } = useParams();

  const description =
    "Experience premium sound quality with our wireless headphones. Perfect for music lovers and professionals who demand the best audio experience.";

  const handleBuyNow = () => {
    const productDetails = {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      description: description,
    };
    console.log("Buy Now clicked:", productDetails);
  };

  const handleAddToCart = () => {
    const productDetails = {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      description: description,
    };
    console.log("Add to Cart clicked:", productDetails);
  };

  return (
    <>
      <div className="bg-gray-100 my-[6em] border-2 border-gray-600 rounded-lg m-6">
        <div className="mx-auto px-4 py-8">
          <p className="font-medium text-lg text-indigo-600 my-4 capitalize">
            Product &nbsp; / &nbsp; {category}
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {thumbnails.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => setMainImage(src)}
                  />
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">
                Premium Wireless Headphones {id}
              </h2>
              <p className="text-gray-600 mb-6">{description}</p>

              <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                Size
              </p>
              <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border ${
                        selectedSize === size ? "border-black" : "border-gray-200"
                      } flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                Color
              </p>
              <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6 ">
                {["black", "white", "gray"].map((color) => (
                  <button
                    key={color}
                    className={`p-2.5 border ${
                      selectedColor === color ? "border-black" : "border-gray-200"
                    } rounded-full transition-all duration-300 hover:border-black`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        fill={color}
                      />
                    </svg>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-center w-full">
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(prev - 1, 1))
                    }
                    className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 text-center"
                  />
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleBuyNow}
                  className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="text-center w-full px-5 py-4 rounded-[100px] bg-gray-300 flex items-center justify-center font-semibold text-lg text-gray-800 shadow-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
