import React, { useState } from 'react';
import logo from "../../Images/snapprintslogo.png";
import { Input, Space, Drawer, Dropdown } from 'antd';
import { ShoppingCart, Search, AlignRight, X } from 'lucide-react';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const products = ['T-shirt', 'Polo shirt', 'Hoodie', 'Sweatshirt', 'Tank Top', 'Jacket'];

  const toggleSearchModal = () => {
    setOpenSearchModal(prev => !prev);
  };

  const openDrawer = () => {
    setOpenMenu(true);
  };

  const closeDrawer = () => {
    setOpenMenu(false);
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value.trim() === '') {
      setFilteredProducts([]); // Clear the filtered list
      return;
    }

    const filtered = products.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    console.log(`Selected Product: ${product}`);
    setFilteredProducts([]); // Close dropdown after selection
  };

  const productMenuItems = filteredProducts.length > 0
    ? filteredProducts.map((product, index) => ({
        key: index,
        label: (
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            {product}
          </div>
        ),
      }))
    : products.map((product, index) => ({
        key: index,
        label: (
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            {product}
          </div>
        ),
      }));

  return (
    <div className="h-[4.5em] w-auto bg-[#ffffff] relative border-b border-inherit">
      <Link to={"/"}>
        <img
          src={logo}
          className="h-[15em] absolute -top-[5.5em] cursor-pointer"
          alt="Logo"
        />
      </Link>

      {/* Search bar for desktop */}
      <div className="absolute left-[15em] top-3">
        <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-2 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full text-sm bg-transparent rounded outline-none pr-2"
          />
          <Search />
        </div>
      </div>

      {/* Navbar links for desktop */}
      <div className="w-full pr-4 pt-4 flex hidden md:block">
        <ul className="flex gap-[2em] text-[20px] items-center font-sans font-light absolute right-4">
          {/* Replace Login/Signup with new buttons */}
          <li className="flex items-center gap-6">
            <button className="font-semibold text-[15px] border-none outline-none">
              <Link to={"/forms/signin"} className="text-[#007bff] hover:underline">
                Login
              </Link>
            </button>
            <Link to={"/forms/signup"}>
              <button className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                Sign up
              </button>
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ShoppingCart />
          </li>
        </ul>
      </div>

      {/* Mobile view Drawer */}
      <div className="absolute left-1 top-5 md:hidden">
        {!openMenu ? (
          <AlignRight className="cursor-pointer" onClick={openDrawer} />
        ) : (
          <>
            <Drawer
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      color: "black",
                      fontSize: "25px",
                      letterSpacing: "2px",
                      textAlign: "left",
                    }}
                  >
                    SnapPrints...
                  </span>
                </div>
              }
              footer={
                <div className="mt-2 py-4">
                <ul className='border-1  border-emerald-400'>
                  <li className='flex flex-col gap-4'>
                    <button className="font-semibold text-[15px] border-none outline-none w-full">
                      <Link to={"/forms/signin"} className="text-[#007bff] hover:underline">
                        Login
                      </Link>
                    </button>
                    <Link to={"/forms/signup"}>
                      <button className="w-full px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                        Sign up
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              }
              placement="left"
              onClose={closeDrawer}
              open={openMenu}
              closeIcon={<X stroke="black" />}
              bodyStyle={{ backgroundColor: "white", color: "black" }}
            >
              <Dropdown
                menu={{
                  items: productMenuItems, // Use items key here
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <h2 className="text-xl">Products</h2>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

              {/* Mobile view login/signup */}
              
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
}
