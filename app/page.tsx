'use client';

import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

export default function CVReplica() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section - Dark Blue */}
      <div className="bg-slate-700 text-white px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Yoga Naden | Front-end Developer</h1>
          <p className="text-sm leading-relaxed max-w-5xl mb-4">
            Junior Developer With Hands-On Experience In UI And System Design Using Figma And Other UI 
            Design Tools. I Have Practical Experience In Developing Websites Using Javascript, Typescript, 
            ReactJS, Angular, Laravel, CodeIgniter, HTML, CSS, Tailwind, Bootstrap, NextJs, Angular Material, And 
            Currently I'm Learning NextJs And Looking For An Opportunity To Work As NextJs Developer.
          </p>
          
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>089510437648</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>yoganadenmn@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Nadenbogaee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - 7 columns */}
          <div className="col-span-7 space-y-6">
            {/* Projects Section */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">PROJECTS</h2>
              
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">WEB E-LEARNING (FRONT-END) React - Express - Node</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Developed The Front-End Of A Web-Based E-learning System With A 
                    Gamification Approach, Utilizing User-Centered Design (UCD) Methodology. 
                    I Implemented the Interface Using ReactJS With React-Bootstrap and Material UI, 
                    Incorporating React Router For Seamless Navigation And Vue For Optimized 
                    Development. Styled With Custom CSS To Enhance User Experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">LAUNDRY WEB (FRONT-END) - React</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Complete Laundry Website Project Including Comprehensive <span className="font-semibold">Product 
                    Management</span> (create, read, update, delete products), <span className="font-semibold">Customer Management</span> 
                    (create, read, update, delete customers), And <span className="font-semibold">Transaction Management</span> 
                    (create and read transactions, with data fetched from a server-side API). In this 
                    Project, I utilized ReactJS, leveraging React Context for state management, 
                    Tailwind CSS for utility-first styling, and Next UI for component integration.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-2">BACHELOR'S FINAL PROJECT - Python</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Product Placement In E-Commerce Based on Consumer Behavior Using the 
                    Eclat Algorithm (Aimed at discovering transaction patterns, such as when a 
                    customer buys item A, they are likely to also purchase item B)
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1 ml-4">
                    <li>• Applied Market Basket Analysis and the Eclat Association Algorithm</li>
                    <li>• Designed product layout to enhance sales</li>
                    <li>• Analyzed transaction patterns in e-commerce data</li>
                    <li>• Developed strategies to boost sales</li>
                    <li>• Utilized Python and VSCode for implementation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frontend Section */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">FRONTEND</h2>
              
              {/* React and JavaScript Icons Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                    <div className="text-white text-lg">⚛️</div>
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">DYNAMIC DEVELOPMENT WITH VITE</div>
                    <div className="font-semibold text-slate-800">ENVIRONMENT</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                    JS
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">JAVASCRIPT OOP</div>
                    <div className="font-semibold text-slate-800">DOM MANIPULATION</div>
                  </div>
                </div>
              </div>

              {/* Technology Icons Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-sm mb-1 mx-auto">
                    Vue.js
                  </div>
                  <div className="text-xs font-semibold text-slate-800">Vue.JS</div>
                  <div className="text-xs text-slate-600">Basic</div>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-white text-xs mb-1 mx-auto">
                    WP
                  </div>
                  <div className="text-xs font-semibold text-slate-800">Wordpress/CMS</div>
                  <div className="text-xs text-slate-600">Basic</div>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white text-sm mb-1 mx-auto">
                    A
                  </div>
                  <div className="text-xs font-semibold text-slate-800">ANGULAR JS</div>
                  <div className="text-xs text-slate-600">Currently Working</div>
                  <div className="text-xs text-slate-600">With Angular</div>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm mb-1 mx-auto">
                    TS
                  </div>
                  <div className="text-xs font-semibold text-slate-800">TYPESCRIPT</div>
                  <div className="text-xs text-slate-600">Currently Working</div>
                  <div className="text-xs text-slate-600">With TypeScript</div>
                </div>
              </div>

              {/* Second Row of Icons */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    HTML5
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">HTML5</div>
                    <div className="font-semibold text-slate-800">SEMANTIC WEB</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    CSS3
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">CSS3 FOR CUSTOM STYLING</div>
                    <div className="text-slate-600">Tailwind, Bootstrap, NextJs,</div>
                    <div className="text-slate-600">Material UI</div>
                  </div>
                </div>
              </div>

              {/* Frontend Skills List */}
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  <span className="text-slate-700">RESPONSIVE INTERFACES WITH A</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  <span className="text-slate-700">COMPONENT-BASED ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  <span className="text-slate-700">REACT LIFECYCLE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  <span className="text-slate-700">REDUX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  <span className="text-slate-700">REACT-CONTEXT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">•</span>
                  <span className="text-slate-700">Intermediate - Level</span>
                </div>
              </div>
            </div>

            {/* Backend Section */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">BACKEND</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">
                    🍃
                  </div>
                  <div className="text-sm font-semibold text-slate-800">MongoDB</div>
                  <div className="text-xs text-slate-600">Basic</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">
                    JS
                  </div>
                  <div className="text-sm font-semibold text-slate-800">Node.JS</div>
                  <div className="text-xs text-slate-600">Basic</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto">
                    EX
                  </div>
                  <div className="text-sm font-semibold text-slate-800">Express.JS</div>
                  <div className="text-xs text-slate-600">Basic</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Currently */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">TECH STACK CURRENTLY</h2>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    ~
                  </div>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  I am currently working as a Junior Web Developer, primarily focusing on frontend development using Angular. 
                  While I have extensive experience in backend development, I am working with CodeIgniter 4 and Angular.
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-slate-800">NEXT.</div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    TS
                  </div>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  Additionally, I have experience in React and other related technologies. I am interested in working with 
                  React.js, but my company does not use it. I hope to find opportunities where I can work with React or its related frameworks in the 
                  future.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 5 columns */}
          <div className="col-span-5 space-y-6">
            {/* Intership Section */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">INTERSHIP</h2>
              <h3 className="font-bold text-slate-800 mb-2 uppercase">INTERN AS SYSTEM DESIGN AND SYSTEM ANALYST</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <p>System at Medan City Health Center</p>
                <p>Analyzed System Requirements for the health management</p>
                <p>• Designed and analyzed user type and system requirements</p>
                <p>• Designed system architecture</p>
                <p>• Visualized system processes with Data Flow Diagrams</p>
                <p>• Implemented UI design based on analysis</p>
              </div>
            </div>

            {/* Certification/Publications */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">CERTIFICATION/PUBLICATIONS</h2>
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
                <p><span className="font-semibold">SOURCE:</span> Yoga Naden | Linkedin</p>
                <p><span className="font-semibold">SOURCE:</span> Yoga Naden | Github</p>
                <p><span className="font-semibold">PORTFOLIO:</span> Yoga Naden</p>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">WORK EXPERIENCE</h2>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">Freelance Web Developer</h3>
                      <p className="text-sm text-slate-600">Frontend</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-800">Remote, Indonesia</p>
                      <p className="text-xs text-slate-600">Oct. 2023 - Present</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-semibold mb-2">React - Node - Express - MySQL - Figma - Photoshop</p>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p><span className="font-semibold">Projects</span> → Make websites both front and backend using React, Node, Express, MySQL for Student Final Project With 2 Other Members While I Work on React</p>
                    <p><span className="font-semibold">Projects</span> → New Website Using React, Tailwind, HTML, CSS, Tailwind, Bootstrap</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">PT Adhikari Inovasi Indonesia (ADHY.AS) [IPO]</h3>
                      <p className="text-sm text-slate-600">Junior Web Developer</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-800">Bandung, Indonesia</p>
                      <p className="text-xs text-slate-600">Nov. 2024 - Present</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-semibold mb-2">Angular - TypeScript - Laravel (Frontend) CodeIgniter 4 (Backend)</p>
                  <div className="text-sm text-slate-600 space-y-1">
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

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">Education</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">2017 - 2020</h4>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">SMK Telkom 2 Medan</h3>
                  <p className="text-xs text-slate-600 mb-3">TEKNIK KOMPUTER DAN JARINGAN</p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-800">89</div>
                    <div className="text-xs text-slate-600 mb-2">AVG SCORE</div>
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xs mx-auto border-2">
                      <div className="grid grid-cols-3 gap-px">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">2020 - 2024</h4>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">TELKOM UNIVERSITY PURWOKERTO</h3>
                  <p className="text-xs text-slate-600 mb-3">TEKNIK INFORMATIKA - INFORMATICS TECHNOLOGY</p>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-800">3.5/4</div>
                    <div className="text-xs text-slate-600 mb-2">GRADE POINT AVERAGE</div>
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-xs mx-auto border-2">
                      <div className="grid grid-cols-3 gap-px">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">HARD - SOFT SKILL - LANGUAGE</h2>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs px-2 py-1">NESTJS API</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">MERN</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">MYSQL - Basic</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">MVC - Model View Controller</Badge>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs px-2 py-1">Web Development</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">UI Design - Photoshop - Figma</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">Creative Thinking - Problem Solving</Badge>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs px-2 py-1">Teamwork</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">English - Conversational</Badge>
                  <Badge variant="outline" className="text-xs px-2 py-1">Bahasa Indonesia - Native</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}