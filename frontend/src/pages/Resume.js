import { motion } from 'framer-motion';
import ExperienceSection from '../components/resume/ExperienceSection';
import ProjectsSection from '../components/resume/ProjectsSection';
import EducationSection from '../components/resume/EducationSection';
import SkillsSection from '../components/resume/SkillsSection';
import SocialLinks from '../components/SocialLinks';

const Resume = () => {
  return (
    <motion.div 
      className="resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
      </div>
      <SocialLinks/>     
    </motion.div>
    
  );
};

export default Resume; 