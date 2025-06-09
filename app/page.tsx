"use client";

import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Github } from "lucide-react";
import Image from "next/image";

export default function Resume() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yoga Naden",
    jobTitle: "Fullstack Developer",
    description: "Junior Fullstack Developer specializing in React, Angular, TypeScript",
    url: "https://your-vercel-domain.vercel.app",
    sameAs: ["https://github.com/Nadenbogeee", "https://www.linkedin.com/in/yoga-naden/"],
    knowsAbout: ["React", "Angular", "TypeScript", "JavaScript", "Web Development", "Frontend Development"],
  };
  return (
    <div className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Header Section - Dark Blue */}
      <div className="bg-slate-700 text-white px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">Yoga Naden | Fullstack Developer</h1>
          <div className="text-xs sm:text-sm leading-relaxed max-w-5xl mb-4 min-w-full text-justify px-4 sm:px-8 lg:px-20">
            Junior Developer With Hands-On Experience In UI And System Design Using Figma And Other UI Design Tools. I Have Practical Experience In Developing Websites Using Javascript, Typescript, ReactJS, Angular, Laravel, CodeIgniter,
            HTML, CSS, Tailwind, Bootstrap, NextJs, Angular Material, And Currently I&apos;m Learning NextJs And Looking For An Opportunity To Work As NextJs Developer.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm justify-center sm:justify-evenly">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>089510437648</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>yoganadenmn@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} />
              <span>Nadenbogeee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - 7 columns on desktop, full width on mobile */}
          <div className="lg:col-span-7 space-y-6">
            {/* Projects Section */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">PERSONAL PROJECTS</h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-sm sm:text-base">WEB E-LEARNING (FRONT-END) React - Express - Node</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Developed The Front-End Of A Web-Based E-learning System With A Gamification Approach, Utilizing User-Centered Design (UCD) Methodology. I Implemented the Interface Using ReactJS With React-Bootstrap and Material UI,
                    Incorporating React Router For Seamless Navigation And Vue For Optimized Development. Styled With Custom CSS To Enhance User Experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-sm sm:text-base">LAUNDRY WEB (FRONT-END) - React</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                    Complete Laundry Website Project Including Comprehensive <span className="font-semibold">Product Management</span> (create, read, update, delete products), <span className="font-semibold">Customer Management</span>
                    (create, read, update, delete customers), And <span className="font-semibold">Transaction Management</span>
                    (create and read transactions, with data fetched from a server-side API). In this Project, I utilized ReactJS, leveraging React Context for state management, Tailwind CSS for utility-first styling, and Next UI for
                    component integration.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-sm sm:text-base">BACHELOR&apos;S FINAL PROJECT - Python</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                    Product Placement In E-Commerce Based on Consumer Behavior Using the Eclat Algorithm (Aimed at discovering transaction patterns, such as when a customer buys item A, they are likely to also purchase item B)
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1 ml-4">
                    <li>• Applied Market Basket Analysis and the Eclat Association Algorithm</li>
                    <li>• Designed product layout to enhance sales</li>
                    <li>• Analyzed transaction patterns in e-commerce data</li>
                    <li>• Developed strategies to boost sales</li>
                    <li>• Utilized Python and VSCode for implementation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">TECH STACK / CURRENTLY WORKING WITH</h2>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                {[
                  { src: "assets/ts.png", name: "TypeScript", width: 40, current: true, intermediate: true },
                  { src: "assets/js.png", name: "JavaScript", width: 40, current: true, intermediate: true },
                  { src: "assets/angularjs.png", name: "Angular", width: 40, current: true, intermediate: true },
                  { src: "assets/html-5.png", name: "HTML5", width: 40, current: true, intermediate: true },
                  { src: "assets/css-3.png", name: "CSS3", width: 40, current: true, intermediate: true },
                  { src: "assets/tailwindcss.png", name: "Tailwind CSS", width: 40, current: true, intermediate: true },
                  { src: "assets/reactjs.png", name: "React", width: 40, intermediate: true },
                  { src: "assets/nextjs.png", name: "NextJS", width: 40, intermediate: true },
                  { src: "assets/codeigniter.png", name: "CodeIgniter", width: 40, current: true, basic: true },
                  { src: "assets/ionic.png", name: "Ionic", width: 40, current: true, basic: true },
                  { src: "assets/postgres.png", name: "PostgreSQL", width: 40, current: true, basic: true },
                  { src: "assets/mysql.png", name: "MySQL", width: 40, current: true, basic: true },
                  { src: "assets/vuejs.png", name: "Vue.js", width: 40, basic: true },
                  { src: "assets/nodejs.png", name: "Node.js", width: 40, basic: true },
                  { src: "assets/mongodb.png", name: "MongoDB", width: 40, basic: true },
                  { src: "assets/express.png", name: "Express", width: 40, basic: true },
                  { src: "assets/figma.png", name: "Figma", width: 40, current: true, basic: true },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-2 min-w-[60px] relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <Image src={tech.src} alt={tech.name} width={tech.width} height={40} className="object-contain" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-600 text-center leading-tight">{tech.name}</span>
                    {tech.current && <Badge className="text-[8px] sm:text-[10px] px-1 py-0 h-3 sm:h-4 bg-green-100 text-green-700 border-green-300 hover:bg-green-100">Current</Badge>}
                    {tech.intermediate && <Badge className="text-[8px] sm:text-[10px] px-1 py-0 h-3 sm:h-4 bg-green-100 text-green-700 border-green-300 hover:bg-green-100">Intermediate</Badge>}
                    {tech.basic && <Badge className="text-[8px] sm:text-[10px] px-1 py-0 h-3 sm:h-4 bg-green-100 text-green-700 border-green-300 hover:bg-green-100">Basic</Badge>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">Education</h2>

              <div className="space-y-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                    <h3 className="font-bold text-slate-800 text-sm">SMK Telkom 2 Medan</h3>
                    <span className="text-xs text-slate-600">2017 - 2020</span>
                  </div>
                  <p className="text-xs text-slate-600">Teknik Komputer dan Jaringan • Average Score: 89</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                    <h3 className="font-bold text-slate-800 text-sm">Telkom University Purwokerto</h3>
                    <span className="text-xs text-slate-600">2020 - 2024</span>
                  </div>
                  <p className="text-xs text-slate-600">Teknik Informatika - Informatics Technology • GPA: 3.5/4.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 5 columns on desktop, full width on mobile */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certification/Publications */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">CERTIFICATION/PUBLICATIONS</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Certificate of competence: Junior Web Developer</h4>
                  <p className="text-sm text-slate-600">Badan Nasional Sertifikat Profesi (BNSP)</p>
                  <p className="text-xs text-slate-500">Issued: February 2024 | Expires: February 2027</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Product Placement in E-Commerce Tokopedia Based on Consumer Behavior Using the Eclat Algorithm</h4>
                  <p className="text-sm text-slate-600">(Jurnal Mahasiswa Teknik Informatika)</p>
                  <p className="text-xs text-slate-500">Published: July 17, 2024</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Expert System for Diagnosing Diseases in Pregnant Women Using Forward Chaining Method Based on Website</h4>
                  <p className="text-sm text-slate-600">CENTRE</p>
                  <p className="text-xs text-slate-500">Published: January 15, 2024</p>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-xs">
                <p>
                  <span className="font-semibold">SOURCE:</span> Yoga Naden |
                  <a
                    href="https://www.linkedin.com/in/yoga-naden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:text-blue-800 underline hover:underline-offset-2 transition-colors duration-200 cursor-pointer inline-flex items-center gap-1">
                    Linkedin
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </p>

                <p>
                  <span className="font-semibold">SOURCE:</span> Yoga Naden |
                  <a href="https://github.com/Nadenbogeee" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:text-blue-800  transition-colors duration-200 cursor-pointer inline-flex items-center gap-1">
                    Github
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>

                <p>
                  <span className="font-semibold">PORTFOLIO:</span>
                  <a
                    href="https://yoga-naden-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:text-blue-800 underline hover:underline-offset-2 transition-colors duration-200 cursor-pointer inline-flex items-center gap-1">
                    Yoga Naden
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">WORK EXPERIENCE</h2>

              <div className="space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">INTERN AS SYSTEM ANALYST</h3>
                      <p className="text-sm text-slate-600">SYSTEM ANALYST</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm font-semibold text-slate-800">MEDAN, Indonesia</p>
                      <p className="text-xs text-slate-600">JULY. 2023 - SEPT 2023</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-semibold mb-2">REACT - HTML - CSS- TAILWINDCSS - Figma - Photoshop</p>
                  <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                    <p>
                      <span className="font-semibold">Projects</span> → ANALYZE SYSTEM NEEDS AND IMPLEMENT IT WITH REACT AND HTMLL WITH TAILWINDCSS
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">Freelance Web Developer</h3>
                      <p className="text-sm text-slate-600">Frontend</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm font-semibold text-slate-800">Remote, Indonesia</p>
                      <p className="text-xs text-slate-600">Oct. 2023 - Present</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-semibold mb-2">React - Node - Express - MySQL - Figma - Photoshop</p>
                  <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                    <p>
                      <span className="font-semibold">Projects</span> → Make websites both front and backend using React, Node, Express, MySQL for Student Final Project With 2 Other Members While I Work on React
                    </p>
                    <p>
                      <span className="font-semibold">Projects</span> → New Website Using React, Tailwind, HTML, CSS, Tailwind, Bootstrap
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">PT Adhikari Inovasi Indonesia (AdhivasIndo)</h3>
                      <p className="text-sm text-slate-600">Junior Web Developer</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm font-semibold text-slate-800">Bandung, Indonesia</p>
                      <p className="text-xs text-slate-600">Nov. 2024 - Present</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-semibold mb-2">Angular - TypeScript - Laravel (Frontend) CodeIgniter 4 (Backend)</p>
                  <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                    <p className="font-semibold">Projects</p>
                    <p>• Developed and maintained responsive web and mobile applications using Tailwind CSS to ensure seamless user experience.</p>
                    <p>• Implemented Role-Based Access Control (RBAC) to enhance security and user management</p>
                    <p>• Collaborated with cross-functional teams to deliver high-quality software solutions, ensuring optimal performance and scalability.</p>
                    <p>• Utilized Figma to modify and enhance UI/UX assets, ensuring consistent design system.</p>
                    <p>• Leveraged Claude AI and ChatGPT for debugging and problem-solving during development lifecycle.</p>
                    <p>• Collaborated with government projects in an Agile environment, ensuring efficient development cycles and timely project delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Skills Section - Full Width Horizontal */}
        <div className="border-t border-slate-200 pt-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-6 uppercase tracking-wide text-center">SKILLS & EXPERTISE</h2>

          <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto min-w-full">
            {/* Technical Skills */}
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-blue-50 border-blue-200 text-blue-700">
              REST API
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-blue-50 border-blue-200 text-blue-700">
              MERN Stack
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-blue-50 border-blue-200 text-blue-700">
              MySQL
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-blue-50 border-blue-200 text-blue-700">
              MVC Architecture
            </Badge>

            {/* Design Skills */}
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-green-50 border-green-200 text-green-700">
              UI/UX Design
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-green-50 border-green-200 text-green-700">
              Figma
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-green-50 border-green-200 text-green-700">
              Photoshop
            </Badge>

            {/* Soft Skills */}
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-purple-50 border-purple-200 text-purple-700">
              Problem Solving
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-purple-50 border-purple-200 text-purple-700">
              Teamwork
            </Badge>

            {/* Languages */}
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-orange-50 border-orange-200 text-orange-700">
              English - Conversational
            </Badge>
            <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 bg-orange-50 border-orange-200 text-orange-700">
              Bahasa Indonesia - Native
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
