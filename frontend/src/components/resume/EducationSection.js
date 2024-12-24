import { motion } from 'framer-motion';

const education = [
  {
    school: "Flatiron School",
    period: "01/2023 - 05/2023",
    location: "New York, NY",
    degree: "Full Stack Web Development, Python with Flask and JavaScript program"
  },
  {
    school: "Clemson University",
    period: "05/2016-08/2020",
    location: "Clemson, SC",
    degree: "BA Business Management"
  }
];

const EducationSection = () => (
  <motion.div 
    className="resume-section"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h2>Education</h2>
    {education.map((edu, index) => (
      <div key={index} className="education-item">
        <div className="education-header">
          <h3>{edu.school}</h3>
          <span>{edu.period}</span>
        </div>
        <p>{edu.degree}</p>
      </div>
    ))}
  </motion.div>
);

export default EducationSection; 