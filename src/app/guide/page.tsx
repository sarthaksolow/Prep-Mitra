// app/guides/page.tsx
'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// Define the structure of a guide
interface Guide {
  id: number;
  title: string;
  description: string;
  notes: string[];
  pyqs: string[];
  buyLink: string;
}

// Sample data for guides
const guides: Guide[] = [
  {
    id: 1,
    title: 'CAT (Common Admission Test)',
    description: 'Guide to MBA entrance exams with Quantitative Aptitude, Verbal Ability, Logical Reasoning, and Data Interpretation notes.',
    notes: ['Quantitative Aptitude Notes', 'Verbal Ability Notes', 'Logical Reasoning Notes', 'Data Interpretation Notes'],
    pyqs: ['CAT 2022 PYQs', 'CAT 2021 PYQs', 'CAT 2020 PYQs'],
    buyLink: '#',
  },
  {
    id: 2,
    title: 'CLAT (Common Law Admission Test)',
    description: 'Comprehensive guide for law aspirants with Legal Aptitude, Logical Reasoning, English, and General Knowledge notes.',
    notes: ['Legal Aptitude Notes', 'Logical Reasoning Notes', 'English Notes', 'General Knowledge Notes'],
    pyqs: ['CLAT 2022 PYQs', 'CLAT 2021 PYQs', 'CLAT 2020 PYQs'],
    buyLink: '#',
  },
  {
    id: 3,
    title: 'JEE (Joint Entrance Examination)',
    description: 'Guide for JEE Main and Advanced with Physics, Chemistry, and Mathematics notes.',
    notes: ['Physics Notes', 'Chemistry Notes', 'Mathematics Notes'],
    pyqs: ['JEE 2022 PYQs', 'JEE 2021 PYQs', 'JEE 2020 PYQs'],
    buyLink: '#',
  },
  {
    id: 4,
    title: 'UPSC (Union Public Service Commission)',
    description: 'Guide for Civil Services Examination (Prelims, Mains, and Interview) with General Studies, CSAT, Essay Writing, and Optional Subject notes.',
    notes: ['General Studies Notes', 'CSAT Notes', 'Essay Writing Notes', 'Optional Subject Notes'],
    pyqs: ['UPSC 2022 PYQs', 'UPSC 2021 PYQs', 'UPSC 2020 PYQs'],
    buyLink: '#',
  },
  {
    id: 5,
    title: 'SSC CGL (Staff Selection Commission Combined Graduate Level)',
    description: 'Guide for SSC CGL Tier 1 and Tier 2 with Quantitative Aptitude, English, Reasoning, and General Awareness notes.',
    notes: ['Quantitative Aptitude Notes', 'English Notes', 'Reasoning Notes', 'General Awareness Notes'],
    pyqs: ['SSC CGL 2022 PYQs', 'SSC CGL 2021 PYQs', 'SSC CGL 2020 PYQs'],
    buyLink: '#',
  },
];

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <div className="pt-20 min-h-screen bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Exam Guides
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Your one-stop destination for exam preparation resources. Explore guides, notes, PYQs, and purchase options.
              </p>
            </div>

            <div className="mt-16 space-y-8">
              {guides.map((guide) => (
                <div key={guide.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">{guide.title}</h3>
                  <p className="text-gray-700 mb-4">{guide.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xl font-medium mb-2">Notes</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {guide.notes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-medium mb-2">Previous Year Question Papers (PYQs)</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {guide.pyqs.map((pyq, index) => (
                        <li key={index}>{pyq}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => window.location.href = guide.buyLink}
                    className="w-full bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-700"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}