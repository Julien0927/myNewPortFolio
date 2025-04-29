import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%"; // Important pour éviter le glissement horizontal
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }  
  }, [isMenuOpen]);

  useEffect(() => {
    // Récupère l'état du mode sombre depuis localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode)); // Met à jour l'état selon la valeur sauvegardée
    }

    // Applique le mode sombre en utilisant data-theme au lieu de la classe dark
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode)); // Sauvegarde l'état dans localStorage
  };
  
  const navLinks = [
    {path: "/", label: "Accueil", icon: "/icones/accueil-24.png" },
    {path: "/about", label: "À propos", icon: "/icones/homme-24.png" },
    {path: "/projects", label: "Projets", icon: "/icones/code-24.png" },
    {path: "/contact", label: "Contact", icon: "/icones/message-24.png" },
  ];
  const location = useLocation();
  return (
    <>
      <div className="navbar bg-base shadow-sm">
        <div className="navbar-start">
          <img className="size-6 me-2" src="/icones/code-48.png" alt="ghibli" />
          <span className="text-primary font-bold text-xl">Julien</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-xl menu-horizontal px-1 gap-4">
            {navLinks.map(({path, label, icon }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link 
                    to={path} className={`hover:bg-secondary hover:text-primary rounded-3xl px-5 
                      ${isActive ? 'bg-secondary text-primary' : ''}`}>
                    <img src={icon} alt="" className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input 
              type="checkbox" 
              className="theme-controller" 
              value="dark" 
              checked={isDarkMode}
              onChange={handleDarkModeToggle} 
            />

            {/* sun icon */}
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-7 w-7 fill-current me-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <label className="btn btn-circle swap swap-rotate bg-white border-0 w-12 h-12 lg:hidden">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={toggleMenu} checked={isMenuOpen}/>

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-tertiary shadow-md absolute top-[64px] left-0 w-full h-full z-50"
          >
            <ul className="flex flex-col items-center py-4 text-lg">
              {navLinks.map(({ path, label, icon }) => (
                <li key={path} className="w-full text-center my-2">
                  <Link
                    to={path}
                    className="flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary px-4 py-2"
                    onClick={() => setIsMenuOpen(false)} // Pour fermer le menu après clic
                  >
                    <img src={icon} alt="" className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}