import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Clock, Book, Target } from 'lucide-react';

export default function Program() {
  const phase1Modules = [
    { num: 1, title: "What Is a Scientific Paper?", competency: "Paper anatomy, reading strategies", duration: "1 week" },
    { num: 2, title: "Academic & Scientific English", competency: "Precision, clarity, register", duration: "1 week" },
    { num: 3, title: "Paper Structure & Section Writing", competency: "IMRaD writing, section-by-section", duration: "1.5 weeks" },
    { num: 4, title: "LaTeX Document Preparation", competency: "Typesetting, IEEE/ACM templates", duration: "1.5 weeks" },
    { num: 5, title: "Data Analysis & Visualization (Matplotlib)", competency: "Publication-quality figures", duration: "2 weeks" },
    { num: 6, title: "Citations & Academic Integrity", competency: "Citation styles, plagiarism, Zotero", duration: "0.5 week" },
    { num: 7, title: "Research Pathways & Opportunities", competency: "Grad school, open-source, competitions", duration: "0.5 week" },
    { num: 8, title: "Formative Assessment", competency: "Completion check, progression gate", duration: "0.5 week" },
  ];

  const phase2Milestones = [
    { week: 1, activity: "Research question submission and approval; literature review; defining methodology." },
    { week: 2, activity: "Data collection, generation, or analysis; Related Work drafted; first mentor review." },
    { week: 3, activity: "Results / experimentation / Methodology sections drafted; full draft assembly begins." },
    { week: 4, activity: "Introduction, Discussion, and Conclusion drafted; full paper draft submitted for mentor feedback." },
    { week: 5, activity: "Revisions; LaTeX formatting; abstract finalization; final PDF submission to journal portal." },
  ];

  const evalRubric = [
    { criteria: "Research Question Clarity", points: 10, assessed: "Is the question clearly stated, specific, and original?" },
    { criteria: "Literature Review Quality", points: 10, assessed: "Is related work adequately covered and critically engaged with?" },
    { criteria: "Methodology Rigor", points: 15, assessed: "Is the approach described clearly and reproducibly?" },
    { criteria: "Results Quality", points: 15, assessed: "Are results presented accurately, with appropriate visualizations?" },
    { criteria: "Discussion and Analysis", points: 15, assessed: "Does the paper interpret results insightfully and acknowledge limitations?" },
    { criteria: "Writing and Language", points: 10, assessed: "Is the paper written clearly and in appropriate academic English?" },
    { criteria: "LaTeX Formatting", points: 10, assessed: "Does the paper conform to IEEE format with correct figures and citations?" },
    { criteria: "Originality and Contribution", points: 15, assessed: "Does the paper make a clear, original contribution?" },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#0A1628] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Program Structure</h1>
          <p className="text-xl text-gray-300 font-sans">
            A sequential, interdependent 14-18 week pathway where they engage in two contact sessions and 2 hours of peer sessions weekly. Each phase has defined learning outcomes, deliverables, constraints, and assessment criteria.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Phase 1 */}
        <section>
          <div className="mb-8 flex items-center">
            <div className="bg-[#C9A84C] text-[#0A1628] font-bold text-xl w-10 h-10 rounded mr-4 flex items-center justify-center">1</div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0A1628]">Phase 1: Foundational Program</h2>
              <p className="text-gray-500 font-medium">Duration: 8.5 Weeks • Goal: Literacy & Tool Competency</p>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none mb-8 text-gray-600">
            <p>
              Phase 1 is the backbone of YCRJ. It is a structured, modular educational program designed to take a student with no prior research experience and equip them with the skills to write, format, and contextualize a computing research paper.
            </p>
            <p className="font-semibold text-gray-800">
               Progression Gate: Students must complete all module deliverables to a satisfactory standard to proceed to Phase 2.
            </p>
          </div>

          <Card className="overflow-hidden border-none shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#0A1628]">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider w-16">#</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Module</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Key Competency</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Duration</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {phase1Modules.map((m) => (
                    <tr key={m.num} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{m.num}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#0A1628]">{m.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{m.competency}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> {m.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Phase 2 */}
        <section>
          <div className="mb-8 flex items-center">
            <div className="bg-[#C9A84C] text-[#0A1628] font-bold text-xl w-10 h-10 rounded mr-4 flex items-center justify-center">2</div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0A1628]">Phase 2: Research & Writing Sprint</h2>
              <p className="text-gray-500 font-medium">Duration: 5 Weeks • Goal: Applied Paper Creation</p>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none mb-8 text-gray-600">
            <p>
              Knowledge becomes applied output. Small research groups (3-4 participants), paired with a Senior Researcher Mentor, are given five weeks to conceive, write, and submit an original computing research paper. Group leads coordinate weekly milestone reviews.
            </p>
          </div>

          <Card className="overflow-hidden shadow-md">
            <div className="p-0">
               {phase2Milestones.map((m, i) => (
                 <div key={m.week} className={`flex ${i !== phase2Milestones.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="bg-gray-50 px-6 py-6 border-r border-gray-100 w-32 flex-shrink-0 flex items-center justify-center font-bold text-[#0A1628]">
                      Week {m.week}
                    </div>
                    <div className="pt-6 pb-6 px-8 flex items-center text-gray-700">
                      {m.activity}
                    </div>
                 </div>
               ))}
            </div>
          </Card>
        </section>

        {/* Phase 3 */}
        <section>
          <div className="mb-8 flex items-center">
            <div className="bg-[#C9A84C] text-[#0A1628] font-bold text-xl w-10 h-10 rounded mr-4 flex items-center justify-center">3</div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#0A1628]">Phase 3: Review & Publication</h2>
              <p className="text-gray-500 font-medium">Duration: 3-4 Weeks • Goal: Quality Validation</p>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none mb-8 text-gray-600">
             <p>
              The research lifecycle closes with structured peer review modeled on international formats. Submissions are independently evaluated blindly by one student reviewer from another group and one senior reviewer.
            </p>
            <p>
              <strong>Publication Goal:</strong> Achieve a score of 70+ and ensure strict originality limits.
            </p>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#0A1628] mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-[#C9A84C]" /> Review Evaluation Rubric
          </h3>
          <Card className="overflow-hidden border-none shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#0A1628] uppercase tracking-wider">Criterion</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#0A1628] uppercase tracking-wider w-24">Points</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#0A1628] uppercase tracking-wider">What Is Assessed</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {evalRubric.map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-[#0A1628]">{r.criteria}</td>
                      <td className="px-6 py-4 text-sm font-bold text-center bg-gray-50 border-l border-r border-gray-100">{r.points}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 italic">"{r.assessed}"</td>
                    </tr>
                  ))}
                  <tr className="bg-[#0A1628]">
                      <td className="px-6 py-3 text-sm font-bold text-white text-right">Total Score Matrix</td>
                      <td className="px-6 py-3 text-sm font-bold text-[#C9A84C] text-center">100</td>
                      <td className="px-6 py-3 text-sm font-medium text-gray-300">Minimum 70 required to be eligible for publication</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}
