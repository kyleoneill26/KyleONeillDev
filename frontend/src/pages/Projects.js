import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const Projects = () => {
  const projects = [
    {
      title: "Music Application",
      description: "Built an app that replicates Spotify using an API allowing users to access their music",
      icon: "🎵",
      link: "https://github.com/yourusername/music-app"
    },
    {
      title: "Sports Application",
      description: "Real-time sports stats platform with comprehensive data",
      icon: "⚽",
      link: "https://github.com/yourusername/sports-app"
    },
    // Add more projects as needed
  ];

  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Projects
        </motion.h1>
        
        <motion.p
          className="projects-intro"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I love to create things, and I'm always working on something new! You can view some of my favorite projects below.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
      <SocialLinks />
    </motion.div>
  );
};

export default Projects; 