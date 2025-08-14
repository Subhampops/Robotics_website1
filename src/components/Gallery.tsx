import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Bot, Zap, Trophy } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Autonomous Robot Competition",
      category: "Competition"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/8566589/pexels-photo-8566589.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Humanoid Robot Development",
      category: "Development"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Team Workshop Session",
      category: "Workshop"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/8566577/pexels-photo-8566577.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Robot Assembly Lab",
      category: "Development"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/8386428/pexels-photo-8386428.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "National Robotics Championship",
      category: "Competition"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/8566563/pexels-photo-8566563.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "AI Programming Workshop",
      category: "Workshop"
    }
  ];

  const categories = ["All", "Competition", "Development", "Workshop"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(newIndex);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Competition': return <Trophy className="w-5 h-5" />;
      case 'Development': return <Bot className="w-5 h-5" />;
      case 'Workshop': return <Zap className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Robotics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our journey through competitions, workshops, and innovative robot developments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-cyan-500/20'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(image.category)}
                  <span className="text-cyan-400 text-sm font-medium">{image.category}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors duration-200"
            >
              <X className="w-8 h-8 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="max-w-5xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-bold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  {getCategoryIcon(filteredImages[selectedImage].category)}
                  <span className="text-cyan-400 font-medium">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;