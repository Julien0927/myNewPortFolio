import { Link } from "react-router-dom";

export default function Footer () { 
  return (
    <footer className="bg-base  py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-primary dark:text-custom-quinary">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Développeur Fullstack 
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 ">
            <Link to="/" className="hover:text-primary dark:hover:text-quinary transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="hover:text-primary dark:hover:text-quinary transition-colors">
              À propos
            </Link>
            <Link to="/projects" className="hover:text-primary dark:hover:text-quinary transition-colors">
              Projets
            </Link>
            <Link to="/contact" className="hover:text-primary dark:hover:text-quinary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
