import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-gray-600 to-gray-700 text-white py-24 text-center bg-cover bg-center" style={{ backgroundImage: "url('contact_assets/contact_usbg2.png')" }}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Reach out with your questions, feedback, or inquiries.
          </p>
        </div>
      </section>

      <div className="max-w-8xl mx-auto 2xl:max-w-7xl bg-white shadow-lg rounded-lg p-6">
      {/* Contact Section */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to us through any of the methods below. We’re here to help!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img
                  src="contact_assets/phone_icon.svg"
                  alt="Phone"
                  className="w-6 h-6 mr-4"
                />
                <span className="text-gray-800 font-medium">+63 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <img
                  src="contact_assets/email_icon.svg"
                  alt="Email"
                  className="w-6 h-6 mr-4"
                />
                <span className="text-gray-800 font-medium">info@moalboal.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded-lg font-bold hover:bg-gray-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ContactUs;
