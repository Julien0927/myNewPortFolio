import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Projects() {
    return (
    <Layout 
        title="Projets" 
        description ="Voici quelques projets que j'ai pu réaliser afin de montrer mes compétences..."
    >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <Card 
                title="Semi-marathon de La Rochelle "
                description=
                "Premier projet, le site du semi-marathon de La Rochelle. Ce dernier présente l'épreuve ainsi que toutes les informations nécessaires à la participation. Vous pouvez également voir les palmarès ainsi que les photos des années précédentes."
                image="/img/semi.png"
                techno={["HTML", "PHP", "CSS"]}
                link={"https://semimarathonlarochelle.fr/"}
            />
            <Card 
                title="Mamma Mia"
                description="Réalisation d'un site vitrine pour une brasserie italienne situé aux alentours de La Rochelle (17). Cet établissement propose des afterworks, séminaires, soirées à thèmes et privatisation.  "
                image="/img/mammamia.png"
                techno={["HTML", "JavaScript", "CSS"]}
                link={"https://mammamia-lr.com/"}
            />
            <Card 
                title="CACDS"
                description="Site pour l'association multisports CACDS (Coupe de l'Amitié Corporative des Deux-Sèvres). On y trouve les informations sur les différentes sections de l'association, ainsi que les résultats des compétitions."
                image="/img/cacds.png"
                techno={["PHP", "JavaScript", "CSS"]}
                link={"https://cacds.fr/"}
            />
            <Card 
                title="Memory Game"
                description="Jeu de mémoire en JavaScript. J'ai réalisé ce jeu pendant ma formation. J'ai ensuite adapté le jeu pour le rendre plus sympa pour mes enfants"
                image="/img/memory.png"
                techno={["JavaScript", "CSS"]}
                link={"https://memoryboupi.netlify.app/"}
            />
        </div>
    </Layout>
   );
}
