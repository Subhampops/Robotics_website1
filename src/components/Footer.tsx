import React from 'react';
import { Bot, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/roboticsclub.aec",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/roboticsclub_aec",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/company/roboticsclub-aec",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter/X",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/roboticsclub_aec",
      color: "hover:text-blue-300"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://whatsapp.com/channel/roboticsclub_aec",
      color: "hover:text-green-500"
    },
    {
      name: "Discord",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
        </svg>
      ),
      url: "https://discord.gg/roboticsclub-aec",
      color: "hover:text-indigo-500"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Arduino Tutorials", href: "#" },
    { name: "Project Documentation", href: "#" },
    { name: "Competition Guidelines", href: "#" },
    { name: "Workshop Materials", href: "#" },
    { name: "Alumni Network", href: "#" }
  ];

  return (
    <footer className="bg-slate-900/95 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">RoboClub AEC</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Building the future through robotics innovation at Asansol Engineering College. 
              Join us in exploring cutting-edge technology and developing tomorrow's solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-slate-700/50`}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:roboticsclub@aec.edu.in"
                  className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200"
                >
                  roboticsclub@aec.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200"
                >
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Lab 301, Engineering Block</div>
                  <div>Asansol Engineering College</div>
                  <div>Asansol, West Bengal 713305</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Robotics Club, Asansol Engineering College. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Code of Conduct
            </a>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            Made with ❤️ by the Robotics Club Development Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;