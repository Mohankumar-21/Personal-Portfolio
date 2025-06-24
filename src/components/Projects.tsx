import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";

export const Projects = () => {
  // Example: Add more projects to test Load More
  const projects = [
    {
      title: "Doctor Appointment Application",
      description: "A comprehensive MERN stack application enabling seamless user logins and appointment scheduling with preferred healthcare providers.",
      features: [
        "Dual functionality for patients and healthcare providers",
        "Streamlined appointment booking system",
        "Admin approval triggers automatic profile updates",
        "Efficient healthcare provider role management"
      ],
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/Mohankumar-21/Doctor-Appointment",
      demo: "https://doctor-appointment-backend-vo36.netlify.app/",
      image: "/images/doctor.png"
    },
    {
      title: "E-Commerce Website",
      description: "A visually captivating e-commerce platform built with the MERN stack, focusing on enhanced user experience and seamless product management.",
      features: [
        "Intuitive product category browsing",
        "Comprehensive cart management system",
        "Administrator panel for product uploads",
        "Responsive design for all devices"
      ],
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Mohankumar-21/Ecommerce-MERN",
      demo: "https://ecommerce-front-21.netlify.app/",
      image: "/images/ecommerce.png"
    },
    {
      title: "Inventory Management System",
      description: "A robust inventory management system for tracking stock, suppliers, and sales in real-time, designed for small and medium businesses.",
      features: [
        "Real-time stock tracking",
        "Supplier and purchase order management",
        "Sales analytics dashboard",
        "Low-stock alerts and notifications"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js"],
      github: "https://github.com/Mohankumar-21/Inventory-Dashboard",
      demo: "https://inventory-dashboard-theta.vercel.app/",
      image: "/images/inventory.png"
    },
    {
      title: "Chat Application",
      description: "A real-time chat application supporting group and private messaging, emoji reactions, and online presence indicators.",
      features: [
        "Group and private chat rooms",
        "Real-time messaging with Socket.io",
        "Emoji and file sharing support",
        "User online/offline status"
      ],
      technologies: ["React.js", "Node.js", "Socket.io", "Express.js", "MongoDB"],
      github: "https://github.com/Mohankumar-21/Chatapp-Socket",
      demo: "https://chat-app-website.netlify.app/email",
      image: "/images/chatapp.png"
    },
    {
      title: "Travel Booking Website",
      description: "A modern travel booking platform for flights, hotels, and tours, featuring search, booking, and user reviews.",
      features: [
        "Flight, hotel, and tour search",
        "Secure online booking system",
        "User reviews and ratings",
        "Personalized recommendations"
      ],
      technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
      github: "https://github.com/Mohankumar-21/Travel-Site",
      demo: "https://travel-bootstrap.netlify.app/",
      image: "/images/travel.png"
    },
    {
      title: "News Application",
      description: "A real-time news application delivering the latest headlines, articles, and updates from multiple sources with category filtering.",
      features: [
        "Live news feed",
        "Category and keyword filtering",
        "Responsive design for all devices",
        "Bookmark and share articles"
      ],
      technologies: ["React.js", "NewsAPI", "Tailwind CSS"],
      github: "https://github.com/Mohankumar-21/News-Application",
      demo: "https://github.com/Mohankumar-21/News-Application",
      image: "/images/news.png"
    }
  ];

  // Pagination state
  const PROJECTS_PER_PAGE = 3;
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  
  return (
    <section className="py-20 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-2">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Showcasing my best work and technical expertise</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl overflow-hidden transition-all duration-200 hover:border-blue-600 dark:hover:border-blue-400 focus-within:border-blue-600 dark:focus-within:border-blue-400"
            >
              {/* Project Image/Logo - full width banner */}
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-40 object-contain bg-white border-b border-gray-100 dark:border-gray-800" />
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
                  <ImageIcon className="w-10 h-10 text-blue-300 dark:text-blue-400" />
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors truncate">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between gap-3">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white dark:text-gray-900">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setVisibleCount((c) => c + PROJECTS_PER_PAGE)}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white dark:text-gray-900 px-8 py-2 rounded-full"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
