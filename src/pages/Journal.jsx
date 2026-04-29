import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function Journal() {
  return (
    <div className="pb-24">
      {/* Journal Header */}
      <div className="bg-[#0A1628] py-20 text-white relative border-b-4 border-[#C9A84C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block">Official Publications</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">YCRJ Journal</h1>
            <p className="text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              The central archive for student research and academic papers.
            </p>
        </div>
      </div>

      {/* Note Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Card className="overflow-hidden border border-gray-200 hover:border-[#C9A84C] transition-colors bg-white shadow-xl text-center py-20">
          <CardContent>
            <div className="flex justify-center mb-6">
              <div className="bg-[#0A1628]/5 p-5 rounded-full ring-1 ring-[#0A1628]/10">
                <BookOpen className="w-12 h-12 text-[#C9A84C]" />
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0A1628] mb-4">
              A Journal for Student Publications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              This space is dedicated to showcasing the academic achievements and research efforts of our students. Future research articles and academic contributions will be published here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
