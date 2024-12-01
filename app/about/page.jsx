import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Joehanes Lauglaug',
      role: 'Team Leader',
      img: 'https://via.placeholder.com/150',
      bio: 'Joehanes is the visionary leader of the Black Mavericks. With years of experience in programming, he ensures every project runs smoothly and efficiently.',
    },
    {
      name: 'John Paul Mahilom',
      role: 'Creative Director',
      img: 'about_assets/jpjp.png',
      bio: 'John Paul brings creativity to the team, designing innovative campaigns that capture the essence of Moalboal’s beauty.',
    },
    {
      name: 'Ian Jhon Dosdos',
      role: 'Layout Designer',
      img: 'https://via.placeholder.com/150',
      bio: 'Ian Jhon is responsible for designing the layout and user interface of the website, ensuring a seamless and visually appealing experience for visitors.',
    },
    {
      name: 'Raymund Abella',
      role: 'Local Expert',
      img: 'https://via.placeholder.com/150',
      bio: 'Raymund, as a local expert, shares his extensive knowledge about Moalboal’s culture, landmarks, and hidden gems to provide an authentic experience for tourists.',
    },
    {
      name: 'Roberto Vender',
      role: 'Research Specialist',
      img: 'https://via.placeholder.com/150',
      bio: 'Roberto focuses on gathering data, researching trends, and ensuring that the information provided about Moalboal is accurate and up-to-date.',
    },
  ];
  

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-t from-gray-600 to-gray-700 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are a team of dedicated technologist students, passionate about showcasing the breathtaking beauty of Moalboal. Join us as we unveil the hidden treasures of this tropical paradise.
          </p>
        </div>
      </div>

      {/* About the Black Mavericks */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Black Mavericks</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Dedicated to promoting Moalboal as a must-visit destination, we are a group of five mavericks specializing in creative storytelling, research, and layouts.
          </p>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gray-700 hover:text-gray-100">
                <img src={member.img} alt={member.name} className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-solid border-2 border-white" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className=" font-semibold">{member.role}</p>
                <p className=" mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-white text-center">
        <p>&copy; 2024 Black Mavericks. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
