import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  { name: 'C++', logo: '/logos/c++.png', link: 'https://www.cplusplus.com/' },
  { name: 'C', logo: '/logos/c.png', link: 'https://www.gnu.org/software/c/' },
  { name: 'Python', logo: '/logos/python.png', link: 'https://www.python.org/' },
  { name: 'Java', logo: '/logos/java.png', link: 'https://www.java.com/' },
  { name: 'JavaScript', logo: '/logos/javascript.png', link: 'https://www.javascript.com/' },
  { name: 'PHP', logo: '/logos/php.png', link: 'https://www.php.net/' },
];

const frameworks = [
  { name: 'React', logo: '/logos/react.png', link: 'https://reactjs.org/' },
  { name: 'Node.js', logo: '/logos/nodejs.png', link: 'https://nodejs.org/' },
  { name: 'Angular', logo: '/logos/angular.png', link: 'https://angular.io/' },
  { name: 'Laravel', logo: '/logos/laravel.png', link: 'https://laravel.com/' },
  { name: 'Bootstrap', logo: '/logos/bootstrap.png', link: 'https://getbootstrap.com/' },
  { name: 'Tailwind', logo: '/logos/tailwind.png', link: 'https://tailwindcss.com/' },
];

const tools = [
  { name: 'Git', logo: '/logos/git.png', link: 'https://git-scm.com/' },
  { name: 'VS Code', logo: '/logos/vscode.png', link: 'https://code.visualstudio.com/' },
  { name: 'AWS', logo: '/logos/aws.png', link: 'https://aws.amazon.com/' },
  { name: 'Postman', logo: '/logos/postman.png', link: 'https://www.postman.com/' },
  { name: 'MongoDB', logo: '/logos/mongodb.png', link: 'https://www.mongodb.com/' },
  { name: 'PHPMyAdmin', logo: '/logos/phpmyadmin.png', link: 'https://www.phpmyadmin.net/' },
  { name: 'MySQL', logo: '/logos/mysql.png', link: 'https://www.mysql.com/' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.png', link: 'https://www.postgresql.org/' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      {/* Languages Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-[#D4C9BE] mb-6">Languages</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {languages.map((lang) => (
            <a
              href={lang.link}
              target="_blank"
              rel="noopener noreferrer"
              key={lang.name}
              className="text-center"
            >
              <motion.img
                src={lang.logo}
                alt={lang.name}
                className="w-20 h-20 mx-auto transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-[#F1EFEC] text-sm mt-2">{lang.name}</p>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Frameworks Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-[#D4C9BE] mb-6 mt-16">Frameworks</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {frameworks.map((framework) => (
            <a
              href={framework.link}
              target="_blank"
              rel="noopener noreferrer"
              key={framework.name}
              className="text-center"
            >
              <motion.img
                src={framework.logo}
                alt={framework.name}
                className="w-20 h-20 mx-auto transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-[#F1EFEC] text-sm mt-2">{framework.name}</p>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-[#D4C9BE] mb-6 mt-16">Tools</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool) => (
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              key={tool.name}
              className="text-center"
            >
              <motion.img
                src={tool.logo}
                alt={tool.name}
                className="w-20 h-20 mx-auto transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-[#F1EFEC] text-sm mt-2">{tool.name}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
