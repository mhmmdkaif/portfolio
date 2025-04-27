import React from 'react';

const projects = [
  {
    name: 'SpotX - Shoe Store',
    description:
      'SpotX is an online shoe store designed to offer a seamless shopping experience. Built with modern web technologies, it offers responsive design and smooth animations.',
    techStack: 'ReactJS, Tailwind CSS, Locomotive, Framer-motion, GSAP',
    link: 'https://spotx-zeta.vercel.app/',
    imageUrl: '/logos/spotx.png',
  },
  {
    name: 'LinkeR - YouTube Watchlist',
    description:
      'LinkeR helps users organize YouTube videos by allowing them to easily create a personalized watchlist. Just add a URL and a title, and LinkeR does the rest.',
    techStack: 'ReactJS, Tailwind CSS, Locomotive, Framer-motion, GSAP',
    link: 'https://linke-r.vercel.app/',
    imageUrl: '/logos/linker.png',
  },
  {
    name: 'Clio - Note Taking App',
    description:
      'Clio is a powerful note-taking app designed to keep your notes organized and easily accessible. Built with ReactJS and a backend powered by Node.js and Express.js.',
    techStack: 'ReactJS, Tailwind CSS, Locomotive, Framer-motion, GSAP, Node.js, Express.js',
    link: 'https://cliobackend.web.app/',
    imageUrl: '/logos/clio.png',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-[#D4C9BE] mb-6 text-center">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}>
            <div className="w-full md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:outline hover:outline-4 hover:outline-[#D4C9BE]"
              />
            </div>
            <div className="w-full md:w-1/2 pl-8">
              <h3 className="text-2xl font-bold text-[#D4C9BE]">{project.name}</h3>
              <p className="text-[#F1EFEC] mt-2">{project.description}</p>
              <p className="text-[#F1EFEC] mt-2 font-semibold">Tech Stack: {project.techStack}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4C9BE] mt-4 inline-block text-lg font-semibold hover:text-[#F1EFEC] transition-colors"
              >
                View Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
