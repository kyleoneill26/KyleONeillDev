import { motion } from 'framer-motion';

const skills = {
  "Programming Languages": "Python (with Flask), JavaScript (including React, Angular, NextJS)",
  "Web Development": "HTML, CSS, Bootstrap, ChakraUI, Tailwind",
  "Database Management": "mySQL, SQLite",
  "Tools & Platforms": "GitHub, UI Design, Microsoft Office Suite, Adobe Creative Suite",
  "Cloud Technologies": "AWS",
  "Operating Systems": "Unix/Linux, MacOS, Windows",
  "Methodologies": "Agile/Scrum"
};

const SkillsSection = () => (
  <motion.div 
    className="resume-section"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <h2>Technical Skills</h2>
    <div className="skills-categories">
      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index} className="skill-category">
          <h4>{category}</h4>
          <p>{skillList}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SkillsSection; 