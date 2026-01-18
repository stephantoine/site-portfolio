import { projects } from '@/contents/project';
import Carrousel from '@/app/components/Carrousel';
import React from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const num = 10; // indice du projet "GenDoc"
const project = projects[num];

const GenDoc = () => {
  return (
    <div className="container max-w-5xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <p className="mb-2 text-gray-700 dark:text-gray-400">{project.resume}</p>
      <div className="flex flex-wrap gap-2 items-center mb-6 text-gray-700 dark:text-gray-400">
        <p>Technologies : </p>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 pAncienSitePortfolioy-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <Carrousel>
        {project.images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Carrousel>

      <p className="my-6 text-gray-700 dark:text-gray-400">{project.description}</p>
      <div className="flex gap-4 mt-2">
          {project.githubLink != '' && (
              <Link href={project.githubLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary/80 transition-colors" >
                  <FaGithub className="w-4 h-4" />
                  <span>Code</span>
              </Link>
          )}

          {project.demoLink != '' && (
              <Link href={project.demoLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary/80 transition-colors">
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Démo</span>
              </Link>
          )}
      </div>
    </div>
  );
};

export default GenDoc;
