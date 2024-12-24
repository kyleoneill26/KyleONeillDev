import { motion } from 'framer-motion';

const SocialLinks = () => {
  const links = [
    { icon: "github", url: "https://github.com/yourusername" },
    { icon: "linkedin", url: "https://linkedin.com/in/yourusername" },
    { icon: "instagram", url: "https://instagram.com/yourusername" },
    { icon: "goodreads", url: "https://goodreads.com/yourusername" },
    { icon: "dev", url: "https://dev.to/yourusername" }
  ];

  return (
    <motion.div 
      className="social-links"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {links.map((link, index) => (
        <motion.a
          key={link.icon}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <i className={`fab fa-${link.icon}`}></i>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks; 