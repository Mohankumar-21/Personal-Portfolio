
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Indian Infra Pvt. Ltd",
      location: "Chennai, India",
      period: "Nov 2024 - Present",
      current: true,
      achievements: [
        "Developed and maintained scalable, high-performance web applications using React.js, Chakra UI, Firebase, Supabase, and Node.js",
        "Collaborated with cross-functional teams to architect and deliver optimized full-stack solutions for infrastructure and construction management, reducing manual workflow by 40%",
        "Integrated RESTful APIs to ensure efficient communication between front-end and back-end, improving data load speed by 30%",
        "Built responsive, mobile-friendly UIs using Tailwind CSS and Chakra UI, enhancing user experience and accessibility across devices",
        "Utilized Git and GitHub for effective version control, branch management, and team collaboration in an Agile-inspired workflow"
      ]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "GUVI",
      location: "Chennai, India",
      period: "Feb 2024 - Oct 2024",
      current: false,
      achievements: [
        "Developed and maintained robust web applications with MongoDB, Express.js, React, and Node.js",
        "Engineered and analyzed automated test scripts using Cypress to ensure quality and reliability of web applications",
        "Worked closely with experienced developers to design, build, and enhance web applications using the MERN stack",
        "Gained deep insights into modern web development practices"
      ]
    },
    
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
                
                <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                          {exp.company}
                        </CardDescription>
                      </div>
                      {exp.current && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 animate-pulse">
                          Current Position
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-2 rounded-lg bg-white/50 dark:bg-gray-800/30 hover:bg-white/80 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:translate-x-1"
                          style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
