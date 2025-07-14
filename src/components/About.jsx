import { useEffect, useState } from 'react';

const About = () => {
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

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gray-900"
    >
      <div
        id="about-section"
        className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/3">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
              <img
                src="../../public/image1.png"
                alt="web developer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate full-stack developer who specializes in building modern, responsive web applications with clean code, seamless performance, and a strong focus on user experience and scalability
            </p>
            <p className="text-lg text-gray-300 mb-6">
I specialize in building high-performance websites and scalable web applications using modern technologies like React, Node.js, Tailwind CSS, and more — combining clean code with strong design principles and responsiveness.            </p>
            <p className="text-lg text-gray-300 mb-8">
Whether it's a personal portfolio, a business website, or a complex web application, I’m dedicated to turning your ideas into powerful, user-friendly digital experiences.            </p>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;