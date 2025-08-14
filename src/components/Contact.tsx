import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["roboticsclub@aec.edu.in", "info.robotics@aec.edu.in"],
      color: "text-cyan-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 9876543210", "+91 9876543211"],
      color: "text-blue-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Lab 301, Engineering Block", "Asansol Engineering College"],
      color: "text-teal-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-yellow-400"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com",
      color: "hover:text-blue-500"
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
        </svg>
      ),
      url: "https://whatsapp.com",
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Want to join our club? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`p-2 rounded-lg bg-slate-700/50 ${info.color} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`p-3 bg-slate-700/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-bold text-white mb-3">Quick Info</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• New member orientation every month</li>
                <li>• Weekly workshops and training sessions</li>
                <li>• Open lab access for registered members</li>
                <li>• Competition teams forming quarterly</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="workshop">Workshop Information</option>
                    <option value="competition">Competition Details</option>
                    <option value="collaboration">Collaboration Proposal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">How can I join the club?</h4>
                <p className="text-gray-300 text-sm">
                  Visit us during our monthly orientation sessions or contact us directly. All students are welcome regardless of their experience level.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Are there any fees?</h4>
                <p className="text-gray-300 text-sm">
                  Basic membership is free. Some specialized workshops or competitions may have nominal fees for materials and resources.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Do I need prior experience?</h4>
                <p className="text-gray-300 text-sm">
                  Not at all! We welcome beginners and provide comprehensive training from basics to advanced levels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">What equipment is available?</h4>
                <p className="text-gray-300 text-sm">
                  We have Arduino kits, sensors, 3D printers, soldering stations, and various robotics development tools available for members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;