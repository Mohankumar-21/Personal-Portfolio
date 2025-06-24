import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { InteractiveParticles } from "./InteractiveParticles";
import { useState, useEffect } from "react";
import { AuroraParticles } from "./AuroraParticles";
import styles from "./Hero.module.css";

const roles = [
  "Full Stack Developer",
  "React & Node.js Enthusiast",
  "UI/UX Explorer",
  "Open Source Contributor",
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 350); // fade out duration
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Aurora/Gradient Wave Animation */}

      {/* Floating geometric shapes overlay */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          cx="220"
          cy="300"
          rx="120"
          ry="80"
          fill="#a5b4fc"
          fillOpacity="0.10"
        >
          <animate
            attributeName="cy"
            values="300;320;300"
            dur="8s"
            repeatCount="indefinite"
          />
        </ellipse>
        <circle cx="1240" cy="600" r="70" fill="#c4b5fd" fillOpacity="0.10">
          <animate
            attributeName="cy"
            values="600;620;600"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <ellipse
          cx="400"
          cy="150"
          rx="60"
          ry="40"
          fill="#818cf8"
          fillOpacity="0.08"
        >
          <animate
            attributeName="cx"
            values="400;420;400"
            dur="12s"
            repeatCount="indefinite"
          />
        </ellipse>
      </svg>
      <InteractiveParticles />
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Hey there greeting with spiral accent */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-300">
              Hey there <span className={`inline-block ${styles['animate-wiggle']}`}>🖐️</span>
            </span>
            <span className="inline-block w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path
                  d="M12 12c4-4 8 0 4 4s-8 0-4-4z"
                  stroke="#6366f1"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M12 12c-4 4-8 0-4-4s8 0 4 4z"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </div>
          {/* Animated gradient name */}
          <h1 className="text-4xl md:text-7xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-lg animate-gradient-x">
            MohanKumar G
          </h1>
          {/* Dynamic subtitle with animated underline */}
          <div className="relative mb-6 h-12 flex flex-col items-center md:items-start justify-center">
            <span
              className={`text-2xl md:text-3xl text-blue-700 dark:text-blue-300 font-semibold transition-all duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              } animate-role-fade`}
              style={{ transition: "opacity 0.35s" }}
            >
              {roles[currentRole]}
            </span>
            <span className="block w-32 h-1 mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full animate-pulse" />
          </div>
          {/* Tagline */}
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium max-w-2xl mx-auto md:mx-0">
            Building seamless digital experiences with code, creativity, and
            passion.
          </p>
          {/* Bio */}
          <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I specialize in crafting scalable web applications and solving
            complex problems with clean, efficient code. My journey spans
            frontend and backend, always with a focus on user experience and
            performance.
          </p>
          <div className="w-24 h-1 mx-0 mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full opacity-70" />
          {/* Social links with tooltips and animated hover */}
          <div className="flex justify-center md:justify-start gap-6 mb-4">
            <a
              href="https://github.com/Mohankumar-21"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 border-2 border-gray-300/50 dark:border-gray-600/50 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-md bg-white/20 dark:bg-gray-900/20 border-white/30"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/mohankumar-g-65b15b225/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 border-2 border-gray-300/50 dark:border-gray-600/50 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-md bg-white/20 dark:bg-gray-900/20 border-white/30"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
          </div>
          {/* CTA Buttons with glassmorphism/glow */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <a
              href="mailto:mohankumarg.official@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-white/30">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1SZzlmiaBjfiUX_EDgQShxLgHCe_Ai7KY/view?usp=sharing" download>
              <Button
                variant="outline"
                className="border-2 border-purple-600/50 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md bg-white/20 dark:bg-gray-900/20 border-white/30"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
        {/* Right: Developer GIF Illustration with floating tech cards and extra elements */}
        <div
          className={`flex-1 flex items-center justify-center mt-10 md:mt-0 relative min-h-[340px] ${styles.croppedImageContainer}`}
        >
          {/* Floating tech cards - improved positions */}
          <span
            className={`absolute top-2 left-20 bg-green-100 text-green-700 font-bold px-4 py-2 rounded-xl shadow-lg rotate-[-8deg] ${styles.floatSlow}`}
          >
            MERN{" "}
          </span>
          <span
            className={`absolute top-24 left-2 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full shadow-md rotate-6 ${styles.float}`}
          >
            Java
          </span>
          <span
            className={`absolute top-8 right-10 bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-lg shadow-md -rotate-3 ${styles.float}`}
          >
            C++
          </span>
          <span
            className={`absolute bottom-48 right-5 bg-yellow-100 text-yellow-700 font-semibold px-4 py-2 rounded-2xl shadow-lg rotate-12 ${styles.floatSlow}`}
          >
            HTML
          </span>
          <span
            className={`absolute bottom-40 left-5 bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-lg shadow-md -rotate-2 ${styles.float}`}
          >
            CSS
          </span>
          {/* Extra floating elements */}
          <span
            className={`absolute bottom-16 left-16  text-2xl ${styles.floatSlow}`}
          >
            ☕
          </span>

          <img
            src="/images/crop7.gif"
            alt="Developer at work"
            className={`w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover object-center ${styles.croppedImage}`}
          />
        </div>
      </div>
      {/* Centered Scroll Down Indicator at the bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex flex-col items-center justify-center z-20">
        <span className="animate-bounce">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 p-1 shadow-2xl ring-2 ring-white/40">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/80 dark:bg-gray-900/80">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v8M12 16l-4-4M12 16l4-4"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </span>
        <span className="mt-1 text-blue-500 dark:text-blue-300 text-sm font-medium opacity-80">
          Scroll Down
        </span>
      </div>
    </section>
  );
};
