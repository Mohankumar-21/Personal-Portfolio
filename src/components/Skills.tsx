import { Card } from "@/components/ui/card";
import { FaCode, FaServer, FaTools, FaShieldAlt, FaDatabase, FaLanguage, FaCogs, FaCloudUploadAlt, FaPencilRuler, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaPython, FaGitAlt, FaLinux, FaFigma, FaWordpress, FaJava, FaPhp } from "react-icons/fa";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion, Variants } from "framer-motion";

const skillIcons: Record<string, JSX.Element> = {
  frontend: <FaCode className="text-blue-500 text-2xl mb-2 mx-auto" />,
  backend: <FaServer className="text-purple-500 text-2xl mb-2 mx-auto" />,
  tools: <FaTools className="text-green-500 text-2xl mb-2 mx-auto" />,
  advanced: <FaCogs className="text-yellow-500 text-2xl mb-2 mx-auto" />,
  security: <FaShieldAlt className="text-red-500 text-2xl mb-2 mx-auto" />,
  database: <FaDatabase className="text-indigo-500 text-2xl mb-2 mx-auto" />,
  languages: <FaLanguage className="text-pink-500 text-2xl mb-2 mx-auto" />,
  devtools: <FaTools className="text-gray-500 text-2xl mb-2 mx-auto" />,
  deployment: <FaCloudUploadAlt className="text-blue-400 text-2xl mb-2 mx-auto" />,
  design: <FaPencilRuler className="text-orange-500 text-2xl mb-2 mx-auto" />,
};

const categoryDescriptions: Record<string, string> = {
  frontend: "Building interactive, scalable UIs with modern frameworks.",
  backend: "Designing robust APIs and server-side logic.",
  tools: "Leveraging state, animation, and styling tools.",
  advanced: "Performance, testing, and advanced web concepts.",
  security: "Ensuring data integrity and secure authentication.",
  database: "Modeling and managing data with modern DBs.",
  languages: "Polyglot developer with strong language skills.",
  devtools: "Efficient workflows with essential dev tools.",
  deployment: "Deploying and scaling applications globally.",
  design: "Crafting beautiful, user-centric product designs.",
};

const techIconMap: Record<string, JSX.Element> = {
  REACT: <FaReact className="inline text-cyan-500" />,
  "NEXT JS": <FaReact className="inline text-gray-900 dark:text-white" />,
  NODE: <FaNodeJs className="inline text-green-600" />,
  CSS: <FaCss3Alt className="inline text-blue-600" />,
  HTML: <FaHtml5 className="inline text-orange-600" />,
  JAVASCRIPT: <FaJs className="inline text-yellow-400" />,
  TYPESCRIPT: <FaJs className="inline text-blue-400" />,
  PYTHON: <FaPython className="inline text-blue-500" />,
  GIT: <FaGitAlt className="inline text-orange-500" />,
  LINUX: <FaLinux className="inline text-black dark:text-white" />,
  FIGMA: <FaFigma className="inline text-pink-500" />,
  WORDPRESS: <FaWordpress className="inline text-blue-700" />,
  JAVA: <FaJava className="inline text-red-700" />,
  PHP: <FaPhp className="inline text-indigo-700" />,
};

const skillTooltips: Record<string, string> = {
  REACT: "React.js - 3+ years experience",
  "NEXT JS": "Next.js - SSR & SSG expertise",
  NODE: "Node.js - Backend & APIs",
  CSS: "CSS3 - Responsive, modern layouts",
  HTML: "HTML5 - Semantic, accessible markup",
  JAVASCRIPT: "JavaScript - ES6+, core language",
  TYPESCRIPT: "TypeScript - Type-safe JS",
  PYTHON: "Python - Scripting & automation",
  GIT: "Git - Version control",
  LINUX: "Linux - DevOps & CLI",
  FIGMA: "Figma - UI/UX design",
  WORDPRESS: "WordPress - CMS & themes",
  JAVA: "Java - OOP & backend",
  PHP: "PHP - Web backend",
};

// Animation variants
type CardKey = keyof typeof skillIcons;
const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.7 } },
};
const chipVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
};

export const Skills = () => {
  const skillsData = {
    languages: {
      title: "Languages",
      skills: ["C", "C++", "JAVA", "JAVASCRIPT", "TYPESCRIPT", "PYTHON"],
    },  
    frontend: {
      title: "Frontend",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "ANGULAR"],
    },
    backend: {
      title: "Backend", 
      skills: ["NODE",  "EXPRESS", "REST API", "JWT", "OAUTH"],
    },
    tools: {
      title: "Tools",
      skills: [ "TAILWIND CSS",  "BOOTSTRAP", "CHAKRA UI", "ANT DESIGN"],
    },
  
 
    database: {
      title: "Database",
      skills: ["MYSQL", "MONGO DB","SUPABASE","FIREBASE"],
    },
   
    devtools: {
      title: "Dev Tools",
      skills: ["GIT", "GITHUB", "VS CODE"],
    },
    deployment: {
      title: "Deployment",
      skills: ["NETLIFY", "VERCEL", "FIREBASE"],
    },
    design: {
      title: "Design",
      skills: ["UX/UI DESIGN", "FIGMA", "CANVA"],
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 tracking-tight">
            My Professional Skills
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-4">
            A rich, modern stack for building, deploying, and scaling world-class web applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([key, category], i) => (
            <motion.div
              key={key}
              className="relative flex flex-col items-center p-7 rounded-3xl border-2 border-transparent bg-white/60 dark:bg-gray-900/60 backdrop-blur-md transition-all duration-300 group overflow-hidden hover:-translate-y-1 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              {skillIcons[key]}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 text-center group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 text-center min-h-[32px]">{categoryDescriptions[key]}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill + idx}
                    custom={idx}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={chipVariants}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-200 text-xs font-semibold group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 group-hover:dark:from-blue-800 group-hover:dark:to-purple-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                          tabIndex={0}
                          aria-label={skillTooltips[skill] || skill}
                        >
                          {techIconMap[skill]}
                          {skill}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        {skillTooltips[skill] || skill}
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
