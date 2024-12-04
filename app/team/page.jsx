import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Joehanes Lauglaug',
      role: 'Project Manager',
      img: 'about_assets/profile_joe.png',
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
      img: 'about_assets/profile_ian.png',
      bio: 'Ian Jhon is responsible for designing the layout and user interface of the website, ensuring a seamless and visually appealing experience for visitors.',
    },
    {
      name: 'Raymund Abella',
      role: 'Integration Analyst',
      img: 'about_assets/chuychuy.jpg',
      bio: 'Raymund, as an experienced integration specialist, excels at workflows by leveraging APIs and automation tools, ensuring seamless flow and operational efficiency.',
    },
    {
      name: 'Roberto Vender',
      role: 'Research Specialist',
      img: 'about_assets/robert.png',
      bio: 'Roberto focuses on gathering data, researching trends, and ensuring that the information provided about Moalboal is accurate and up-to-date.',
    },
  ];
  

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-t from-gray-600 to-gray-700 text-white py-24 text-center bg-cover bg-center" style={{ backgroundImage: "url('about_assets/background_school.svg')" }}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Our Team</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are a team of dedicated technologist students, passionate about showcasing the breathtaking beauty of Moalboal. Join us as we unveil the hidden treasures of this tropical paradise.
          </p>
        </div>
      </div>
      <div>
        
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
                <p className=" mt-4 text-md">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src="about_assets/school_img.svg" 
            alt="School"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Text and Logo */}
        <div className="md:w-1/2 p-6 md:p-10">
          <div className="flex items-center mb-4">
            <img
              src="about_assets/ctulogoicon.png" 
              alt="School Logo"
              className="w-16 h-16 object-contain mr-4"
            />
            <h2 className="text-2xl font-bold text-white">
              CEBU TECHNOLOGICAL UNIVERSITY - <i>MAIN</i>
            </h2>
          </div>
          <p className="text-white text-md leading-relaxed">
            CTU-Main is a premier institution dedicated to fostering
            innovation, creativity, and excellence. Our students are inspired
            to apply their skills to showcase the beauty of Moalboal and beyond.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Team;
