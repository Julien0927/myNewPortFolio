import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function Card({ title, description, image, techno, link }) {
  return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-xl shadow-sm flex flex-col overflow-hidden">
          <figure className="w-full">
              <img
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={image}
                  alt={title}
              />
          </figure>

          <div className="p-4 flex flex-col justify-between h-full">
              <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins' }}>
                  {title}
              </h2>
              <p className="text-justify text-sm mb-4" style={{ fontFamily: 'Poppins' }}>
                  {description}
              </p>

              <div className="flex justify-start mb-4">
                  <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-500 hover:text-black transition-transform duration-300"
                      style={{ fontFamily: 'Poppins' }}
                  >
                      <ArrowUpRight />
                      Show
                  </a>
              </div>

              {techno && Array.isArray(techno) && (
                  <div className="flex flex-wrap justify-end gap-2">
                      {techno.map((tech, index) => (
                          <span key={index}>
                              <Button children={tech} variant="primaryBis" fontFamily="Poppins" fontWeight="light" />
                          </span>
                      ))}
                  </div>
              )}
          </div>
      </div>
  );
}
