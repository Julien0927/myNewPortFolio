import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      skills: ["React", "JavaScript", "Bootstrap", "Tailwind CSS", "SASS/SCSS"]
    },
    {
      id: "backend",
      name: "Backend",
      skills: ["PHP", "MySql"]
    },
    {
      id: "tools",
      name: "Outils",
      skills: ["Git", "Figma"]
    },
    {
      id: "other",
      name: "Autres",
      skills: ["UX/UI Design", "Agile/Scrum", "Accessibilité"]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const handleTabChange = (e) => {
    setSelectedCategory(e.target.id);
  };

  const selectedCategoryData = skillCategories.find(cat => cat.id === selectedCategory);
  const selectedSkills = selectedCategoryData ? selectedCategoryData.skills : [];

  return (
    <Layout 
      title="À propos" 
      description="Je suis un développeur fullstack passionné par la création d'applications web modernes et performantes.
      J'aime résoudre des problèmes complexes et transformer des idées en produits digitaux qui apportent 
      une réelle valeur. Mon approche est centrée sur l'utilisateur, avec un souci constant pour la performance, 
      l'accessibilité et l'expérience globale."
    >
      <h2 className="text-primary text-center text-2xl font-bold mb-8" style={{ fontFamily: 'Montserrat' }}>
        Mes Technologies
      </h2>

      {/* Tabs Header */}
      <div className="flex flex-wrap justify-center gap-4 mb-4 mt-3">
        {skillCategories.map(category => (
          <button
            key={category.id}
            onClick={handleTabChange}
            id={category.id}
            className={`px-4 py-2 rounded-lg font-semibold hover:scale-110 transition-transform ease-in-out duration-500
            ${selectedCategory === category.id
              ? "bg-secondary text-primary dark:bg-custom-tertiary"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white"
            }`}
            aria-selected={selectedCategory === category.id}
            style={{ fontFamily: 'Poppins' }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="animate-fadeIn">
        {skillCategories.map(category => (
          selectedCategory === category.id && (
            <div 
              key={category.id}
              className="bg-base rounded-xl shadow-md p-6 md:p-8 text-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary" style={{ fontFamily: 'Montserrat' }}>
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-3" style={{ fontFamily: 'Poppins' }}>
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="bg-secondary text-primary px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Call-to-action */}
      <div className="mx-auto mt-4 bg-secondary max-w-xl rounded-xl p-6 md:p-8 text-center">
        <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">
          Une idée de projet en tête ?
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-200" style={{ fontFamily: 'Poppins' }}>
          Je suis toujours à la recherche de nouveaux défis et collaborations passionnantes.
        </p>
        <Link
          to="/contact" 
          className="bg-primary inline-block px-6 py-3 rounded-lg text-white" 
          style={{ fontFamily: 'Poppins' }}
        >
          Travaillons ensemble
        </Link>
      </div>
    </Layout>
  );
}
