import React from 'react';
import { ChevronRight, Bot, Zap, Users, Trophy, Calendar, ArrowDown } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (section: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Bot className="w-20 h-20 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Robotics Club
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                AEC
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Welcome to the future of innovation at Asansol Engineering College. 
              We build robots, we shape tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('about')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Our World
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="group border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg text-cyan-400 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Upcoming Events
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-slate-800/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Robots Built</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Trophy className="w-12 h-12 text-teal-400 mx-auto mb-4 group-hover:animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Competitions Won</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:animate-pulse" />
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-300">Years Strong</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Highlights */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40">
              <Bot className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Robot Development</h3>
              <p className="text-gray-300">
                From autonomous vehicles to humanoid robots, we design and build cutting-edge robotic systems.
              </p>
            </div>
            <div className="group bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40">
              <Zap className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Workshops & Training</h3>
              <p className="text-gray-300">
                Regular workshops on programming, electronics, and mechanical design for all skill levels.
              </p>
            </div>
            <div className="group bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40">
              <Trophy className="w-12 h-12 text-teal-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Competitions</h3>
              <p className="text-gray-300">
                Participate in national and international robotics competitions to showcase our innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;