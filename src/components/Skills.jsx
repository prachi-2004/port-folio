import { useEffect, useState } from 'react';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 95},
      { name: "JavaScript", level: 90 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 80 },
      { name: "Netlify / Vercel", level: 85 }
    ]
  },
  {
    category: "Others",
    items: [
      { name: "Problem Solving", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "Responsive Design", level: 90 },
    ]
  }
];

const Skills = () => {
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

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div
        id="skills-section"
        className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          Skills
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the technologies and tools I work with.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-400">{group.category}</h3>
              <ul className="space-y-4">
                {group.items.map((skill, idx) => (
                  <li key={idx}>
                    <div className="mb-1 flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: `${isVisible ? skill.level : 0}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;