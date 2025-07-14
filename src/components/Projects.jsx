import { useEffect, useState } from 'react';

const projects = [
  {
    title: "PathPilot",
    description: "An AI-driven career recommendation platform that leverages intelligent quiz analysis, skill gap detection, and dynamic roadmaps to guide users toward optimal career paths.",
    image: "/image.png",
    tags: ["React", "JavaScript", "Node.js", "Tailwind CSS", "Mongo DB"],
    liveLink: "https://path-pilot-six.vercel.app ",
    githubLink: "https://github.com/prachi-2004/PathPilot " // Replace with actual GitHub link
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing work samples, skills, and contact information. Built using React, Tailwind CSS, and animations for a smooth user experience.",
    image: "/image copy.png",
    tags: ["React", "Tailwind CSS"],
    liveLink: "https://port-folio-nine-delta.vercel.app/ ",
    githubLink: "https://github.com/prachi-2004/port-folio" // Replace with actual GitHub link
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div
        id="projects-section"
        className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          My Projects
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the web applications and websites I've built recently.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    GitHub Repo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;