import React from 'react'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { Carousel } from '../components/Carousel'
import Product from '../components/Product'

const Index = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Top Products</h3>
          <span className="text-blue-600 cursor-pointer hover:underline">See All Products</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {/* Repeat the Product component here */}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
    </>
  )
}

export default Index