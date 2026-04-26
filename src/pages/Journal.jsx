import React from 'react';
import { FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export default function Journal() {
  const papers = [
    {
      id: "YCRJ-2026-001",
      title: "Comparing Lightweight Intrusion Detection Approaches for Resource-Constrained IoT Gateways",
      authors: "Sarah Chen, Marcus Johnson, David Kim",
      abstract: "IoT deployments in smart environments generate continuous network traffic that must be monitored for intrusions without imposing prohibitive computational overhead on gateway hardware. This study evaluates three lightweight anomaly detection algorithms—Isolation Forest, One-Class SVM, and a threshold-based statistical detector—on a public IoT traffic dataset using a Raspberry Pi 4. Isolation Forest represents a practical balance between detection performance and resource consumption.",
      doi: "10.5281/zenodo.1234567"
    },
    {
      id: "YCRJ-2026-002",
      title: "Optimized Graph Traversal for Route Planning in Dynamic Public Transit Networks",
      authors: "Elena Rodriguez, William Chen",
      abstract: "Public transit networks experience high dynamism during delay events, making standard routing algorithms inefficient. We present a modified A* approach combining dynamic edge weight penalties based on real-time API latency data. Simulated over the Chicago CTA network graph, the proposed heuristic significantly reduces pathfinding time by 22% during high-disruption events compared to traditional unified weighting schemes.",
      doi: "10.5281/zenodo.1234568"
    },
    {
      id: "YCRJ-2026-003",
      title: "Assessing Hallucination Rates in Small Language Models for Code Generation",
      authors: "Aisha Patel, Thomas Wright, Lin Zhao, Omar Al-Fayed",
      abstract: "While Large Language Models excel at code generation, their execution on local environments is limited by parameter size constraints. We systematically analyze hallucination frequencies in three quantized small language models (<8B parameters) against a standardized Python algorithms benchmark. Our findings highlight that while syntax error rates are low, localized logical hallucinations persist under specific loop-invariant conditions.",
      doi: "10.5281/zenodo.1234569"
    }
  ];

  return (
    <div className="pb-24">
      {/* Journal Header */}
      <div className="bg-[#0A1628] py-20 text-white relative border-b-4 border-[#C9A84C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block">Archive Directory</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Inaugural Issue — 2026</h1>
            <p className="text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              Vol. 1, Issue 1. Presenting the highest-ranked undergraduate contributions from the Cohort 1 Research Sprint.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
               <div className="bg-[#1E293B] px-4 py-2 rounded flex items-center text-sm font-medium border border-[#334155]">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" /> ISSN Registered
               </div>
               <div className="bg-[#1E293B] px-4 py-2 rounded flex items-center text-sm font-medium border border-[#334155]">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#C9A84C]" /> Zenodo DOI Archived
               </div>
               <div className="bg-[#1E293B] px-4 py-2 rounded flex items-center text-sm font-medium border border-[#334155]">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" /> Google Scholar Indexed
               </div>
            </div>
        </div>
      </div>

      {/* Papers List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-10">
          
        <div className="flex justify-between items-end border-b-2 border-gray-200 pb-4 mb-10">
           <h2 className="text-2xl font-serif font-bold text-[#0A1628]">Research Articles</h2>
           <span className="text-gray-500 text-sm font-medium">{papers.length} Papers</span>
        </div>

        {papers.map((paper, index) => (
          <Card key={paper.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-4">
                 <span className="text-sm font-bold text-gray-500">{paper.id}</span>
                 <span className="inline-flex items-center text-xs font-semibold bg-gray-100 px-2 py-1 flex-shrink-0 text-gray-600 rounded">
                    DOI: {paper.doi} <ExternalLink className="w-3 h-3 ml-1" />
                 </span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-[#0A1628] leading-tight mb-3">
                {paper.title}
              </h3>
              
              <p className="text-[#C9A84C] font-semibold mb-6">
                {paper.authors}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-md border border-gray-100 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2">Abstract</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {paper.abstract}
                </p>
              </div>
              
              <div className="flex justify-start">
                  <Button variant="outline" disabled className="flex items-center text-gray-500 border-gray-300">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Platform HTML
                  </Button>
                  <Button variant="outline" disabled className="ml-4 flex items-center text-gray-500 border-gray-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF (Demo)
                  </Button>
              </div>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}
