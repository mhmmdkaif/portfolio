import React from 'react';
import { motion } from 'framer-motion';

// Define your certifications with logos and other info
const certifications = [
  {
    title: 'Server-side JavaScript with Node.js',
    institution: 'Coursera',
    date: 'Apr 2024',
    link: 'https://drive.google.com/file/d/1LuvrOGlxuC6VediQ9nBTnTQSs0UXQltJ/view?usp=drive_link',
    logo: '/logos/coursera.png',
  },
  {
    title: 'HTML, CSS, and JavaScript for Web Developers',
    institution: 'Coursera',
    date: 'Apr 2024',
    link: 'https://drive.google.com/file/d/1Idvo28j99uLgc4zt9I7LJPlABYDRuOud/view?usp=drive_link',
    logo: '/logos/coursera.png',
  },
  {
    title: 'Software Engineering: Implementation and Testing',
    institution: 'Coursera',
    date: 'Mar 2024',
    link: 'https://coursera.org/verify/U55QEZSJFHUU',
    logo: '/logos/coursera.png',
  },
  {
    title: 'Cloud Computing',
    institution: 'NPTEL',
    date: 'Jul-Oct 2024',
    link: '#',
    logo: '/logos/nptel.png',
  },
  {
    title: 'Fundamentals of Data Structures using C++',
    institution: 'Lovely Professional University',
    date: 'May-Nov 2024',
    link: 'https://drive.google.com/file/d/1QYpwjFjdhDsp0btH-U3CMjU8d0kD0ofX/view?usp=drive_link',
    logo: '/logos/lpu.png',
  },
  {
    title: 'Programming in C++: A Hands-on Introduction',
    institution: 'Coursera',
    date: 'Dec 2023',
    link: 'https://drive.google.com/file/d/1GF9xnhGcy2ttoF_piT1cEW2pXjm6sOwL/view?usp=drive_link',
    logo: '/logos/coursera.png',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    institution: 'Coursera',
    date: 'Nov 2023',
    link: 'https://coursera.org/verify/HVSDNQTBFZ6Q',
    logo: '/logos/coursera.png',
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    institution: 'Coursera',
    date: 'Nov 2023',
    link: 'https://coursera.org/verify/ZQFKHRV249WY',
    logo: '/logos/coursera.png',
  },
  {
    title: 'Static Routing Configuration Using Packet Tracer',
    institution: 'Coursera',
    date: 'Nov 2023',
    link: 'https://coursera.org/verify/ZBELB4E3QCJ5',
    logo: '/logos/coursera.png',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    institution: 'Udemy',
    date: 'Nov 2023',
    link: 'https://drive.google.com/file/d/1x6XvpzUUaTNHuEzs8v6EZH51yfhh0B89/view?usp=drive_link',
    logo: '/logos/udemy.png',
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#D4C9BE]">My Certifications</h2>
        <p className="mt-4 text-lg text-[#F1EFEC]">A collection of my completed certifications</p>
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-[#1C1C1C] p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }} // Start off slightly below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move to the original position
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
            transition={{
              delay: index * 0.1, // Stagger the animation with a small delay
              duration: 0.8, // Duration for the animation
              ease: "easeInOut", // Smooth easing
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl text-[#F1EFEC]">{cert.date}</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <img
                src={cert.logo}
                alt={cert.institution}
                className="w-12 h-12 object-contain mr-4"
              />
              <h3 className="text-xl font-semibold text-[#F1EFEC]">{cert.title}</h3>
            </div>
            <p className="mt-2 text-sm text-[#D4C9BE]">{cert.institution}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#123458] font-semibold hover:text-[#D4C9BE] transition-all"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
