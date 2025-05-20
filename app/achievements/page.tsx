"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/_components/Navbar';
import { BackgroundLines } from "@/app/_components/ui/background-lines";
import { HoverBorderGradient } from '@/_components/ui/hover-border-gradient';
const achievements = [
  {
    title: 'MSME Idea Hackathon 2.0 (2023)',
    description: '9 national-level winners received over Rs. 78 lakhs in funding.',
    year: 2023,
  },
  {
    title: 'MSME Idea Hackathon 3.0 (2024)',
    description: '3 national-level winners received Rs. 40.25 lakhs in funding.',
    year: 2024,
  },
  {
    title: 'Electric Vehicle TEDP (2023-2024)',
    description: 'The second DST-funded online TEDP on Electric Vehicles had multiple successful ventures, including Buds Engineers and CaptivAir.',
    year: 2023,
  },
  {
    title: 'Startup Launch',
    description: 'Successfully launched 5 startups through the ACE incubation program in 2021.',
    year: 2021,
  },
  {
    title: 'Electric Vehicle TEDP (2020-2021)',
    description: 'The first-ever DST-funded online TEDP on Electric Vehicles resulted in 6 successful ventures, including JNR Industries and Vipra E-Vehicles.',
    year: 2021,
  },


  {
    title: 'University Collaboration',
    description: 'Collaborated with top universities for entrepreneurship boot camps in 2020.',
    year: 2020,
  },
  {
    title: 'Success of EDP Entrepreneurs (2019-2020)',
    description: '8 participants started ventures like Cymatics Drone Cinematography and Yaazh Physiotherapy.',
    year: 2019,
  },
  {
    title: 'Success of EDP Entrepreneurs (2018-2019)',
    description: '11 participants from the EDP successfully launched ventures like Vijay Karthikeyan (Adada Creators) and Keerthana A (Arumai.In).',
    year: 2018,
  },
  {
    title: 'Success of EDP Entrepreneurs (2017-2018)',
    description: 'Participants like Dr. Indumathy R. and Amarnath B. successfully started ventures. ACE also conducted the Innovative Project Contest 2K18.',
    year: 2017,
  },
  {
    title: 'Success of EDP Entrepreneurs (2016-2017)',
    description: 'ACE team bagged the runner-up position at Bosch Makethon, and several participants started ventures like Prasanna Balaji (Coral Textiles) and Sushil Sivanesh (Impresso 3D).',
    year: 2016,
  },
  {
    title: 'Success of EDP Entrepreneurs (2015-2016)',
    description: 'Out of 27 participants in 2015-2016, 8 started their ventures successfully.',
    year: 2015,
  },
  {
    title: 'Success of EDP Entrepreneurs (2014-2015)',
    description: 'Multiple entrepreneurs launched ventures successfully, including Karthik Srinath (Green Fibers, Green Pith Products, Annamalai Organic Food Products) and Hari Nagendiran (Chocolate Teddies).',
    year: 2014,
  },
 
 



];

const AchievementsPage: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(0); // Initially select the first achievement

  const handleSelectAchievement = (index: number) => {
    setSelectedAchievement(index);
  };

  return (
    <>
    <BackgroundLines>
    <div className="min-h-screen bg-[hsl(var(--background))] text-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-[hsl(var(--background))] text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-7xl font-bold text-center mb-6 text-orange-500"
        >
          Our Achievements
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
          className="text-2xl text-gray-300 text-center max-w-[700px]"
        >
          Discover the milestones we've achieved in our journey to foster innovation and entrepreneurship.
        </motion.p>
      </div>

      {/* Achievements Timeline Below */}
      <div className="flex flex-col items-center w-full space-y-16 relative mt-16">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`relative w-full flex items-start group transition-all duration-300 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`} 
            onMouseEnter={() => handleSelectAchievement(index)} // Trigger on hover
          >
            {/* Timeline dot */}
            <div className="w-5 h-5 bg-orange-600 rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 border border-gray-900"></div>

            {/* Timeline line */}
            <div className="absolute w-1 h-full bg-gray-600 left-1/2 transform -translate-x-1/2 z-0"></div>

            {/* Achievement card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Smoother hover transition
              className={`w-full max-w-[600px] p-4 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-full shadow-md border border-gray-700 z-20 transition-all duration-300 ${
                selectedAchievement === index ? 'bg-orange-600 text-white' : 'text-gray-400'
              } ${index % 2 === 0 ? 'mr-4' : 'ml-4'} sm:mx-8`} // Responsive margins
            >
              <h2 className="text-center text-2xl font-semibold">{achievement.title}</h2>
              <p className="text-center text-gray-300">{achievement.year}</p>
            </motion.div>

            {/* Achievement Details */}
            {selectedAchievement === index && (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }} // Smoother detail reveal transition
                className={`w-full max-w-[600px] p-6 bg-[#1a1a1a]/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 z-20 ${
                  index % 2 === 0 ? 'mr-4' : 'ml-4'
                } sm:mx-8 text-center`} // Centered text in details section
              >
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  {achievements[selectedAchievement].title}
                </h2>
                <p className="text-gray-400 text-lg mb-2">
                  {achievements[selectedAchievement].year}
                </p>
                <p className="text-base">
                  {achievements[selectedAchievement].description}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
    </BackgroundLines>
    </>
  );
};

export default AchievementsPage;
