
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Outstanding All India Rank (AIR)",
      description: "Achieved an exceptional All India Rank of 12306 in a competitive coding assessment, demonstrating strong problem-solving abilities and technical proficiency.",
      icon: Trophy,
      rank: "AIR 12306",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300"
    },
    {
      title: "3rd Position in College Ranking",
      description: "Secured the 3rd position in college ranking at the esteemed CodeKaze event by Coding Ninjas, showcasing exceptional coding skills and competitive programming expertise.",
      icon: Medal,
      rank: "3rd Position",
      color: "bg-orange-100 text-orange-800 border-orange-300"
    }
  ];

  const profileLinks = [
    { name: "GeeksforGeeks", url: "#" },
    { name: "HackerRank", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "LeetCode", url: "#" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600">Celebrating milestones and competitive programming success</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">{achievement.title}</CardTitle>
                <Badge className={achievement.color}>
                  {achievement.rank}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 flex items-center gap-2 justify-center">
              <Award className="h-6 w-6 text-blue-600" />
              Profile Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {profileLinks.map((link, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors">
                  {link.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
