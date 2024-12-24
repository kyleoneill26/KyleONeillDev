import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Dynamic Stay",
    period: "Contract",
    location: "Austin, TX",
    title: "Software Engineer",
    responsibilities: [
      "Designed and implemented a dynamic web application using Superblocks, integrating multiple REST APIs to aggregate and display real-time data.",
      "Developed a customizable, user-friendly dashboard for visualizing key metrics and enabling seamless data navigation using advanced query parameters and dynamic data binding.",
      "Engineered efficient API workflows for fetching, transforming, and synchronizing data across endpoints, ensuring data integrity and responsive UI updates."
    ]
  },
  {
    company: "Actalent",
    period: "03/2021 - 01/2023",
    location: "Nashville, TN",
    title: "Engineering Account Manager/ Sales",
    responsibilities: [
      "Drove client acquisition with strategic referrals and targeted sales calls, effectively boosting new business.",
      "Consistently exceeded quotas by implementing and executing innovative sales strategies.",
      "Enhanced customer satisfaction and loyalty through dedicated guidance and support.",
      "Provided insightful sales and client prospecting reports to management, focusing on key performance metrics.",
      "Met rigorous weekly and monthly goals, playing a key role in upholding company performance standards."
    ]
  },
  {
    company: "Globe Life",
    period: "05/2020 - 03/2021",
    location: "Nashville TN",
    title: "Sales Rep",
    responsibilities: [
      "Engaged in B2B and B2C sales operations, effectively managing client relationships and sales processes.",
      "Delivered exceptional service by understanding customer needs and offering suitable products.",
      "Successfully managed existing accounts while continuously acquiring new orders.",
      "Organized and conducted daily meetings with potential clients, expanding client base.",
      "Maintained high sales performance in a fast-paced environment, meeting and exceeding set quotas."
    ]
  }
];

const ExperienceSection = () => (
  <motion.div 
    className="resume-section"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2>Experience</h2>
    {experiences.map((exp, index) => (
      <div key={index} className="experience-item">
        <div className="experience-header">
          <h3>{exp.company}</h3>
          <span>{exp.period}</span>
        </div>
        <h4>{exp.title}</h4>
        <ul>
          {exp.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </motion.div>
);

export default ExperienceSection; 