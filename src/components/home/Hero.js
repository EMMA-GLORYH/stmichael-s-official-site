// src/components/home/Hero.js

import Button from '@/components/ui/Button';
import Image from 'next/image';
import { Sparkles, Award, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Partnership Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full mb-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Proud Partner of Edify Ghana</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excellence in Education,
              <span className="block text-yellow-300 mt-2">Excellence in Character</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Nurturing young minds from Creche to Junior High School with innovative programs including UCMAS, Coding, and Cultural Arts.
            </p>

            {/* Key Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary-900" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">UCMAS</div>
                  <div className="text-xs text-blue-200">Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary-900" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Tech Skills</div>
                  <div className="text-xs text-blue-200">Coding & More</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary-900" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Cultural</div>
                  <div className="text-xs text-blue-200">Excellence</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/admissions/apply" size="lg" className="shadow-xl hover:shadow-2xl">
                Apply for Admission
              </Button>
              <Button href="/special-programs" variant="outline" size="lg" className="shadow-xl">
                Explore Programs
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>15+ Years Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-300" />
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>98% Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Area */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-white/20">
              {/* School Image */}
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/hero/Untitled.jpg"
                  alt="School Campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white text-primary-900 rounded-xl shadow-2xl p-5 hover:scale-105 transition-transform border-4 border-primary-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-yellow-400 text-primary-900 rounded-xl shadow-2xl p-5 hover:scale-105 transition-transform border-4 border-yellow-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-yellow-800">Happy Students</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Modern Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}