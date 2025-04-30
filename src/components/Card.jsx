import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function Card({ title, description, image, techno, link }) {

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-xl shadow-sm flex flex-col overflow-hidden">
        <figure>
            <img className="w-full hover:scale-105 transition-transform ease-in-out duration-500 rounded-t-xl"
            src={image}
            alt={title}
            />
        </figure>

        <div className="card-body">
            <h2 className="card-title" style={{fontFamily: 'Poppins'}}>{title}</h2>
            <p className="text-justify text-md" style={{fontFamily: 'Poppins'}}>{description}</p>
            <div className="card-actions justify-start mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:scale-105 transition-transform ease-in-out duration-500" style={{fontFamily: 'Poppins'}}>
            <ArrowUpRight />
            Show
            </a>
            </div>
            {techno && Array.isArray(techno) && (
          <div className="flex justify-end gap-2 mt-2">
            {techno.map((tech, index) => (
              <span key={index} className="text-xs"> 
                <Button children={tech} variant="primaryBis" fontFamily="Poppins" fontWeight="light" className="text-xs px-2 py-1"/>
              </span>
            ))}
            </div>
            )}
        </div>
        </div>
    )
}