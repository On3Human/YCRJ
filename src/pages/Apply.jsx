import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AlertCircle, FileCheck, Users, GraduationCap } from 'lucide-react';

export default function Apply() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#0A1628] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Apply to Cohort 1</h1>
          <p className="text-xl text-gray-300 font-sans">
            Ready to transition from student to published researcher? Join the inaugural 15-person cohort.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* Main Form Column */}
          <div className="md:col-span-7 lg:col-span-8">
            <Card className="shadow-lg border-gray-100">
              <CardHeader className="bg-white border-b border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-[#0A1628]">Registration Form</h2>
              </CardHeader>
              <CardContent className="p-8">
                
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md flex items-start mb-8 text-sm font-medium border border-blue-100">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-blue-600" />
                  <div>
                    This application is currently closed intentionally for demo status. Applications will open officially in Month 2.
                  </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                      <input type="text" disabled className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                      <input type="text" disabled className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">University Email Address *</label>
                    <input type="email" disabled className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed" placeholder="student@university.edu" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Year of Study *</label>
                    <select disabled className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed text-gray-500">
                      <option>Select year...</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Computing Subfield Interest *</label>
                    <select disabled className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed text-gray-500">
                      <option>Select area...</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">E.g., AI/ML, Cybersecurity, Systems, Software Eng.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Motivation Statement (100-200 words) *</label>
                    <textarea disabled rows={5} className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed" placeholder="Why do you want to join YCRJ?"></textarea>
                  </div>

                  <hr className="border-gray-200" />

                  <Button variant="primary" disabled className="w-full py-3 text-lg font-bold">
                    Applications Open Month 2
                  </Button>
                </form>

              </CardContent>
            </Card>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <Card className="bg-[#0A1628] text-white border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-[#C9A84C] mb-4 flex items-center">
                  <FileCheck className="w-5 h-5 mr-2" /> Eligibility Check
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-2 text-lg leading-none">•</span>
                    Must be an undergraduate student at time of submission.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-2 text-lg leading-none">•</span>
                    No prior research or publishing experience required!
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-2 text-lg leading-none">•</span>
                    Must commit to the full 14-week program duration.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-2 text-lg leading-none">•</span>
                    Access to a laptop and basic programming knowledge.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-[#0A1628] mb-4">What You Gain</h3>
                <div className="space-y-5">
                  <div className="flex">
                    <div className="bg-blue-50 p-2 rounded mr-3 h-fit border border-blue-100">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Phase 1 Certificate</h4>
                      <p className="text-xs text-gray-600 mt-1">Verifiable completion credential showing LaTeX & writing competency.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-yellow-50 p-2 rounded mr-3 h-fit border border-yellow-100">
                      <FileCheck className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Potential DOI Publication</h4>
                      <p className="text-xs text-gray-600 mt-1">If your group paper passes review, you become a named author.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-green-50 p-2 rounded mr-3 h-fit border border-green-100">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Mentorship Pipeline</h4>
                      <p className="text-xs text-gray-600 mt-1">Direct access to senior researchers and graduate pathway guidance.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
