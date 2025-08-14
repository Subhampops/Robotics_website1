import React from 'react';
import { Quote, Star, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer at TCS",
      year: "Alumni 2023",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The Robotics Club at AEC transformed my understanding of technology. The hands-on experience with Arduino, sensors, and programming gave me a solid foundation that helped me excel in my career. The collaborative environment and mentorship from seniors made learning enjoyable and effective.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Robotics Engineer at Boston Dynamics",
      year: "Alumni 2022",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Joining the Robotics Club was the best decision I made in college. Working on real projects, participating in competitions, and learning from industry experts prepared me for my dream job. The club's focus on innovation and practical learning is unmatched.",
      rating: 5
    },
    {
      id: 3,
      name: "Arjun Singh",
      role: "AI Researcher at IIT Delhi",
      year: "Alumni 2021",
      image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The Robotics Club provided me with opportunities to explore cutting-edge technologies like machine learning and computer vision. The projects I worked on during my time there directly contributed to my research interests and academic pursuits.",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Agarwal",
      role: "Current Student, 3rd Year",
      year: "Current Member",
      image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Being part of the Robotics Club has been an incredible journey. The senior members are always willing to help, and the faculty coordinators provide excellent guidance. I've learned more here than in any classroom, and the friendships I've made are invaluable.",
      rating: 5
    },
    {
      id: 5,
      name: "Vikash Kumar",
      role: "Startup Founder - RoboTech Solutions",
      year: "Alumni 2020",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The entrepreneurial spirit fostered by the Robotics Club inspired me to start my own company. The technical skills, project management experience, and network I built here were instrumental in launching my robotics startup. Forever grateful to this amazing community!",
      rating: 5
    },
    {
      id: 6,
      name: "Anjali Mehta",
      role: "Research Scientist at DRDO",
      year: "Alumni 2019",
      image: "https://images.pexels.com/photos/3785073/pexels-photo-3785073.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The Robotics Club at AEC is where I discovered my passion for defense technology and autonomous systems. The exposure to various robotics domains and the culture of innovation here shaped my career path and helped me contribute to national security projects.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our members and alumni say about their transformative experience with the Robotics Club
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-cyan-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-2 border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-600/10 group-hover:from-cyan-400/20 group-hover:to-blue-600/20 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-cyan-400 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.year}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/20">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Numbers</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-gray-300">Placement Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-300">Alumni Network</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-300">Industry Partners</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">4.9/5</div>
              <div className="text-gray-300">Member Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 max-w-2xl mx-auto">
            <User className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of students who have transformed their careers through our robotics programs.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
              Become a Member Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;