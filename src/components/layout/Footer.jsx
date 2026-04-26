import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          <div className="space-y-4">
            <span className="font-serif text-3xl font-bold text-white leading-none">YCRJ</span>
            <p className="text-[#C9A84C] max-w-sm">A Structured Pathway for University Students from First Principles to Published Research.</p>
            <div className="inline-flex items-center space-x-2 bg-[#1E293B] px-3 py-1.5 rounded-full text-xs font-medium border border-gray-600">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span>Inaugural Cohort — Accepting Applications</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/program" className="hover:text-[#C9A84C] transition-colors">Program Structure</Link></li>
              <li><Link to="/journal" className="hover:text-[#C9A84C] transition-colors">Read the Journal</Link></li>
              <li><Link to="/guidelines" className="hover:text-[#C9A84C] transition-colors">Submission Guidelines</Link></li>
              <li><Link to="/team" className="hover:text-[#C9A84C] transition-colors">Team & Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl">Partnerships</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are actively seeking institutional partnerships and faculty advisors to scale our impact. 
              The YCRJ model is designed to be replicable and accreditable.
            </p>
            <Link to="/about" className="text-[#C9A84C] hover:text-white transition-colors text-sm font-medium inline-block mt-2">
              Learn about our value proposition →
            </Link>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Youth Computing Research Journal.</p>
          <p className="mt-2 md:mt-0 italic text-gray-500">Submitted April 2026 — Open for Institutional Partnership</p>
        </div>
      </div>
    </footer>
  );
}
