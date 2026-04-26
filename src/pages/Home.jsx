import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const phases = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#C9A84C]" />,
    title: "Phase 1: Foundations",
    description: "An intensive 7.5-week curriculum teaching academic writing, LaTeX, visualization, and citation tools from scratch.",
    details: "8 Modules • No Prior Experience Required"
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-[#C9A84C]" />,
    title: "Phase 2: Research Sprint",
    description: "A 5-week supervised sprint where student groups formulate original questions and complete a full paper draft.",
    details: "Senior Mentorship • Original Research"
  },
  {
    icon: <PenTool className="w-8 h-8 text-[#C9A84C]" />,
    title: "Phase 3: Publication",
    description: "Blind peer review and selection for the inaugural journal, featuring DOI assignment and institutional indexing.",
    details: "Peer Reviewed • Searchable Indexing"
  }
];

const problemStatements = [
  "No formal research writing curriculum structure for undergraduates",
  "Unfamiliarity with professional academic tools (LaTeX, Matplotlib)",
  "No access to steady mentorship pipelines",
  "Academic integrity gaps regarding citation and structural norms",
  "Absence of publishing venues specifically for targeted junior computing research",
  "Missed downstream graduate school and internship opportunities"
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#0A1628] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
              From First Principles to Published Research.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-sans">
              The Youth Computing Research Journal is a structured pathway addressing the gap in undergraduate education. We provide the mentorship, curriculum, and platform to take students from zero knowledge to their named publication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold shadow-lg">
                  Apply to Cohort 1
                </Button>
              </Link>
              <Link to="/journal">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-400 text-white hover:text-white hover:border-white focus:text-white focus:bg-transparent bg-transparent">
                  Read the Journal
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <div className="text-4xl font-serif font-bold text-[#0A1628]">7.5</div>
              <div className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">Week Curriculum</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#0A1628]">8</div>
              <div className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">Core Modules</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#0A1628]">5</div>
              <div className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">Week Sprint</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#C9A84C]">DOI</div>
              <div className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">Assigned to Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#0A1628] mb-4">A Three-Phase Pathway</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our program is heavily structured to ensure quality and completion, stepping you through every phase of real academic inquiry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
            
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10"
              >
                <Card className="h-full border-t-4 border-t-[#0A1628] hover:shadow-md transition-shadow">
                  <CardContent className="pt-8 pb-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#0A1628] mb-3">{phase.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{phase.description}</p>
                    <div className="bg-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-[#0A1628]">
                      {phase.details}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/program" className="inline-flex items-center text-[#0A1628] font-semibold hover:text-[#C9A84C] transition-colors">
              Read the full curriculum syllabus <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why YCRJ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#0A1628] mb-6">Why YCRJ?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The gap between undergraduate education and active research participation is wide. Students possess technical abilities but are systematically blocked by key barriers. We built YCRJ to dismantle these barriers intentionally.
              </p>
              
              <div className="space-y-4">
                {problemStatements.map((statement, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-800 font-medium">{statement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 p-8 shadow-inner relative">
                  <div className="absolute inset-0 opacity-20" style={{ 
                      backgroundImage: 'linear-gradient(#0A1628 2px, transparent 2px), linear-gradient(90deg, #0A1628 2px, transparent 2px)', 
                      backgroundSize: '40px 40px' 
                    }}>
                  </div>
                  <div className="relative h-full flex flex-col justify-center bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-white/50 shadow-sm text-center">
                      <BookOpen className="w-12 h-12 text-[#0A1628] mx-auto mb-4 opacity-80" />
                      <h3 className="font-serif text-2xl font-bold text-[#0A1628] mb-2">Designed for the Junior Researcher</h3>
                      <p className="text-gray-600">A deliberate, well-resourced, and community-driven program building credible academic portfolios.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#1E293B] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Join the Initiative</h2>
          <p className="text-lg text-gray-300 mb-10 pb-4 max-w-2xl mx-auto">
            We are actively recruiting passionate student leaders for team positions and extending open calls for institutional partnerships. Help us build the ultimate computing research pathway.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/team">
                <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold shadow-lg">
                  View Open Roles & Partnerships
                </Button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
