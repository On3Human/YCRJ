import React from 'react';
import { Card, CardContent } from '../components/ui/Card';

export default function Guidelines() {
  const paperStructure = [
    { section: "Title", percent: "-", wordCount: "max 15 words", mandatory: "Contains: main method/approach, dependent variable, context" },
    { section: "Abstract", percent: "10%", wordCount: "150–250 words", mandatory: "Structured: Background, Aim, Methods, Results, Conclusion" },
    { section: "Introduction", percent: "15%", wordCount: "350–500 words", mandatory: "Three paragraphs: background, related work/gap, research aim" },
    { section: "Related Work", percent: "10%", wordCount: "250–350 words", mandatory: "Thematic grouping; critical positioning; every claim cited" },
    { section: "Methodology", percent: "15%", wordCount: "300–450 words", mandatory: "Subheadings: design, dataset, tools, procedures, analysis" },
    { section: "Results", percent: "20%", wordCount: "300–500 words", mandatory: "At least two figures (Matplotlib); descriptive text only" },
    { section: "Discussion", percent: "25%", wordCount: "500–700 words", mandatory: "Summary, comparison, interpretation, limitations, recommendations" },
    { section: "Conclusion", percent: "5%", wordCount: "100–150 words", mandatory: "One paragraph: findings, why it matters, future direction" },
    { section: "References", percent: "-", wordCount: "15–25 sources", mandatory: "80% from last 5 years; IEEE style via BibTeX" }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#0A1628] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Submission Guidelines</h1>
          <p className="text-xl text-gray-300 font-sans">
            Rigorous standards for Phase 2 paper submittals and the Phase 3 peer review forms.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        <section>
          <h2 className="text-3xl font-serif font-bold text-[#0A1628] mb-6">Submission Requirements</h2>
          <Card className="shadow-sm border-gray-200">
            <CardContent className="p-8 prose prose-blue max-w-none text-gray-700">
              <ul className="space-y-4 marker:text-[#C9A84C]">
                <li><strong>Format:</strong> Complete paper in IEEE double-column format, compiled in LaTeX, exported as a PDF.</li>
                <li><strong>Length:</strong> Between 4 and 8 pages (excluding references).</li>
                <li><strong>Originality:</strong> Similarity report generated via Turnitin demonstrating <strong>≤15% similarity</strong>.</li>
                <li><strong>Authorship:</strong> A contribution statement declaring the specific contribution of each group member.</li>
                <li><strong>Integrity:</strong> Completed author declaration form affirming originality and agreement with YCRJ terms.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-[#0A1628] mb-6">Paper Structure Reference</h2>
          <p className="text-gray-600 mb-6">Mandatory structure for all YCRJ submissions (Table 10).</p>
          <div className="overflow-x-auto shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-[#0A1628]">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Section</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">% of Paper</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Word Count</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Mandatory Elements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {paperStructure.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-900 sm:pl-6">{row.section}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.percent}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.wordCount}</td>
                    <td className="px-3 py-4 text-sm text-gray-700">{row.mandatory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-[#0A1628] mb-6">Student Reviewer Form Checklist</h2>
            <p className="text-gray-700 mb-6">Form completed by peer student reviewers during Phase 3 review cycle:</p>
            
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
               <h4 className="font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">Section 1: Quick Checklist (Tick where applicable)</h4>
               <ul className="space-y-3 mb-6">
                 {[
                   "Title is clear and contains key variables",
                   "Abstract contains (background, aim, methods, results, conclusion)",
                   "Introduction clearly identifies the research gap",
                   "Methodology is described as reproducible steps",
                   "Results are presented with clear figures/tables produced in Matplotlib or equivalent",
                   "Discussion compares results with previous studies (at least 3 comparisons)",
                   "In-text citations exist and reference list is complete",
                   "LaTeX formatting conforms to IEEE template"
                 ].map((item, id) => (
                   <li key={id} className="flex items-start">
                      <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3 mt-0.5 flex-shrink-0 bg-gray-50"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                   </li>
                 ))}
               </ul>

               <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Section 2: Two Strongest Points</h4>
                    <div className="h-10 border-b border-gray-300 border-dashed mt-2 w-full"></div>
                    <div className="h-10 border-b border-gray-300 border-dashed w-full"></div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-bold text-gray-800 text-sm">Section 3: Two Points Requiring Improvement (with reason)</h4>
                    <div className="h-10 border-b border-gray-300 border-dashed mt-2 w-full"></div>
                    <div className="h-10 border-b border-gray-300 border-dashed w-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
