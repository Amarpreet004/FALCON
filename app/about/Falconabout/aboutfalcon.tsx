"use client";
import React from 'react';
import { Award, Clock, Users, Target } from 'lucide-react';

const AboutFalcon: React.FC = () => {
  const focusAreas = [
    {
      icon: <Award className="w-8 h-8 text-white dark:text-black" />,
      title: "Proven Excellence",
      description: "Years of experience delivering high-quality digital solutions with a track record of successful projects across various industries.",
      color: "bg-primary dark:bg-primary"
    },
    {
      icon: <Clock className="w-8 h-8 text-white dark:text-black" />,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and consistently deliver projects on time without compromising on quality.",
      color: "bg-primary dark:bg-primary"
    },
    {
      icon: <Users className="w-8 h-8 text-white dark:text-black" />,
      title: "Client-Centric Approach",
      description: "Your vision is our mission. We work closely with clients throughout the project lifecycle to ensure complete satisfaction.",
      color: "bg-primary dark:bg-primary"
    },
    {
      icon: <Target className="w-8 h-8 text-white dark:text-black" />,
      title: "Results-Driven Solutions",
      description: "Every solution we create is designed to drive real business results and help you achieve your digital transformation goals.",
      color: "bg-primary dark:bg-primary"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Video */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-card border-4 border-accent-foreground">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  console.log('Video failed to load:', e);
                }}
              >
                <source src="/Falcon.mov" type="video/mp4" />
                <source src="/Falcon.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Optional branding overlay */}
             
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="text-accent-foreground"> ABOUT US</span>
              </h2>
             
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
             <b> FALCON Web Solution </b>is a dynamic digital agency where creativity meets technology. We empower 
              businesses and individuals to achieve their digital goals through comprehensive 
              services including web development, mobile apps, UI/UX design, graphics design, 
              video editing, and SEO optimization. Our client-focused approach ensures 
              collaborative growth and innovative solutions.
            </p>

            {/* Main Focus Section */}
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-6">
                Why Choose Us
              </h4>
              
              {/* Focus Areas Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    {/* Icon */}
                    <div className={`${area.color} p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {area.icon}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h5 className="text-lg font-semibold text-foreground mb-2">
                        {area.title}
                      </h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFalcon;
