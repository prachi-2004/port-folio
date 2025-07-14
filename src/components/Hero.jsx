function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          Hello, I'm Prachi
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Creative Developer & Designer building modern web experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow hover:shadow-lg transition">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </a>
        </div>
      </div>

      {/* Optional Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;