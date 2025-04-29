import { motion } from "framer-motion";

const AnimatedName = () => {
  // Animation pour les lettres du nom
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9] // Courbe d'easing élégante
      },
    }),
  };

  // Animation pour le titre
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        delay: 2.0, // Commence après l'animation du nom
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Séparation des lettres du nom pour l'animation
  const nameLetters = "Julien Varachas".split("");

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mt-5 overflow-hidden" style={{fontFamily: 'Montserrat'}}>
        {nameLetters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={nameVariants}
            className="inline-block"
            style={{ 
              display: 'inline-block', 
              whiteSpace: 'pre', // Préserve les espaces
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      
      <motion.p
        className="text-2xl mt-2 font-medium text-primary dark:text-quinary"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        Développeur Full-Stack
      </motion.p>
    </div>
  );
};

export default AnimatedName;