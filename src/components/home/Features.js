// src/components/home/Features.js

import { Shield, Heart, Lightbulb, Users, Award, Globe, Calendar, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure campus with 24/7 monitoring and trained security personnel',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Heart,
      title: 'Caring Teachers',
      description: 'Experienced educators dedicated to nurturing every child',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Learning',
      description: 'Modern teaching methods with technology integration',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Individual attention with optimal student-teacher ratios',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Excellence Focus',
      description: 'Proven track record of academic and extracurricular success',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International curriculum aligned with best practices',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional values with modern innovation to provide the best educational experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`${feature.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-gray-100`}>
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary-50 to-purple-50 px-8 py-6 rounded-2xl border-2 border-primary-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Ready to experience the difference?</span>
            </div>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule a Tour
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}