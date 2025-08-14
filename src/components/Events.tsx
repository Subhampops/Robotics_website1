import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [markedEvents, setMarkedEvents] = useState<{[key: string]: string}>({
    '2025-01-15': 'Robotics Workshop',
    '2025-01-22': 'Competition Prep',
    '2025-02-05': 'Tech Talk Series',
    '2025-02-14': 'Innovation Showcase'
  });

  const upcomingEvents = [
    {
      id: 1,
      title: 'Advanced Robotics Workshop',
      date: '2025-01-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Lab 301, Engineering Block',
      attendees: 45,
      description: 'Learn advanced concepts in autonomous navigation and sensor integration.'
    },
    {
      id: 2,
      title: 'National Robotics Competition Prep',
      date: '2025-01-22',
      time: '2:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      attendees: 80,
      description: 'Preparation session for the upcoming national robotics championship.'
    },
    {
      id: 3,
      title: 'Tech Talk: AI in Robotics',
      date: '2025-02-05',
      time: '5:00 PM - 7:00 PM',
      location: 'Seminar Hall A',
      attendees: 120,
      description: 'Industry experts discuss the role of artificial intelligence in modern robotics.'
    },
    {
      id: 4,
      title: 'Innovation Showcase',
      date: '2025-02-14',
      time: '9:00 AM - 5:00 PM',
      location: 'College Ground',
      attendees: 200,
      description: 'Annual showcase of student projects and innovations in robotics.'
    }
  ];

  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    if (direction === 'prev') {
      newDate.setMonth(currentMonth - 1);
    } else {
      newDate.setMonth(currentMonth + 1);
    }
    setSelectedDate(newDate);
  };

  const isEventDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return markedEvents[dateStr];
  };

  const addEvent = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const eventName = prompt('Enter event name:');
    if (eventName) {
      setMarkedEvents(prev => ({ ...prev, [dateStr]: eventName }));
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest workshops, competitions, and tech talks
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Interactive Calendar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-cyan-400" />
                  </button>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-gray-400 text-sm font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                
                {/* Days of the month */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const eventTitle = isEventDay(day);
                  const isToday = new Date().getDate() === day && 
                                 new Date().getMonth() === currentMonth && 
                                 new Date().getFullYear() === currentYear;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => addEvent(day)}
                      className={`aspect-square relative flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 group ${
                        isToday
                          ? 'bg-cyan-600 text-white'
                          : eventTitle
                          ? 'bg-blue-600/50 text-white hover:bg-blue-600/70'
                          : 'text-gray-300 hover:bg-slate-700/50'
                      }`}
                      title={eventTitle || 'Click to add event'}
                    >
                      {day}
                      {eventTitle && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full" />
                      )}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {eventTitle || 'Add Event'}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-cyan-600/10 rounded-lg border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Quick Add</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Click on any date to add a new event to the calendar.
                </p>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-cyan-400" />
                          <span className="text-gray-300">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-teal-400" />
                          <span className="text-gray-300">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <div className="flex items-center gap-2 bg-cyan-600/20 px-4 py-2 rounded-full">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">{event.attendees} attending</span>
                      </div>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;