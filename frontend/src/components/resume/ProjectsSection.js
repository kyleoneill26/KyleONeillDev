import { motion } from 'framer-motion';

const projects = [
  {
    name: "Music Application",
    details: [
      "Built an app that replicates Spotify using an API allowing users to access their music, see artists albums and playlists and also create new playlists.",
      "Made with ReactJS, Python (Flask), Bootstrap, Material UI, and traditional CSS."
    ]
  },
  {
    name: "Sports Application",
    details: [
      "Designed and developed a real-time sports stats platform leveraging Python, JavaScript, and SQL to aggregate and display comprehensive data for teams, players, games, and sports news, emulating ESPN functionality.",
      "Implemented advanced web scraping techniques using libraries like BeautifulSoup and Selenium to extract up-to-date sports data from multiple online sources."
    ]
  }
];

const ProjectsSection = () => (
  <motion.div 
    className="resume-section"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="experience-item">
        <div className="experience-header">
          <h3>{project.name}</h3>
        </div>
        <ul>
          {project.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </motion.div>
);

export default ProjectsSection; 