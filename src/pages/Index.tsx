import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <Navigation />
      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <div className="py-24 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
              {/* Left: About Me and Core Skills (minimalist list) */}
              <div className="relative z-10 pr-0 md:pr-12 flex flex-col gap-10">
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">About Me</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-8 rounded-full" />
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                    I'm a passionate Full Stack Developer with expertise in modern web technologies. I love creating scalable applications and solving complex problems with clean, efficient code. My experience spans across frontend and backend development, with a strong focus on user experience and performance optimization.
                  </p>
                </div>
                {/* Core Skills as unified gradient badges with matching number circles */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-blue-900 font-bold text-md transition-transform duration-200 hover:scale-105" style={{minHeight: '56px'}}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold mr-3 text-sm">5+</span>
                    Programming Languages
                  </span>
                  <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-blue-900 font-bold text-md transition-transform duration-200 hover:scale-105" style={{minHeight: '56px'}}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold mr-3 text-sm">7+</span>
                    Frameworks & Libraries
                  </span>
                  <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-blue-900 font-bold text-md transition-transform duration-200 hover:scale-105" style={{minHeight: '56px'}}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold mr-3 text-sm">4+</span>
                    Databases
                  </span>
                  <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-blue-900 font-bold text-md transition-transform duration-200 hover:scale-105" style={{minHeight: '56px'}}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold mr-3 text-sm">4+</span>
                    Tools & Platforms
                  </span>
                </div>
              </div>
              {/* Right: Coding Platform Analytics as horizontal cards: left side number, right side logo/name */}
              <div className="relative z-10 flex flex-col gap-5">
                {/* GFG */}
                <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-green-50 dark:bg-green-900/10 md:ml-0 md:mr-auto w-full max-w-sm mx-auto">
                  {/* Left: Number, subtitle, View */}
                  <div className="flex flex-col items-start">
                    <div className="text-3xl font-extrabold text-green-700 mb-1">150+</div>
                    <div className="text-green-800 dark:text-green-300 text-xs mb-3">Problems Solved</div>
                    <a href="https://www.geeksforgeeks.org/user/gmk94k6g/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition">View</a>
                  </div>
                  {/* Right: Logo and name */}
                  <div className="flex flex-col items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG" className="w-10 h-10 mb-1" />
                    <div className="font-semibold text-green-900 dark:text-green-200 text-md">GeeksforGeeks</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 md:ml-auto md:mr-0 w-full max-w-sm mx-auto">
                  <div className="flex flex-col items-start">
                    <div className="text-3xl font-extrabold text-yellow-700 mb-1">40+</div>
                    <div className="text-yellow-800 dark:text-yellow-300 text-xs mb-2">Problems Solved</div>
                    <a href="https://leetcode.com/u/MohanKumar021/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded bg-yellow-500 text-white text-xs font-semibold hover:bg-yellow-600 transition">View</a>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-10 h-10 mb-1 rounded" />
                    <div className="font-semibold text-yellow-900 dark:text-yellow-200 text-md">LeetCode</div>
                  </div>
                </div>
                {/* HackerRank */}
                <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-teal-50 dark:bg-teal-900/10 md:ml-0 md:mr-auto w-full max-w-sm mx-auto">
                  <div className="flex flex-col items-start">
                    <div className="text-3xl font-extrabold text-teal-700 mb-1">100+</div>
                    <div className="text-teal-800 dark:text-teal-300 text-xs mb-2">Problems Solved</div>
                    <a href="https://www.hackerrank.com/profile/gmk9155" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition">View</a>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="w-10 h-10 mb-1 rounded" />
                    <div className="font-semibold text-teal-900 dark:text-teal-200 text-md">HackerRank</div>
                  </div>
                </div>
                {/* LeetCode */}
              
                {/* Guvi & CodeChef */}
                <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 md:ml-auto md:mr-0 w-full max-w-sm mx-auto">
                  <div className="flex flex-col items-start">
                    <div className="text-3xl font-extrabold text-indigo-700 mb-1">100+</div>
                    <div className="text-indigo-800 dark:text-indigo-300 text-xs mb-2">Problems Solved</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center mb-2">
                      <img src="/images/guvi.png" alt="Guvi" className="w-8 h-8 rounded bg-white mr-2" onError={(e) => {e.currentTarget.style.display='none';}} />
                      <img src="https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg" alt="CodeChef" className="w-8 h-8 rounded bg-white" onError={(e) => {e.currentTarget.style.display='none';}} />
                    </div>
                    <div className="font-semibold text-indigo-900 dark:text-indigo-200 text-md">Guvi & CodeChef</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;
