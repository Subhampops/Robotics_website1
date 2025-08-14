import React, { useEffect, useState } from 'react';
import { Target, Eye, TrendingUp, Users, Award, Lightbulb } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [counters, setCounters] = useState({
    members: 0,
    projects: 0,
    awards: 0,
    workshops: 0
  });

  useEffect(() => {
    const targets = {
      members: 150,
      projects: 50,
      awards: 25,
      workshops: 100
    };

    const intervals = Object.keys(targets).map(key => {
      return setInterval(() => {
        setCounters(prev => {
          const target = targets[key as keyof typeof targets];
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return { ...prev, [key]: current + Math.ceil(target / 100) };
          }
          return prev;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of robotics at Asansol Engineering College since 2019
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="group bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-cyan-400 mr-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be the leading robotics community in Eastern India, fostering innovation, creativity, and 
              technological excellence. We envision a future where our members become pioneers in robotics, 
              AI, and automation technologies, contributing to society's advancement.
            </p>
          </div>

          <div className="group bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To provide a collaborative platform for students to explore, learn, and innovate in robotics. 
              We organize hands-on workshops, competitions, and projects that bridge the gap between 
              theoretical knowledge and practical implementation.
            </p>
          </div>
        </div>

        {/* Growth Impact */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counters.members}+</div>
              <div className="text-gray-300">Active Members</div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counters.projects}+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counters.awards}+</div>
              <div className="text-gray-300">Awards Won</div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counters.workshops}+</div>
              <div className="text-gray-300">Workshops Conducted</div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-slate-800/30 rounded-2xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push boundaries and explore new frontiers in robotics and automation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork and collective learning to achieve excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for the highest standards in everything we do, from projects to competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;