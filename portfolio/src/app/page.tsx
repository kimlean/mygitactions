import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 animate-fadeIn">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-12 animate-slideUp">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 hover-glow animate-scaleIn">
            <Image
              src="/kimlean.png"
              alt="Kimlean Sy Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-3 animate-slideInLeft">
            Kimlean SY
          </h1>
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-slideInRight">
            Full-Stack Software Engineer
          </p>
          <div className="flex justify-center space-x-6 text-sm animate-slideUp">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="text-red-500">📍</span>
              <span className="text-gray-700 font-medium">Phnom Penh, Cambodia</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="text-blue-500">📧</span>
              <span className="text-gray-700 font-medium">Kimlean98@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="text-green-500">📱</span>
              <span className="text-gray-700 font-medium">099 823 411</span>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover-glow animate-slideInLeft">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl">👨‍💻</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Computer Science graduate from Royal University of Phnom Penh with experience in full-stack development, 
            data science, and project management. Currently working as a <span className="font-semibold text-blue-600">Junior Data Scientist & Software Engineer</span>
            at <span className="font-semibold text-purple-600">Acleda Bank</span>, specializing in banking systems, mobile SDK development, and iOS native applications.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover-glow animate-slideInLeft">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Work Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-xl transition-all duration-300 hover:shadow-lg hover:border-l-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🏦</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Junior Data Scientist & Software Engineer</h3>
                  <p className="text-blue-700 font-semibold text-lg mb-1">Acleda Bank</p>
                  <p className="text-gray-600 text-sm mb-3">08/2024 - Present</p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-blue-600">
                      <span className="text-blue-500">•</span>
                      <span>Develop banking machine systems using C programming</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-blue-600">
                      <span className="text-blue-500">•</span>
                      <span>Build mobile SDK for Android & iOS, convert models to ONNX</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-blue-600">
                      <span className="text-blue-500">•</span>
                      <span>Team lead for Swift programming (Native iOS)</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-blue-600">
                      <span className="text-blue-500">•</span>
                      <span>UX analysis and flow-chart design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl transition-all duration-300 hover:shadow-lg hover:border-l-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">CEO & Project Manager</h3>
                  <p className="text-green-700 font-semibold text-lg mb-1">Anukwat Technology (Self-employment)</p>
                  <p className="text-gray-600 text-sm mb-3">05/2023 - Present</p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-green-600">
                      <span className="text-green-500">•</span>
                      <span>Customer consultation and solution development</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-green-600">
                      <span className="text-green-500">•</span>
                      <span>Project management and system analysis</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-green-600">
                      <span className="text-green-500">•</span>
                      <span>Dynamic Website for IDOL Drinks (React, Java, PostgreSQL)</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-green-600">
                      <span className="text-green-500">•</span>
                      <span>Telegram bot for Ganzberk Beer (Python, HTML, CSS, MariaDB)</span>
                    </li>
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-green-600">
                      <span className="text-green-500">•</span>
                      <span>HR Management System (C# WinForms, MariaDB)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-xl transition-all duration-300 hover:shadow-lg hover:border-l-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Developer</h3>
                  <p className="text-purple-700 font-semibold text-lg mb-1">Snapkyu</p>
                  <p className="text-gray-600 text-sm mb-3">02/2024 - 08/2025</p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-center space-x-2 transition-all duration-300 hover:text-purple-600">
                      <span className="text-purple-500">•</span>
                      <span>Web dashboard development (NextJS, TypeScript, Tailwind CSS)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover-glow animate-slideInRight">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl">🎓</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-6 rounded-r-xl transition-all duration-300 hover:shadow-lg hover:border-l-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor&apos;s Degree in Computer Science</h3>
                  <p className="text-yellow-700 font-semibold text-lg mb-1">Royal University of Phnom Penh</p>
                  <p className="text-gray-600 text-sm">🇰🇭 Cambodia • 2020 - 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-xl transition-all duration-300 hover:shadow-lg hover:border-l-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🏫</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Exchange Scholarship</h3>
                  <p className="text-red-700 font-semibold text-lg mb-1">Lublin University of Technology</p>
                  <p className="text-gray-600 text-sm">🇵🇱 Poland • 2019 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover-glow animate-slideInLeft">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Notes API (Rust)',
                description: 'Modern REST API built with Rust, Axum, and PostgreSQL featuring JWT authentication',
                technologies: ['Rust', 'Axum', 'PostgreSQL', 'JWT'],
                icon: '🦀',
                color: 'from-orange-500 to-red-600',
                github: 'https://github.com/kimlean/Notes-API-Rust-Backend'
              },
              {
                name: 'Full-Stack Notes App',
                description: 'Complete notes application with Vue.js frontend, C# backend, and TypeScript business logic',
                technologies: ['Vue.js', 'C#', 'TypeScript', 'Full-Stack'],
                icon: '📝',
                color: 'from-green-500 to-emerald-600',
                github: 'https://github.com/kimlean/NotesApp'
              },
              {
                name: 'Face Liveness iOS Framework',
                description: 'iOS framework providing advanced face-liveness detection utilities for security applications',
                technologies: ['Swift', 'iOS', 'Computer Vision', 'Security'],
                icon: '👤',
                color: 'from-blue-500 to-indigo-600',
                github: 'https://github.com/kimlean/FaceLiveness_Framework_IOS'
              },
              {
                name: 'Share Drive Sync Service',
                description: 'Python microservice for downloading and synchronizing files from shared drives',
                technologies: ['Python', 'Microservice', 'File Sync', 'API'],
                icon: '☁️',
                color: 'from-purple-500 to-violet-600',
                github: 'https://github.com/kimlean/ShareDriveDownload'
              },
              {
                name: 'Rust CRUD API',
                description: 'Robust Rust service with Axum handlers and PostgreSQL integration via stored procedures',
                technologies: ['Rust', 'PostgreSQL', 'CRUD', 'Backend'],
                icon: '⚡',
                color: 'from-amber-500 to-orange-600',
                github: 'https://github.com/kimlean/rust-crud-api'
              },
              {
                name: 'Kokoro TTS Model',
                description: 'Advanced Text-to-Speech model supporting English and Chinese languages with neural voice synthesis',
                technologies: ['TTS', 'AI/ML', 'Neural Networks', 'Multilingual'],
                icon: '🎤',
                color: 'from-teal-500 to-cyan-600',
                github: 'https://github.com/kimlean/acleda-kokoro-tts-english-chinese'
              }
            ].map((project, index) => (
              <div 
                key={project.name}
                className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">{project.icon}</span>
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

{/* Skills Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 hover-glow animate-slideInRight">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl">🛠️</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'C Programming', icon: '🔧', color: 'from-gray-500 to-gray-700' },
              { name: 'C# Programming', icon: '🎯', color: 'from-purple-500 to-purple-700' },
              { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-yellow-600' },
              { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
              { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-500' },
              { name: 'HTML/CSS', icon: '🎨', color: 'from-orange-500 to-red-500' },
              { name: 'PHP', icon: '🐘', color: 'from-indigo-500 to-purple-600' },
              { name: 'Swift', icon: '🦉', color: 'from-orange-400 to-orange-600' },
              { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
              { name: 'Next.js', icon: '▲', color: 'from-black to-gray-800' },
              { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-cyan-500' },
              { name: 'SQL Server', icon: '💾', color: 'from-red-500 to-red-700' },
              { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-800' },
              { name: 'MariaDB', icon: '🗃️', color: 'from-green-600 to-green-800' },
              { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-800' },
              { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
              { name: 'Git', icon: '🌿', color: 'from-orange-500 to-red-500' },
              { name: 'Linux Server', icon: '🐧', color: 'from-yellow-400 to-orange-500' },
              { name: 'DevOps', icon: '⚙️', color: 'from-green-500 to-teal-500' },
              { name: 'IONIC', icon: '📱', color: 'from-blue-500 to-indigo-600' }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="group relative bg-white border border-gray-200 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-xl">{skill.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-2xl shadow-2xl p-8 text-center text-white animate-slideUp">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>
            </div>
            <p className="text-xl mb-8 text-white/90">
              Interested in collaboration or have a project in mind? Let&apos;s discuss!
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:Kimlean98@gmail.com" 
                className="group bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform flex items-center space-x-3"
              >
                <span className="text-2xl">📧</span>
                <span className="font-semibold text-lg">Email Me</span>
              </a>
              <a 
                href="tel:+855998823411" 
                className="group bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform flex items-center space-x-3"
              >
                <span className="text-2xl">📞</span>
                <span className="font-semibold text-lg">Call Me</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/kimlean-sy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform flex items-center space-x-3"
                >
                      <Image
                      src="/linked.png"
                      alt="LinkedIn Profile"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      priority
                    />
                  <span className="font-semibold text-lg">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/kimlean" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform flex items-center space-x-3"
                  >
                        <Image
                        src="/github.png"
                        alt="GitHub Profile"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        priority
                      />
                    <span className="font-semibold text-lg">Github</span>
                  </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
