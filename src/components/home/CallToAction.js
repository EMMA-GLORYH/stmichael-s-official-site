// src/components/home/CallToAction.js

import Button from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, ArrowRight, GraduationCap, CheckCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="text-2xl"></span>
            <span>Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Join Our School Family?
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Give your child the gift of quality education with innovative programs, 
            experienced teachers, and a nurturing environment that prepares them for success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button href="/admissions/apply" variant="outline" size="lg" className="shadow-2xl hover:shadow-3xl group">
              <span>Apply for Admission</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="shadow-2xl">
              Schedule a Visit
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="text-yellow-300 text-xl">✓</span>
              <span>15+ Years Excellence</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="text-yellow-300 text-xl">✓</span>
              <span>500+ Happy Families</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="text-yellow-300 text-xl">✓</span>
              <span>98% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/20">
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <Phone className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-blue-100 text-sm mb-2">Monday - Friday, 8AM - 5PM</p>
            <a href="tel:+233XXXXXXXXX" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
              +233-552-735-903
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <Mail className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-blue-100 text-sm mb-2">Get a response within 24 hours</p>
            <a href="mailto:info@yourschool.com" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
              stmichaelschool23@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <MapPin className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Visit Us</h3>
            <p className="text-blue-100 text-sm mb-2">Come see our facilities</p>
            <p className="text-yellow-300 font-semibold">
              Akim Oda, Asawase
            </p>
          </div>

          {/* Office Hours */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <Clock className="w-6 h-6 text-primary-900" />
            </div>
            <h3 className="text-lg font-bold mb-2">Office Hours</h3>
            <p className="text-blue-100 text-sm mb-2">Weekdays</p>
            <p className="text-yellow-300 font-semibold">
              8:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">100%</div>
              <div className="text-sm text-blue-100">Parent Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">15+</div>
              <div className="text-sm text-blue-100">Programs Offered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">50+</div>
              <div className="text-sm text-blue-100">Qualified Teachers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">24/7</div>
              <div className="text-sm text-blue-100">Online Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}