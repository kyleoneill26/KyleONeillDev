import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="background-layer" />
      <div className="noise" />
      <div className="hero">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Kyle O'Neill
        </motion.h1>
        <motion.h2
          className="glowing-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer | Austin, TX
        </motion.h2>
      </div>

      <motion.div 
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>About Me</h2>
          <p>Experienced in backend software engineering with a strong foundation in Python and Flask. 
             Combining technical expertise with a sales background enables effective communication with 
             clients and stakeholders. Quick learner with adaptability to new technologies and fast-paced environments.</p>
        </div>
      </motion.div>

      <motion.div 
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="skills-grid">
            {[
              'Python', 'Flask', 'JavaScript', 'React', 'Node.js', 'AWS', 'SQL',
              'Angular', 'NextJS', 'Bootstrap', 'Tailwind', 'Linux/Unix'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <SocialLinks />
    </motion.div>
  );
};

export default Home; 