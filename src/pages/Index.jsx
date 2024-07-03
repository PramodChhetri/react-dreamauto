import React from 'react';
import { Navbar } from '../components/Navbar';
import { Carousel } from '../components/Carousel';
import Part from '../components/TopPart';
import Footer from '../components/Footer';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeTeam from '../components/HomeTeam';
import HomeContact from '../components/HomeContact';

const Index = () => {
  const TopParts = [
    {
      id: 1,
      part_name: 'Brake 1',
      part_number: '15151a151',
      part_image: 'https://via.placeholder.com/150',
      part_price: 'Rs. 150',
    },
    {
      id: 2,
      part_name: 'Brake 1',
      part_number: '15151a151',
      part_image: 'https://via.placeholder.com/150',
      part_price: 'Rs. 150',
    },
    {
      id: 3,
      part_name: 'Brake 1',
      part_number: '15151a151',
      part_image: 'https://via.placeholder.com/150',
      part_price: 'Rs. 150',
    },
    {
      id: 4,
      part_name: 'Brake 1',
      part_number: '15151a151',
      part_image: 'https://via.placeholder.com/150',
      part_price: 'Rs. 150',
    },
    {
      id: 5,
      part_name: 'Brake 1',
      part_number: '15151a151',
      part_image: 'https://via.placeholder.com/150',
      part_price: 'Rs. 150',
    },
    {
      id: 6,
      part_name: 'Brake 1',
      part_number: '15151a151',
      part_image: 'https://via.placeholder.com/150',
      part_price: 'Rs. 150',
    },
  ];

  return (
    <div className='bg-gray-100 font-poppins'>
      <Navbar />
      <Carousel />
      <HomeAboutUs />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Top Parts</h3>
            <span className="text-[#DF133A] hover:text-red-800 hover:scale-105 cursor-pointer hover:underline">
              See All Parts
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {TopParts.map((part, id) => (
              <Part
                key={id}
                part_id={part.id}
                part_name={part.part_name}
                part_number={part.part_number}
                part_image={part.part_image}
                part_price={part.part_price}
              />
            ))}
          </div>
        </div>
      </section>
      <HomeTeam />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Index;
