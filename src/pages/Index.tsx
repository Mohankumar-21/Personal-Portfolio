import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Workflow } from "@/components/Workflow";
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
        <section id="about" className="relative overflow-hidden">
          <div className="py-24 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative z-10 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
              
              {/* Left Column (lg:col-span-4): Lanyard ID Badge hanging down */}
              <div className="lg:col-span-4 flex justify-center w-full sticky top-24">
                {/* Lanyard Badge Card */}
                <div className="relative group/badge flex flex-col items-center pt-20 pb-6 w-full max-w-[280px]">
                  {/* Lanyard Rope */}
                  <div className="absolute top-0 left-1/2 w-1 h-24 bg-gradient-to-b from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-600 -translate-x-1/2 z-0 shadow-inner rounded-t" />
                  
                  {/* Lanyard Clip */}
                  <div className="absolute top-20 left-1/2 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded border border-gray-500 -translate-x-1/2 z-10 shadow-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-600 rounded-full" />
                  </div>
                  
                  {/* The actual ID Card */}
                  <div className="bg-gray-950 dark:bg-black w-full rounded-2xl p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] border border-gray-800/80 relative z-20 transform -rotate-3 group-hover/badge:rotate-2 group-hover/badge:scale-[1.03] transition-all duration-700 ease-out flex flex-col items-center">
                    {/* Cutout Hole */}
                    <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-950 dark:bg-black rounded-t-xl -translate-x-1/2 flex justify-center items-center border-t border-x border-gray-800/80">
                      <div className="w-8 h-2 bg-black/80 rounded-full shadow-inner" />
                    </div>
                    
                    {/* Top Badge Brand Bar */}
                    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2 text-center text-[10px] font-bold text-white tracking-widest uppercase mb-4 shadow-inner">
                      Developer ID
                    </div>
                    
                    {/* Image Container */}
                    <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-white border border-gray-200 relative mb-4">
                      <img 
                        src="/images/profile-badge.png" 
                        alt="MohanKumar Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Identity Info */}
                    <div className="text-center w-full">
                      <h3 className="text-white text-lg font-black tracking-wide leading-tight">MOHANKUMAR G</h3>
                      <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mt-1">Full Stack Developer</p>
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-gray-800 my-4" />

                    {/* Barcode representation */}
                    <div className="flex flex-col items-center w-full">
                      <div className="flex items-center justify-between gap-0.5 h-8 w-4/5 bg-white p-1 rounded">
                        <div className="w-1 h-full bg-black" />
                        <div className="w-[1px] h-full bg-black" />
                        <div className="w-2 h-full bg-black" />
                        <div className="w-[1px] h-full bg-black" />
                        <div className="w-[3px] h-full bg-black" />
                        <div className="w-1 h-full bg-black" />
                        <div className="w-[2px] h-full bg-black" />
                        <div className="w-1 h-full bg-black" />
                        <div className="w-[1px] h-full bg-black" />
                        <div className="w-3 h-full bg-black" />
                        <div className="w-[1px] h-full bg-black" />
                        <div className="w-2 h-full bg-black" />
                        <div className="w-1 h-full bg-black" />
                      </div>
                      <span className="text-[8px] text-gray-500 font-mono tracking-widest mt-1">NO. 21-02-2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (lg:col-span-8): Content & Stats Grid */}
              <div className="lg:col-span-8 flex flex-col gap-8 w-full">
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">About Me</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-8 rounded-full" />
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a passionate Full Stack Developer with expertise in modern web technologies. I love creating scalable applications and solving complex problems with clean, efficient code. My experience spans across frontend and backend development, with a strong focus on user experience and performance optimization.
                  </p>
                </div>

                {/* Core Skills Badges */}
                <div className="flex flex-wrap gap-4">
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

                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-4" />

                {/* Grid for Coding Platform Analytics */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Coding Platform Stats</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {/* GFG */}
                  <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 w-full">
                    <div className="flex flex-col items-start">
                      <div className="text-3xl font-extrabold text-green-700 mb-1">150+</div>
                      <div className="text-green-800 dark:text-green-300 text-xs mb-3">Problems Solved</div>
                      <a href="https://www.geeksforgeeks.org/user/gmk94k6g/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition">View</a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG" className="w-10 h-10 mb-1" />
                      <div className="font-semibold text-green-900 dark:text-green-200 text-sm">GeeksforGeeks</div>
                    </div>
                  </div>

                  {/* LeetCode */}
                  <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/20 w-full">
                    <div className="flex flex-col items-start">
                      <div className="text-3xl font-extrabold text-yellow-700 mb-1">40+</div>
                      <div className="text-yellow-800 dark:text-yellow-300 text-xs mb-2">Problems Solved</div>
                      <a href="https://leetcode.com/u/MohanKumar021/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded bg-yellow-500 text-white text-xs font-semibold hover:bg-yellow-600 transition">View</a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-10 h-10 mb-1 rounded" />
                      <div className="font-semibold text-yellow-900 dark:text-yellow-200 text-sm">LeetCode</div>
                    </div>
                  </div>

                  {/* HackerRank */}
                  <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/20 w-full">
                    <div className="flex flex-col items-start">
                      <div className="text-3xl font-extrabold text-teal-700 mb-1">100+</div>
                      <div className="text-teal-800 dark:text-teal-300 text-xs mb-2">Problems Solved</div>
                      <a href="https://www.hackerrank.com/profile/gmk9155" target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition">View</a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="w-10 h-10 mb-1 rounded" />
                      <div className="font-semibold text-teal-900 dark:text-teal-200 text-sm">HackerRank</div>
                    </div>
                  </div>

                  {/* Guvi & CodeChef */}
                  <div className="flex flex-row items-center justify-between p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/20 w-full">
                    <div className="flex flex-col items-start">
                      <div className="text-3xl font-extrabold text-indigo-700 mb-1">100+</div>
                      <div className="text-indigo-800 dark:text-indigo-300 text-xs mb-2">Problems Solved</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center mb-2">
                        <img src="/images/guvi.png" alt="Guvi" className="w-8 h-8 rounded bg-white mr-2" onError={(e) => {e.currentTarget.style.display='none';}} />
                        <img src="https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg" alt="CodeChef" className="w-8 h-8 rounded bg-white" onError={(e) => {e.currentTarget.style.display='none';}} />
                      </div>
                      <div className="font-semibold text-indigo-900 dark:text-indigo-200 text-sm">Guvi & CodeChef</div>
                    </div>
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
        <Workflow />
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
