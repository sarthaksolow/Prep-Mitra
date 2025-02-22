'use client';

import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonials {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonials[] = [
  {
    id: 1,
    name: 'Rohit Khendelwal',
    role: 'Student',
    content:
      'PrepMitra has been a game-changer for my exam preparation. The study materials are comprehensive, and the platform is incredibly user-friendly.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Sameer Diwakar',
    role: 'Working Professional',
    content:
      'I love how PrepMitra breaks down complex topics into easy-to-understand modules. It has made learning so much more enjoyable!',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Jatin Gupta',
    role: 'Competitive Exam Aspirant',
    content:
      'The previous year question papers and mock tests on PrepMitra are a lifesaver. They helped me identify my weak areas and improve my scores.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Kunal Chaudhary',
    role: 'Parent',
    content:
      'As a parent, I appreciate how PrepMitra keeps my child engaged and motivated to study. The platform is a great investment in their future.',
    avatar: 'https://via.placeholder.com/150',
  },
];

export default function TestimonialSection() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            What Our Users Say
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-pink-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our users about their experiences with PrepMitra and how it has helped them achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-pink-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-gray-300 text-2xl absolute -top-2 left-0" />
                <p className="text-gray-600 text-sm leading-relaxed pl-8">{testimonial.content}</p>
                <FaQuoteRight className="text-gray-300 text-2xl absolute -bottom-2 right-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}