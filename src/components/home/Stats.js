// src/components/home/Stats.js

import { Trophy, GraduationCap, Users, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Trophy,
      number: '15+',
      label: 'Years of Excellence',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Students',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: GraduationCap,
      number: '50+',
      label: 'Qualified Teachers',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Success Rate',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in education for over a decade
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className={`${stat.bgColor} rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-gray-200`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Number */}
                  <div className={`text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-gray-700 font-semibold text-sm">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-gray-900">Award Winning</div>
                <div className="text-xs">Multiple Accolades</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-gray-900">Certified Programs</div>
                <div className="text-xs">International Standards</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🤝</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-gray-900">NGO Partnership</div>
                <div className="text-xs">Edify Ghana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}