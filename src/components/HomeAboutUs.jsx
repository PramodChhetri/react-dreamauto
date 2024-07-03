import React from 'react';
import { RiCheckDoubleFill } from "react-icons/ri";

const HomeAboutUs = () => {
  return (
    <section className='bg-white' >
      <div className="container mx-auto px-4 py-12">
        <div className="text-start">
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>

        <div className="flex flex-col lg:flex-row mt-8">
          <div className="lg:w-1/2">
            <ul className="list-none p-0">
              <li className="flex items-center mb-4">
                <RiCheckDoubleFill/>
                <span className="ml-2">Authorized Suzuki Service Center</span>
              </li>
              <li className="flex items-center mb-4">
              <RiCheckDoubleFill/>
                <span className="ml-2">Expert Technicians and Advanced Techniques</span>
              </li>
              <li className="flex items-center mb-4">
              <RiCheckDoubleFill/>
                <span className="ml-2">Comprehensive Services and Customer Satisfaction</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 pt-4 lg:pt-0">
            <p className="text-gray-700">
              Welcome to Dream Auto Pvt. Ltd., your premier destination for top-quality car and jeep maintenance and repair services. As an authorized service center by Suzuki, we specialize in denting, painting, mechanical repairs, and comprehensive vehicle inspections, ensuring that your vehicle looks its best and runs smoothly. Founded with a passion for automobiles and a commitment to excellence, we have built a reputation for reliability and professionalism over the years. Our experienced team of technicians treats every vehicle with the utmost care, using the latest techniques and high-quality materials to deliver exceptional results.
            </p>
            <a href="/" className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-600 hover:text-gray-100">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
