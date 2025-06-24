import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Government College of Engineering, Salem",
      location: "Salem, India",
      period: "Nov 2020 - June 2024",
      cgpa: "9.33",
      type: "Undergraduate"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Swamy Vivekanandar Matric Higher Secondary School, K.K.Nagar",
      location: "Salem, India",
      period: "2018 - 2020",
      grade: "90.5%",
      type: "Higher Secondary"
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Swamy Vivekanandar Matric Higher Secondary School, K.K.Nagar",
      location: "Salem, India",
      period: "2017 - 2018",
      grade: "96%",
      type: "Secondary School"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">My academic background</p>
        </div>

        {/* Flat Timeline */}
        <div className="relative border-l-2 border-blue-500 pl-8 space-y-10 mb-8">
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-5 top-2 w-6 h-6 flex items-center justify-center bg-blue-500 rounded-full border-2 border-white dark:border-gray-900">
                <GraduationCap className="h-4 w-4 text-white" />
              </span>
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{edu.degree}</h3>
                    <div className="text-base font-medium text-blue-700 dark:text-blue-300 mb-1">{edu.institution}</div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-300 dark:border-blue-700 text-xs self-start md:self-center">{edu.type}</Badge>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <div className="flex items-center gap-1"><MapPin className="h-4 w-4" />{edu.location}</div>
                  <div className="flex items-center gap-1"><Calendar className="h-4 w-4" />{edu.period}</div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <GraduationCap className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                    {edu.cgpa && `CGPA: ${edu.cgpa}`}
                    {edu.grade && `Grade: ${edu.grade}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
