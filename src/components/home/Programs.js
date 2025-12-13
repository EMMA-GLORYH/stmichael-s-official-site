// src/components/home/Programs.js

import Link from 'next/link';
import Card from '@/components/ui/Card';
import { academicPrograms, specialPrograms } from '@/lib/data/programs';
import { 
  ArrowRight, 
  Baby, 
  Palette, 
  BookOpen, 
  GraduationCap,
  Calculator,
  Code2,
  Keyboard,
  FlaskConical,
  Music
} from 'lucide-react';

const iconMap = {
  'early-years': Baby,
  'kindergarten': Palette,
  'primary': BookOpen,
  'junior-high': GraduationCap,
  'ucmas': Calculator,
  'coding': Code2,
  'typing': Keyboard,
  'science-math': FlaskConical,
  'cultural-dance': Music
};

export default function Programs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Programs Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Academic Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive education journey from Creche to Junior High School
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {academicPrograms.map((program) => {
            const IconComponent = iconMap[program.id];
            return (
              <Link key={program.id} href={program.link}>
                <div className="group relative h-full">
                  <Card hover className="h-full cursor-pointer border-2 border-gray-100 hover:border-primary-200">
                    {/* Icon with Gradient Background */}
                    <div className={`relative mb-6`}>
                      <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" strokeWidth={2} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Age Range Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-xs font-bold">👶</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Age Range</div>
                        <div className="text-sm font-semibold text-primary-600">{program.ageRange}</div>
                      </div>
                    </div>

                    {/* Levels */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2 font-semibold">Levels Offered:</div>
                      <div className="flex flex-wrap gap-1">
                        {program.levels.slice(0, 3).map((level, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-md font-medium text-gray-700">
                            {level}
                          </span>
                        ))}
                        {program.levels.length > 3 && (
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-md font-semibold">
                            +{program.levels.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all pt-4 border-t border-gray-100">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Special Programs Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Beyond Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Special Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Developing well-rounded students through innovative enrichment programs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialPrograms.map((program) => {
            const IconComponent = iconMap[program.id];
            return (
              <Link key={program.id} href={program.link}>
                <div className="group relative h-full">
                  <Card hover className="h-full cursor-pointer border-2 border-gray-100 hover:border-purple-200 overflow-hidden">
                    {/* Top Accent Bar */}
                    <div className={`h-2 ${program.color} -mx-6 -mt-6 mb-4`}></div>

                    {/* Icon */}
                    <div className="relative mb-5">
                      <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8" strokeWidth={2} />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs">★</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-5">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-xs font-bold">✓</span>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all pt-4 border-t border-gray-100">
                      Explore Program <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-purple-50 px-8 py-4 rounded-full">
            <span className="text-gray-700">Interested in our programs?</span>
            <Link href="/admissions" className="text-primary-600 font-bold hover:text-primary-700 flex items-center gap-1">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}