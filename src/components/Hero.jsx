
import Button from "./Button";
import { Link } from "react-router-dom";
import AnimatedName from "../components/AnimatedName";


export default function Hero() {
    return (
        <div className="hero bg-base-100 min-h-[70vh]">
        <div className="hero-content text-center">
            <div className="max-w-3xl">
                <img className=" mx-auto border-4 border-primary rounded-full size-32 mb-5" src="/img/photoCV.jpg" alt="ghibli" />
                <AnimatedName />
                <p className="text-xl py-6 " style={{fontFamily: 'Poppins'}}>
                    Passionné par la création de solutions numériques élégantes et performantes.
                    je transforme vos idées en applications web innovantes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3 ">
                    <Link to="/About" className="hover:scale-105 transition-transform ease-in-out duration-500">
                        <Button children="En savoir plus" variant="primary" fontFamily="Poppins" fontWeight="light" fontSize="xl"/>
                    </Link>
                    <a href="/CV.pdf" download className="hover:scale-105 transition-transform ease-in-out duration-500">
                        <Button children="Télécharger mon CV" variant="secondary" fontFamily="Poppins" fontWeight="light" fontSize="xl"/>
                    </a>
                </div>
                <div className="flex justify-center mt-5 gap-5 ">
                    <Link to="https://github.com/Julien0927/" target="_blank" rel="noopener noreferrer">
                        <img className="size-8 hover:scale-105 transition-transform ease-in-out duration-500" src="/icones/github-142.svg" alt="GitHub" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/julien-varachas-925493217/" target="_blank" rel="noopener noreferrer">
                        <img className="size-8 hover:scale-105 transition-transform ease-in-out duration-500" src="/icones/linkedin.svg" alt="Linkedin" />
                    </Link>
                    <Link to="mailto: ">
                        <img className="size-8 hover:scale-105 transition-transform ease-in-out duration-500" src="/icones/mail.svg" alt="mail" />
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}