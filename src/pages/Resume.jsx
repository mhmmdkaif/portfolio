import React from 'react';

const Resume = () => {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-8 pt-8 pb-4 md:space-x-10">

      {/* Resume Section */}
      <div className="flex flex-col items-center space-y-6 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-[#D4C9BE] mb-2">My Resume</h1>

        {/* General Resume Options */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-semibold text-[#F1EFEC]">General Resume</h2>
          <div className="flex space-x-4">
            <a
              href="https://drive.google.com/file/d/10PjWp6htTCB44rptXzsYGqOY-WcIkAjI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#F1EFEC] text-[#F1EFEC] py-2 px-4 rounded-lg hover:bg-[#D4C9BE] hover:text-black transition-all duration-300 text-center"
            >
              View Resume
            </a>
            <a
              href="general.pdf"
              download
              className="border-2 border-[#F1EFEC] text-[#F1EFEC] py-2 px-4 rounded-lg hover:bg-[#D4C9BE] hover:text-black transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Specialized Resume Options */}
        <div className="flex flex-col space-y-2 mt-6">
          <h2 className="text-2xl font-semibold text-[#F1EFEC]">Specialized Resume</h2>
          <div className="flex space-x-4">
            <a
              href="https://drive.google.com/file/d/1UdLMzGgd_APeOJ0Kb1rk9pcoA6J9PeAw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#F1EFEC] text-[#F1EFEC] py-2 px-4 rounded-lg hover:bg-[#D4C9BE] hover:text-black transition-all duration-300 text-center"
            >
              View Resume
            </a>
            <a
              href="specialized.pdf"
              download
              className="border-2 border-[#F1EFEC] text-[#F1EFEC] py-2 px-4 rounded-lg hover:bg-[#D4C9BE] hover:text-black transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-500 h-40"></div>

      {/* About Me Section */}
      <div className="flex flex-col items-center text-center w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-3xl font-bold text-[#D4C9BE] mb-2">About Me</h1>
        <p className="text-[#F1EFEC] max-w-md text-base leading-relaxed">
        I am a passionate Full Stack Developer currently pursuing my B.Tech at Lovely Professional University, specializing in Full Stack Development. With strong programming skills in C++ and Java, I have built a solid foundation in both software development and backend logic.
My technical expertise includes working with modern web technologies like React, Node.js, Express.js, MySQL, and MongoDB. I enjoy building complete, scalable web applications from scratch and constantly strive to improve my skills.
As a 3rd-year student, I am focused on developing impactful projects, enhancing my problem-solving abilities through DSA, and preparing myself to contribute meaningfully to the tech industry.
        </p>
      </div>

    </div>
  );
};

export default Resume;
