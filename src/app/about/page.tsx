'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';
import NavBar2 from '@/components/NavBar2';

interface TeamMember {
  name: string;
  role: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Prabhat Krishna',
    role: 'Team Leader',
    socials: {
      github: 'https://github.com/prabhat',
      linkedin: 'https://linkedin.com/in/prabhat-krishna',
    },
  },
  {
    name: 'Sarthak Singh',
    role: 'Team Member',
    socials: {
      github: 'https://github.com/sarthak',
      linkedin: 'https://linkedin.com/in/sarthak-singh',
    },
  },
  {
    name: 'Monu',
    role: 'Team Member',
    socials: {
      github: 'https://github.com/monu',
      linkedin: 'https://linkedin.com/in/monu',
    },
  },
  {
    name: 'Chrishna',
    role: 'Team Member',
    socials: {
      github: 'https://github.com/chrishna',
      linkedin: 'https://linkedin.com/in/chrishna',
    },
  },
];

export default function AboutPage() {
  const [activeItem, setActiveItem] = useState('about');

  const MemberGrid = ({ members, title }: { members: TeamMember[]; title: string }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center relative">
        <span className="relative">
          {title}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-pink-500 rounded-full"></div>
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 w-full max-w-xs"
          >
            <div className="mb-6">
              <div className="w-28 h-28 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{member.name}</h3>
              <p className="text-pink-600 font-medium mb-4 text-center text-sm">{member.role}</p>
              <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                Passionate about creating impactful educational solutions
              </p>
            </div>

            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
              {member.socials.github && (
                <Link
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform hover:-translate-y-1"
                >
                  <FaGithub className="w-6 h-6 text-gray-700 hover:text-gray-900" />
                </Link>
              )}
              {member.socials.linkedin && (
                <Link
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform hover:-translate-y-1"
                >
                  <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-700" />
                </Link>
              )}
              {member.socials.twitter && (
                <Link
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform hover:-translate-y-1"
                >
                  <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar2 />
      <div className="flex flex-1 pt-20">
        <div className="flex-1 p-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold text-gray-900 mb-4 relative inline-block">
                About Us
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-pink-500 rounded-full"></div>
              </h1>
              <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6">Logic Lassan</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate developers working together to create innovative solutions that help students
                achieve their academic goals and prepare for competitive exams.
              </p>
            </div>

            <div className="mt-16 bg-white rounded-xl shadow-lg p-12 mb-24 transform hover:shadow-xl transition-shadow duration-300 border border-gray-100 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 relative inline-block">
                Our Mission
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500 rounded-full"></div>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At PrepMitra, we&apos;re dedicated to revolutionizing exam preparation through technology. Our platform
                combines cutting-edge tools with comprehensive study materials to help students achieve their academic
                goals efficiently and effectively.
              </p>
            </div>

            <MemberGrid members={teamMembers} title="Development Team" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
 