import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gmk9155@gmail.com",
      href: "mailto:gmk9155@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8778232531",
      href: "tel:+918778232531"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Mohankumar-21"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/mohankumar-g-65b15b225/"
    },
    {
      icon: FileText,
      label: "Portfolio",
      href: `${window.location.origin}` // Add your portfolio URL here if available
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-blue-100">Ready to collaborate on your next project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-1 flex flex-col justify-center">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center border border-white/20 transition-colors duration-200 hover:bg-white/25">
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 mb-0.5">{contact.label}</p>
                    <a 
                      href={contact.href}
                      className="text-white font-medium hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                      style={{ textDecoration: 'none' }}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Divider for mobile */}
          <div className="block md:hidden my-4">
            <div className="h-px bg-white/20 w-full" />
          </div>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-center">Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1 flex flex-col justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ textDecoration: 'none' }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <social.icon className="mr-3 h-5 w-5" />
                    {social.label}
                  </Button>
                </a>
              ))}
              <div className="pt-4">
                <a href="mailto:gmk9155@gmail.com" className="block" style={{ textDecoration: 'none' }}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <p className="text-blue-100">
            © 2024 MohanKumar G. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
