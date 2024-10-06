import React, { useState } from 'react';
import logo from "../../Images/snapprintslogo.png";
import { Input, Space, Drawer,Modal , Dropdown,Button } from 'antd';
import { ShoppingCart, Info, CircleUserRound, AlignRight, X, Search  } from 'lucide-react';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [openSearchModal, setOpenSearchModal] = useState(false);


  

  // Define the list of products
  const products = [
    'T-shirt',
    'Polo shirt',
    'Hoodie',
    'Sweatshirt',
    'Tank Top',
    'Jacket',
  ];

  const toggleSearchModal = () => {
    setOpenSearchModal(prev => !prev)
    console.log(openSearchModal);
    
  }
  const openDrawer = () => {
    setOpenMenu(true);
  };

  const closeDrawer = () => {
    setOpenMenu(false);
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value.trim() === '') {
      setFilteredProducts([]); // If input is empty, clear the filtered list
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

  // Create dropdown menu items for products
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
    <div className="h-[4.5em] w-auto bg-[#E7E8D1] relative">
     <Link to={"/"}> <img
        src={logo}
        className="h-[15em] absolute -top-[5.5em] cursor-pointer"
        alt="Logo"
      /></Link>

      {/* Search bar for desktop */}
      <div className="absolute left-[15em] top-5">
        {/* <Space direction="vertical" size="small">
          <Input
            style={{
              width: 304,
              height: 40,
            }}
            placeholder="Search for products"
            allowClear
            onChange={onChange}
            size="middle"
          />
          {filteredProducts.length > 0 && (
            <div className="bg-white p-2 w-[304px] border border-gray-300 rounded-lg ">
              <ul>
                {filteredProducts.map((product, index) => (
                  <li
                    key={index}
                    className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Space> */}
      {
        !openSearchModal ? (
          <Search onClick={toggleSearchModal}/>

        ) : (
       <Modal
        title={<p>SnapPrints Products</p>}
        footer={null}
        open={openSearchModal}
        onCancel={toggleSearchModal}
      >
         <Input
                placeholder="Search for products"
                allowClear
                onChange={onChange}
              />
              {filteredProducts.length > 0 && (
                <ul className="mt-3">
                  {filteredProducts.map((product, index) => (
                    <li
                      key={index}
                      className="p-2 border-b text-red-600 border-gray-200 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              )}
      </Modal>        
      
    )
      }
      </div>

      {/* Navbar links for desktop */}
      <div className="w-full pr-4 pt-4 flex hidden md:block">
        <ul className="flex gap-[2em] text-[20px] items-center font-sans font-light absolute right-4">
          <li className="flex items-center gap-1">
            <Info />
            Help Center
          </li>
         <Link to={"/forms/signup"}><li className="flex items-center gap-1">
            <CircleUserRound />
            Login/Signup
          </li></Link> 
          <li className="flex items-center gap-1">
            <ShoppingCart />
          </li>
        </ul>
      </div>

      {/* Mobile view Drawer */}
      <div className="absolute right-2 top-5 md:hidden">
        {!openMenu ? (
          <AlignRight className='cursor-pointer' onClick={openDrawer} />
        ) : (
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
            placement="right"
            onClose={closeDrawer}
            open={openMenu}
            closeIcon={<X stroke="black" />}
            bodyStyle={{ backgroundColor: 'white', color: 'black' }}
          >
            <Dropdown
              menu={{
                items: productMenuItems, // Use items key here
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <h2 className='text-xl'>Products</h2>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Drawer>
        )}
      </div>
    </div>
  );
}
