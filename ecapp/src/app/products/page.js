'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../componets/card';
import SearchBar from '../componets/searchBar';
import Cart from '../componets/cart';
import Footer from '../componets/footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://teqnake.nyc.dom.my.id/wp-json/wp/v2/products?acf_format=standard');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems(prevCartItems => [...prevCartItems, product]);
    }
  };

  return (
    <div>
  
      <SearchBar onSearch={handleSearch} />
      <h1 className="text-3xl font-bold text-center mb-6">Productos</h1>
      <main className="container mx-auto px-4 mt-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            imageUrl={product.acf.thumbnail}
            title={product.title.rendered}
            price={product.acf.price}
            category={product.acf.category.name} // Agregando la categoría como prop
            onOrder={() => addToCart(product)}
          />
        ))}
        </div>
        </main>
    
      <div className="mt-8">
        <Cart cartItems={cartItems} />
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
