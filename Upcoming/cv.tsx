import { Mail, Phone, Linkedin, Github, MapPin, Code2, Terminal, Database, Cpu } from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function CV() {
  return (
    <div className="max-w-4xl mx-auto bg-slate-800 shadow-2xl rounded-lg overflow-hidden border border-slate-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 border-b border-emerald-500/30">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm">{'>'} whoami</span>
            </div>
            <h1 className="text-slate-100 mb-2">Your Name</h1>
            <p className="text-emerald-400 text-xl mb-3">Aspiring Machine Learning Engineer</p>
            <p className="text-slate-300">LAB University of Applied Sciences | Finland</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
            <Code2 className="w-12 h-12 text-emerald-400" />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-800/50 px-8 py-4 border-b border-slate-700">
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">dai.lam.hoang@student.lab.fi</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">+358415766311</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Linkedin className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">linkedin.haongdailam</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Github className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">github.com/yourusername</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-sm">Finland</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Professional Summary</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Motivated student at LAB University of Applied Sciences with a strong passion for machine learning and artificial intelligence. 
            Proficient in Python programming with expertise in web design and frontend development. 
            Fluent English speaker with excellent collaboration skills, dedicated to working effectively in team environments. 
            Seeking opportunities to apply technical expertise and contribute to innovative machine learning projects.
          </p>
        </section>

        <Separator className="bg-slate-700 mb-8" />

        {/* Education */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Education</h2>
          </div>
          <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-slate-100">Bachelor's Degree</h3>
                <p className="text-emerald-400">Information Technology / Computer Science</p>
              </div>
              <span className="text-slate-400 text-sm">Expected 20XX</span>
            </div>
            <p className="text-slate-300 mb-2">LAB University of Applied Sciences, Finland</p>
            <p className="text-slate-400 text-sm">GPA: X.XX / 5.00</p>
          </div>
        </section>

        <Separator className="bg-slate-700 mb-8" />

        {/* Technical Skills */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Technical Skills</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-300 mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Python</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">JavaScript</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">HTML/CSS</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">SQL</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-slate-300 mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Frontend Development & Web Design
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">React</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">CSS/Tailwind</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Responsive Design</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">UI/UX Design</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-slate-300 mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                Databases & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">MySQL</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">MongoDB</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Git</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Docker</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-slate-300 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                Machine Learning & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">TensorFlow</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Scikit-learn</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Pandas/NumPy</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Data Analysis</Badge>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-slate-700 mb-8" />

        {/* Projects */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Projects</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-slate-100">Project Title 1</h3>
                <span className="text-slate-400 text-sm">Month Year</span>
              </div>
              <p className="text-slate-300 mb-3">
                Brief description of the project, highlighting the problem solved, technologies used, 
                and key achievements. Focus on quantifiable results and technical implementations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">Python</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">Machine Learning</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">Flask</Badge>
              </div>
            </div>

            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-slate-100">Project Title 2</h3>
                <span className="text-slate-400 text-sm">Month Year</span>
              </div>
              <p className="text-slate-300 mb-3">
                Brief description of the project, highlighting the problem solved, technologies used, 
                and key achievements. Focus on quantifiable results and technical implementations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">React</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">Node.js</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">MongoDB</Badge>
              </div>
            </div>

            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-slate-100">Project Title 3</h3>
                <span className="text-slate-400 text-sm">Month Year</span>
              </div>
              <p className="text-slate-300 mb-3">
                Brief description of the project, highlighting the problem solved, technologies used, 
                and key achievements. Focus on quantifiable results and technical implementations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">IoT</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">Arduino</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">Data Analytics</Badge>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-slate-700 mb-8" />

        {/* Experience */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Experience</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-slate-100">Position Title</h3>
                  <p className="text-emerald-400">Company Name</p>
                </div>
                <span className="text-slate-400 text-sm">Month Year - Month Year</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1 ml-2">
                <li>Key responsibility or achievement with quantifiable results</li>
                <li>Technical contribution and technologies utilized</li>
                <li>Impact on team or project outcomes</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-slate-100">Position Title</h3>
                  <p className="text-emerald-400">Company Name</p>
                </div>
                <span className="text-slate-400 text-sm">Month Year - Month Year</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-1 ml-2">
                <li>Key responsibility or achievement with quantifiable results</li>
                <li>Technical contribution and technologies utilized</li>
                <li>Impact on team or project outcomes</li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="bg-slate-700 mb-8" />

        {/* Languages & Soft Skills */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Languages & Soft Skills</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <h3 className="text-slate-100 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">English (Fluent)</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Finnish</Badge>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <h3 className="text-slate-100 mb-2">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Team Collaboration</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Communication</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Problem Solving</Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">Agile/Scrum</Badge>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-slate-700 mb-8" />

        {/* Certifications & Achievements */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-emerald-400">//</span>
            <h2 className="text-slate-100">Certifications & Achievements</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3 text-slate-300">
              <span className="text-emerald-400 mt-1">▹</span>
              <p>Certification Name - Issuing Organization (Year)</p>
            </div>
            <div className="flex items-start gap-3 text-slate-300">
              <span className="text-emerald-400 mt-1">▹</span>
              <p>Achievement or Award - Context/Competition (Year)</p>
            </div>
            <div className="flex items-start gap-3 text-slate-300">
              <span className="text-emerald-400 mt-1">▹</span>
              <p>Academic Achievement - Specific Recognition (Year)</p>
            </div>
            <div className="flex items-start gap-3 text-slate-300">
              <span className="text-emerald-400 mt-1">▹</span>
              <p>Technical Workshop/Training - Organization (Year)</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 px-8 py-4 border-t border-emerald-500/30">
        <p className="text-slate-400 text-sm font-mono text-center">
          {'</>'} Built with passion for technology and innovation
        </p>
      </div>
    </div>
  );
}
