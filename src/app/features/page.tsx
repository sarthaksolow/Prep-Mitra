'use client'

import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

interface FeatureCard {
  title: string;
  description: string;
  type: string;
  icon: string;
  tags: string[];
}

export default function Features() {
  const features: FeatureCard[] = [
    {
      title: "Long text",
      description: "Generate detailed and accurate test questions from your study materials and notes.",
      type: "Input type",
      icon: "📚",
      tags: ["Pro", "Business"]
    },
    {
      title: "Subjective Writing",
      description: "Practice and improve your essay writing skills with detailed feedback and suggestions.",
      type: "Input type",
      icon: "✍️",
      tags: ["Pro", "Business"]
    },
    {
      title: "Link",
      description: "Extract key concepts and create study materials from any web article or resource.",
      type: "Input type",
      icon: "🔗",
      tags: ["Pro", "Business"]
    },
    {
      title: "Study Plans",
      description: "Create personalized study schedules and track your progress effectively.",
      type: "Input type",
      icon: "📅",
      tags: ["Business"]
    },
    {
      title: "PDF",
      description: "Convert your PDF study materials into interactive learning content.",
      type: "Input type",
      icon: "📄",
      tags: ["Business"]
    },
    {
      title: "AI Feedback",
      description: "Get instant, personalized feedback on your answers and essays using AI technology.",
      type: "Input type",
      icon: "🤖",
      tags: ["Pro", "Business"]
    },
    {
      title: "Multiple choice",
      description: "Practice with MCQs designed to enhance your conceptual understanding.",
      type: "Question type",
      icon: "📝",
      tags: []
    },
    {
      title: "Rating System",
      description: "Track your performance and identify areas for improvement with our smart rating system.",
      type: "Question type",
      icon: "⭐",
      tags: []
    },
    {
      title: "Short answer",
      description: "Improve your ability to provide concise and accurate answers.",
      type: "Question type",
      icon: "✏️",
      tags: []
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <div className="pt-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Features
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex gap-2">
                      {feature.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-2 py-1 rounded ${
                            tag === 'Pro' ? 'bg-purple-100 text-purple-700' : 'bg-pink-100 text-pink-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-2">{feature.type}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                Our Platform Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">557</div>
                  <div className="text-gray-600">IRAC Lessons</div>
                  <div className="text-sm text-gray-500">(black letter law intensive)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">74</div>
                  <div className="text-gray-600">Audio Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">159</div>
                  <div className="text-gray-600">Practice Essays & Sample Answers</div>
                  <div className="text-sm text-gray-500">(AI grading and feedback)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3,036</div>
                  <div className="text-gray-600">MCQs</div>
                  <div className="text-sm text-gray-500">(modeled after new format)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 