// src/app/about/history/page.js

import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  History, 
  Award, 
  Users, 
  Building, 
  BookOpen, 
  Trophy,
  Sparkles,
  TrendingUp,
  Globe,
  Handshake,
  GraduationCap,
  Target
} from 'lucide-react';

export const metadata = {
  title: 'Our History - St. Michael\'s School',
  description: 'Discover the rich history and journey of St. Michael\'s School from 2009 to present.',
};

export default function HistoryPage() {
  const timeline = [
    {
      year: '2009',
      title: 'The Foundation',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'St. Michael\'s School was founded with a vision to provide quality education to the community.',
      highlights: [
        'Started with 50 students and 5 teachers',
        'Established in Akim Oda, Asawase',
        'Began with Creche and Nursery levels',
        'Founded by Rev. Fr. John Appiah'
      ]
    },
    {
      year: '2011',
      title: 'First Expansion',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      description: 'Expanded to include Primary levels (Basic 1-3) and doubled our student population.',
      highlights: [
        'Student enrollment reached 120',
        'Added 8 new qualified teachers',
        'Constructed new classroom blocks',
        'Introduced school bus service'
      ]
    },
    {
      year: '2013',
      title: 'Academic Recognition',
      icon: Award,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      description: 'Achieved outstanding results in national assessments, gaining recognition in the region.',
      highlights: [
        '95% pass rate in assessments',
        'Received "Best New School" award',
        'Established computer laboratory',
        'Launched after-school programs'
      ]
    },
    {
      year: '2015',
      title: 'Leadership Transition',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      description: 'New leadership under Rev. Fr. Michael Mensah brought fresh vision and innovation.',
      highlights: [
        'Rev. Fr. Michael Mensah became Director',
        'Introduced modern teaching methods',
        'Expanded to Junior High School',
        'Student population reached 300'
      ]
    },
    {
      year: '2017',
      title: 'Innovation Era',
      icon: Sparkles,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      description: 'Launched innovative programs including UCMAS and Coding to enhance student skills.',
      highlights: [
        'Introduced UCMAS mental arithmetic',
        'Started coding and programming classes',
        'Launched cultural dance program',
        'Modernized school facilities'
      ]
    },
    {
      year: '2019',
      title: 'Strategic Partnership',
      icon: Handshake,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      description: 'Established partnership with Edify Ghana, opening doors to new opportunities.',
      highlights: [
        'Partnered with Edify Ghana NGO',
        'Access to international competitions',
        'Teacher training programs',
        'Educational resource sharing'
      ]
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      icon: Globe,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      description: 'Embraced technology with digital learning platforms and smart classrooms.',
      highlights: [
        'Implemented e-learning platform',
        'Installed smart boards in classrooms',
        'Launched school website and app',
        'Digital library and resources'
      ]
    },
    {
      year: '2023',
      title: 'Excellence Milestone',
      icon: Trophy,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      description: 'Achieved 98% success rate and won multiple inter-school competitions.',
      highlights: [
        '98% success in BECE examinations',
        'Won 5 inter-school competitions',
        'Student enrollment exceeded 500',
        'Expanded special programs'
      ]
    },
    {
      year: '2025',
      title: 'Present Day',
      icon: GraduationCap,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'Continuing our journey of excellence with 15+ years of transforming lives.',
      highlights: [
        '500+ students across all levels',
        '50+ qualified teaching staff',
        '15+ innovative programs',
        'Leading school in the region'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        badge="Our Journey"
        title="15+ Years of Excellence"
        description="From humble beginnings to becoming a leading educational institution - this is our story"
        icon={History}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            A Legacy of Transforming Lives
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Since 2009, St. Michael's School has been on a remarkable journey of growth, 
            innovation, and excellence. What started with 50 students and a vision has 
            blossomed into a thriving institution that shapes the future of over 500 students 
            every year. Our story is one of dedication, perseverance, and an unwavering 
            commitment to quality education.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <History className="w-4 h-4 inline mr-2" />
              Our Timeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Key moments that shaped our institution
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-purple-200 to-primary-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    {/* Content */}
                    <div className={`lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card hover className={`${item.bgColor} border-2 border-gray-100`}>
                        <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} lg:flex-col items-start gap-4`}>
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{item.year}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <ul className="space-y-2">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-600 rounded-full shadow-lg z-10"></div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              The impact we've made over 15+ years
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-lg">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-lg">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-lg">Programs Offered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Be Part of Our Continuing Story
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join us as we continue to write new chapters of excellence and transform more lives through quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" size="lg">
              Apply for Admission
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}