import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Users, Briefcase, Handshake } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Team() {
  const orgStructure = [
    { role: "Co-Founders / Directors", resp: "Overall initiative leadership, institutional liaison, strategic direction, external partnerships" },
    { role: "Curriculum Coordinator", resp: "Designing and maintaining Phase 1 module content, scheduling sessions, tracking student progress" },
    { role: "Operations Coordinator", resp: "Managing submissions, communications, logistics, website updates, document processing" },
    { role: "Editorial Board", resp: "Phase 3 review coordination, reviewer assignment, rubric enforcement, final publication decisions" },
    { role: "Senior Researcher Mentors", resp: "Phase 2 group guidance, draft review, academic integrity monitoring, mentor assessment" },
    { role: "Faculty Advisor", resp: "Institutional representation, quality oversight, accreditation support, escalation point" },
    { role: "Web and Media Team", resp: "Website development, digital publishing, social media, outreach" }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#0A1628] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Team & Organization</h1>
          <p className="text-xl text-gray-300 font-sans">
            A sustainable, student-led organizational structure supported by institutional faculty.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Org Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-[#0A1628] mb-8 flex items-center">
            <Users className="w-8 h-8 mr-3 text-[#C9A84C]" /> Organizational Structure
          </h2>
          <Card className="overflow-hidden border-none shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Role</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Responsibilities</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orgStructure.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-bold text-[#0A1628]">{row.role}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.resp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
           {/* Open Positions */}
           <section>
             <h2 className="text-2xl font-serif font-bold text-[#0A1628] mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-[#0A1628]" /> Open Positions
             </h2>
             <p className="text-gray-600 mb-6">
                We are currently building our founding team for the inaugural Cohort 1 launch. We are actively recruiting for:
             </p>
             <div className="space-y-4 mb-8">
               <Card className="border-l-4 border-l-[#C9A84C]">
                 <CardContent className="p-4">
                   <h3 className="font-bold text-gray-900">Co-Founders</h3>
                   <p className="text-sm text-gray-600 mt-1">Seeking visionary student leaders to co-build the journal's strategic direction alongside the founding team.</p>
                 </CardContent>
               </Card>
               <Card className="border-l-4 border-l-[#0A1628]">
                 <CardContent className="p-4">
                   <h3 className="font-bold text-gray-900">Curriculum Coordinator</h3>
                   <p className="text-sm text-gray-600 mt-1">Responsible for delivering the 8 modules and mentoring students in Phase 1.</p>
                 </CardContent>
               </Card>
               <Card className="border-l-4 border-l-[#0A1628]">
                 <CardContent className="p-4">
                   <h3 className="font-bold text-gray-900">Senior Researcher Mentors (x5)</h3>
                   <p className="text-sm text-gray-600 mt-1">Graduate students or advanced undergrads to meet weekly with Phase 2 sprint groups.</p>
                 </CardContent>
               </Card>
               <Card className="border-l-4 border-l-[#0A1628]">
                 <CardContent className="p-4">
                   <h3 className="font-bold text-gray-900">Faculty Advisor</h3>
                   <p className="text-sm text-gray-600 mt-1">Computing faculty member to provide academic oversight and accreditation support.</p>
                 </CardContent>
               </Card>
             </div>
             <Button variant="primary" className="w-full">Apply for a Team Role</Button>
           </section>

           {/* Institutional Partnership */}
           <section>
             <h2 className="text-2xl font-serif font-bold text-[#0A1628] mb-6 flex items-center">
                <Handshake className="w-6 h-6 mr-3 text-[#0A1628]" /> Institutional Partnership
             </h2>
             <div className="bg-[#0A1628] rounded-lg p-8 text-white h-[calc(100%-80px)]">
                <h3 className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm mb-4">What the University Gains</h3>
                <p className="text-gray-300 md:text-lg mb-6 leading-relaxed">
                  A verifiable pipeline that prepares your undergrads for graduate programs, increasing post-graduate enrollment quality.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 font-bold">1</span>
                    <span className="text-gray-300 text-sm">Produces measurable academic output via indexed publications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 font-bold">2</span>
                    <span className="text-gray-300 text-sm">Provides a replicable model that scales across STEM departments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 font-bold">3</span>
                    <span className="text-gray-300 text-sm">Sends a positive signal for accreditation bodies (ABET/etc.) demonstrating investment in research curriculums.</span>
                  </li>
                </ul>
                <Button variant="accent" className="w-full">Contact for Partnership</Button>
             </div>
           </section>
        </div>

      </div>
    </div>
  );
}
