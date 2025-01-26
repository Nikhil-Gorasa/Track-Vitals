import React, { useRef, useState, useEffect } from 'react';
import { Activity, Users, Image, Youtube, Presentation as PresentationScreen, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TeamMember from './components/TeamMember';
import gallery1 from './assets/Gallery/1.jpg';
import gallery2 from './assets/Gallery/2.jpg';
import gallery3 from './assets/Gallery/3.jpg';
import gallery4 from './assets/Gallery/4.jpg';
import gallery5 from './assets/Gallery/5.jpg';
import logo from './assets/logo.png';
import ParticleBackground from './components/ParticleBackground';

import shiva from './assets/TeamMembers/shivasai.jpg';
import nikhil from './assets/TeamMembers/nikhil.jpg';
import charan from './assets/TeamMembers/charan.jpg';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Gallery', ref: galleryRef },
    { name: 'Presentation', ref: presentationRef },
    { name: 'Video', ref: videoRef },
    { name: 'Team', ref: teamRef }
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    {
      name: 'Shiva Sai',
      role: 'Lead Track Analysis Engineer',
      image: shiva,
      description: 'Expert in railway track monitoring and vibration analysis, specializing in early detection of track anomalies.',
      connection: 'https://www.linkedin.com/in/shiva-sai-4606a3287/'
    },
    {
      name: 'Nikhil Gorasa',
      role: 'Sensor Systems Specialist',
      image: nikhil,
      description: 'Specialist in sensor technologies and data acquisition for real-time railway safety monitoring.',
      connection: 'https://linktr.ee/Nikhil_Gorasa'
    },
    {
      name: 'Charan Reddy',
      role: 'Data Analysis Director',
      image: charan,
      description: 'Experienced in anomaly detection and data visualization for railway infrastructure integrity.',
      connection: 'https://www.linkedin.com/in/charan-reddy-3636b6288/'
    },
  ];

  return (
    <>
      <ParticleBackground />
      <div className="min-h-screen relative">
        <Navbar links={navLinks} onNavigate={scrollToSection} />
        
        {/* Hero Section */}
        <section 
          id="home"
          ref={homeRef}
          className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <img 
              src={logo} 
              alt="Track Vitals Logo" 
              className="w-32 h-32 mx-auto mb-1 animate-pulse"
              style={{ position:'relative', top: '30px', right: '20px' }}
            />
            <h1 className="text-6xl font-bold mb-6 animate-fade-in text-white">
              Track Vitals
            </h1>
            <p className="text-2xl max-w-2xl mx-auto animate-slide-up text-gray-300">
                Enhancing Railway Safety with Real-Time Vibration and Crack Detection Technology 
            </p>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about"
          ref={aboutRef} 
          className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${
            isVisible.about ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">About Our Project</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 transform transition-all duration-1000 delay-300">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">Advanced Technology</h3>
                    <p className="text-gray-300">
                    Track Vitals combines cutting-edge sensor technology with real-time data analysis to provide continuous railway track monitoring and anomaly detection.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">Accessible Rail Safety</h3>
                    <p className="text-gray-300">
                    Our mission is to make professional-grade railway track monitoring accessible to everyone, enabling early detection and proactive maintenance management.
                    </p>
                  </div>
                </div>
                <div className="space-y-6 transform transition-all duration-1000 delay-500">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">Real-time Monitoring</h3>
                    <p className="text-gray-300">
                    Get instant insights into your railway track's condition with our advanced monitoring system, designed for both real-time detection and proactive maintenance.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">Data Analytics</h3>
                    <p className="text-gray-300">
                    Leverage powerful analytics to monitor track conditions, detect anomalies, and receive real-time alerts for proactive maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section 
          id="gallery"
          ref={galleryRef} 
          className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${
            isVisible.gallery ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Gallery</h2>
            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-xl shadow-2xl shadow-indigo-500/20">
                <div 
                  className="relative h-[600px] transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="absolute inset-0 flex">
                    {galleryImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full shadow-lg hover:bg-indigo-600 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 text-white p-2 rounded-full shadow-lg hover:bg-indigo-600 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-indigo-600 w-6' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Presentation Section */}
        <section 
          id="presentation"
          ref={presentationRef} 
          className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${
            isVisible.presentation ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Presentation</h2>
            <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/20 transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.canva.com/design/DAGdTxsMXXo/xU22We2fHe13boh3k-diGQ/view?embed" 
                  allowFullScreen={true}
                  loading="lazy"
                  title="Track Vitals Presentation"
                  style={{
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section 
          id="video"
          ref={videoRef} 
          className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${
            isVisible.video ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Watch Our Story</h2>
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/20 transform hover:scale-[1.02] transition-all duration-500">
              <div className="relative w-full pt-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5trhwATvZnI?si=lcNH9bSuCd9SSbgH" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section 
          id="team"
          ref={teamRef} 
          className={`py-20 bg-gray-900/50 transition-opacity duration-1000 ${
            isVisible.team ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  {...member}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;