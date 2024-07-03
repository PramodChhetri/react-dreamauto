import React from 'react';

const HomeContact = () => {
  return (
    <section id="contact" className="py-16 ">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
            {/* Map */}
            <div className="p-8 bg-white  rounded-lg">
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Address</h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Phone</h3>
                <p className="text-gray-600">Toll Free: 9801571571</p>
              </div>
              <iframe
                className="w-full h-96 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.987365031436!2d85.32396031506161!3d27.71724593211474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e81992ff1%3A0x4355291e5b22c94f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1602872043673!5m2!1sen!2snp"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Map"
              ></iframe>
            </div>

            {/* Contact Info & Form */}
            <div className="p-8 bg-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="vehicle_model" className="block text-sm font-medium text-gray-700">Vehicle Model</label>
                  <input type="text" id="vehicle_model" name="vehicle_model" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="vehicle_number" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
                  <input type="text" id="vehicle_number" name="vehicle_number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <div className="text-right">
                  <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
