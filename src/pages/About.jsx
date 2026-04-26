import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Lightbulb, Globe, Code } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function About() {
  const launchTimeline = [
    { month: "Month 1", milestone: "Secure institutional recognition; recruit faculty advisor; finalize curriculum materials; launch website." },
    { month: "Month 2", milestone: "Open student registration for Cohort 1; begin Phase 1 delivery; recruit Senior Researcher Mentors." },
    { month: "Months 3-4", milestone: "Complete Phase 1 (all 8 modules); issue Phase 1 Certificates; form Phase 2 groups." },
    { month: "Months 4-5", milestone: "Phase 2 Research Sprint (5 weeks); mentor check-ins; paper submissions received." },
    { month: "Month 6", milestone: "Phase 3 review and ranking; revision window; publication selection; DOI assignment." },
    { month: "Months 6-7", milestone: "Launch inaugural issue on YCRJ website; ISSN application; Google Scholar indexing." },
    { month: "Month 7+", milestone: "Retrospective and program improvement; open Cohort 2 registration; pursue database indexing." }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#0A1628] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About YCRJ</h1>
          <p className="text-xl text-gray-300 font-sans">
            Our mission, objectives, and the underlying barriers we aim to dismantle.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Full Problem Statement */}
        <section>
          <div className="flex items-center mb-8">
            <Lightbulb className="w-8 h-8 text-[#C9A84C] mr-4" />
            <h2 className="text-3xl font-serif font-bold text-[#0A1628]">The Problem Statement</h2>
          </div>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="lead text-xl text-gray-800 mb-6">
              The gap between undergraduate education and active research participation is wide, particularly in computing disciplines. Students encounter six systemic barriers:
            </p>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-500 shadow-sm border-y-0 border-r-0 rounded-none bg-gray-50">
                 <CardContent className="py-4 px-6 flex flex-col justify-center">
                   <h4 className="font-bold text-gray-900 mt-0 mb-1">No formal research writing curriculum</h4>
                   <p className="text-sm m-0">Undergraduate programs typically teach programming and theory but rarely include structured training in how to write, structure, and submit a scientific paper.</p>
                 </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-500 shadow-sm border-y-0 border-r-0 rounded-none bg-gray-50">
                 <CardContent className="py-4 px-6 flex flex-col justify-center">
                   <h4 className="font-bold text-gray-900 mt-0 mb-1">Unfamiliarity with academic tools</h4>
                   <p className="text-sm m-0">Tools such as LaTeX, Matplotlib, and reference management software are either never introduced or left entirely to self-study.</p>
                 </CardContent>
              </Card>
              <Card className="border-l-4 border-l-yellow-500 shadow-sm border-y-0 border-r-0 rounded-none bg-gray-50">
                 <CardContent className="py-4 px-6 flex flex-col justify-center">
                   <h4 className="font-bold text-gray-900 mt-0 mb-1">No access to mentorship pipelines</h4>
                   <p className="text-sm m-0">Junior students rarely have organic access to senior researchers or graduate students who can guide their first research attempt.</p>
                 </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500 shadow-sm border-y-0 border-r-0 rounded-none bg-gray-50">
                 <CardContent className="py-4 px-6 flex flex-col justify-center">
                   <h4 className="font-bold text-gray-900 mt-0 mb-1">Academic integrity gaps</h4>
                   <p className="text-sm m-0">Concepts such as plagiarism, proper citation, and research ethics are frequently underdeveloped at the undergraduate level.</p>
                 </CardContent>
              </Card>
              <Card className="border-l-4 border-l-indigo-500 shadow-sm border-y-0 border-r-0 rounded-none bg-gray-50">
                 <CardContent className="py-4 px-6 flex flex-col justify-center">
                   <h4 className="font-bold text-gray-900 mt-0 mb-1">Absence of a publishing venue</h4>
                   <p className="text-sm m-0">Even when students produce quality work, there is no accessible, credible venue specifically designed for undergraduate computing research.</p>
                 </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500 shadow-sm border-y-0 border-r-0 rounded-none bg-gray-50">
                 <CardContent className="py-4 px-6 flex flex-col justify-center">
                   <h4 className="font-bold text-gray-900 mt-0 mb-1">Missed downstream opportunities</h4>
                   <p className="text-sm m-0">Without a publication or documented research experience, students are disadvantaged when applying for graduate programs or internships.</p>
                 </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="bg-[#0A1628] text-white rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-serif font-bold text-[#C9A84C] mb-6">Initiative Objectives</h2>
          <div className="mb-6 pb-6 border-b border-gray-700">
             <h3 className="text-lg font-bold mb-2">Primary Objective:</h3>
             <p className="text-gray-300">To establish the first university-level youth computing research journal that operates as both a training program and a publication platform—enabling undergraduates to learn, write, and publish original computing research.</p>
          </div>
          <h3 className="text-lg font-bold mb-4">Supporting Objectives:</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>1. Deliver a modular, accredited foundational curriculum covering all scientific writing skills.</li>
            <li>2. Produce a structured 5-week supervised research and writing sprint resulting in complete papers.</li>
            <li>3. Establish a transparent, rubric-based peer review and ranking system.</li>
            <li>4. Publish the highest-quality submissions in YCRJ's indexed, publicly accessible journal.</li>
            <li>5. Build a sustainable student organization with institutional recognition.</li>
            <li>6. Provide students with creditable, citable publications to strengthen their applications.</li>
            <li>7. Create a replicable model that can expand to other departments and universities.</li>
          </ul>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-[#0A1628] mb-8">Cohort 1 Launch Timeline</h2>
          <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-8 pb-4">
             {launchTimeline.map((item, id) => (
                <div key={id} className="relative pl-8">
                   <div className="absolute w-4 h-4 bg-[#C9A84C] rounded-full left-[-9px] top-1"></div>
                   <h3 className="font-bold text-gray-900 text-lg mb-1 shadow-sm inline-block px-3 py-1 bg-white border border-gray-200 rounded">{item.month}</h3>
                   <p className="text-gray-600 mt-2">{item.milestone}</p>
                </div>
             ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-blue-50 border border-blue-100 p-8 rounded-xl text-center">
          <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold text-[#0A1628] mb-4">For the Broader Computing Community</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            YCRJ serves as a new, open-access venue for emerging junior research. It builds a talent pipeline of well-prepared scholars entering grad programs and industry, and acts as a model for how universities can systematically lower the barrier to undergraduate publishing.
          </p>
          <Button variant="primary" size="lg">Contact Us for Partnership</Button>
        </section>

      </div>
    </div>
  );
}
