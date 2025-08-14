import React from 'react';
import { Mail, Linkedin, Github, User } from 'lucide-react';

const Team: React.FC = () => {
  const coordinators = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Faculty Coordinator",
      department: "Electronics & Communication",
      email: "rajesh.kumar@aec.edu.in",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com"
    },
    {
      id: 2,
      name: "Prof. Anita Sharma",
      role: "Co-Faculty Coordinator",
      department: "Computer Science & Engineering",
      email: "anita.sharma@aec.edu.in",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Arjun Mishra",
      role: "President",
      year: "4th Year, CSE",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "arjun.mishra@student.aec.edu.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Vice President",
      year: "3rd Year, ECE",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "priya.singh@student.aec.edu.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      id: 3,
      name: "Rohit Gupta",
      role: "Technical Lead",
      year: "4th Year, ME",
      image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "rohit.gupta@student.aec.edu.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      id: 4,
      name: "Sneha Yadav",
      role: "Project Manager",
      year: "3rd Year, CSE",
      image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "sneha.yadav@student.aec.edu.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      id: 5,
      name: "Amit Kumar",
      role: "Hardware Specialist",
      year: "4th Year, ECE",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "amit.kumar@student.aec.edu.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      id: 6,
      name: "Kavya Patel",
      role: "Software Developer",
      year: "2nd Year, CSE",
      image: "https://images.pexels.com/photos/3785073/pexels-photo-3785073.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "kavya.patel@student.aec.edu.in",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation in robotics at AEC
          </p>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Faculty <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Coordinators</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {coordinators.map((coordinator) => (
              <div
                key={coordinator.id}
                className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    className="w-full h-full rounded-full object-cover border-4 border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {coordinator.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">{coordinator.role}</p>
                <p className="text-gray-300 mb-4">{coordinator.department}</p>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="p-2 bg-cyan-600/20 rounded-lg hover:bg-cyan-600/30 transition-colors duration-200"
                    title="Email"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </a>
                  <a
                    href={coordinator.linkedin}
                    className="p-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Team */}
        <div>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-3 border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-600/10 group-hover:from-cyan-400/20 group-hover:to-blue-600/20 transition-all duration-300" />
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.year}</p>
                </div>

                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-cyan-600/20 rounded-lg hover:bg-cyan-600/30 transition-colors duration-200 group/link"
                    title="Email"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 group-hover/link:scale-110 transition-transform" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="p-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors duration-200 group/link"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 group-hover/link:scale-110 transition-transform" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 bg-gray-600/20 rounded-lg hover:bg-gray-600/30 transition-colors duration-200 group/link"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4 text-gray-400 group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/20">
          <User className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students interested in robotics, programming, 
            and innovation. Join us to be part of something extraordinary!
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
            Apply to Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;