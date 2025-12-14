// src/app/about/AboutContent.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { currentLeadership, pastLeadership } from '@/lib/data/leadership';
import { 
  BookOpen, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Lightbulb,
  TrendingUp,
  Shield,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Crown,
  History,
  ExternalLink,
  Book
} from 'lucide-react';

export default function AboutContent() {
  const [selectedModal, setSelectedModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type) => {
    setSelectedModal(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedModal(null), 300);
  };

  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and ethical conduct in all our actions.',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace modern teaching methods and technology to enhance learning.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive environment where everyone belongs and thrives.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in academics and character development.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'We provide a secure and nurturing environment for all students.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'We prepare students to be responsible global citizens.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const achievements = [
    {
      icon: Star,
      number: '15+',
      label: 'Years of Excellence',
      description: 'Serving the community since 2009'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Success Rate',
      description: 'Students achieving their goals'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Students Enrolled',
      description: 'Growing community of learners'
    },
    {
      icon: TrendingUp,
      number: '50+',
      label: 'Qualified Teachers',
      description: 'Experienced and dedicated staff'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Qualified & Experienced Teachers',
      description: 'Our educators are highly trained professionals dedicated to student success.'
    },
    {
      icon: CheckCircle,
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms, computer labs, and learning resources.'
    },
    {
      icon: CheckCircle,
      title: 'Holistic Development',
      description: 'We focus on academics, character, and life skills development.'
    },
    {
      icon: CheckCircle,
      title: 'Innovative Programs',
      description: 'UCMAS, Coding, Cultural Arts, and more specialized programs.'
    },
    {
      icon: CheckCircle,
      title: 'Safe Environment',
      description: '24/7 security and a nurturing atmosphere for all students.'
    },
    {
      icon: CheckCircle,
      title: 'Strong Community',
      description: 'Active parent involvement and community partnerships.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        badge="About Us"
        title="Excellence in Education Since 2009"
        description="Nurturing young minds and building future leaders through quality education and innovative programs"
        icon={BookOpen}
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/school-building.jpg"
                  alt="St. Michael's School Building"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Building Tomorrow's Leaders Today
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  St. Michael's School was founded in 2009 with a vision to provide quality education 
                  that nurtures both academic excellence and character development. Located in the 
                  heart of Akim Oda, Asawase, we have grown from a small learning center to one of 
                  the most respected educational institutions in the region.
                </p>
                <p>
                  Our journey has been marked by continuous innovation and a steadfast commitment to 
                  our students' success. We believe that every child deserves access to quality education 
                  that prepares them not just for exams, but for life.
                </p>
                <p>
                  Today, we serve over 500 students from Creche to Junior High School, offering a 
                  comprehensive curriculum enhanced by special programs like UCMAS, Coding, and 
                  Cultural Arts. Our partnership with Edify Ghana further strengthens our commitment 
                  to educational excellence.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/admissions">
                  Join Our School
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/about/history" variant="secondary">
                  <Book className="w-4 h-4 mr-2" />
                  Read Our History
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card 
              className="bg-white border-2 border-primary-100 overflow-hidden cursor-pointer group hover:shadow-2xl transition-all" 
              onClick={() => openModal('mission')}
            >
              <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed line-clamp-3">
                  To provide quality, holistic education that nurtures academic excellence, 
                  character development, and practical skills...
                </p>
                <div className="flex items-center gap-2 text-primary-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                  <span>Read Full Mission</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Card>

            {/* Vision */}
            <Card 
              className="bg-white border-2 border-purple-100 overflow-hidden cursor-pointer group hover:shadow-2xl transition-all"
              onClick={() => openModal('vision')}
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed line-clamp-3">
                  To be the leading educational institution recognized for excellence in 
                  academics, innovation in teaching...
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                  <span>Read Full Vision</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core values that guide our educational approach and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} hover className={`${value.bgColor} border-2 border-transparent hover:border-gray-200`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <IconComponent className="w-10 h-10 text-yellow-300" strokeWidth={2} />
                  </div>
                  <div className="text-5xl font-bold mb-2 text-yellow-300">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-blue-100">
                    {achievement.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of choosing St. Michael's School for your child's education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} hover className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <reason.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/admissions" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
              Ready to join us? Apply for admission
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Current Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <Crown className="w-4 h-4" />
              <span>Our Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Current Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced educators and administrators dedicated to your child's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentLeadership.map((leader) => (
              <Card key={leader.id} hover className="overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Photo */}
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-20 h-20 text-primary-300" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-1">
                        {leader.position}
                      </p>
                      <p className="text-sm text-gray-500">
                        {leader.tenure}
                      </p>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {leader.bio}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {leader.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <a 
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center gap-2 text-primary-600 text-sm font-semibold hover:text-primary-700"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <History className="w-4 h-4" />
              <span>Our Heritage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Past Leaders & Their Legacy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honoring those who built the foundation of our excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastLeadership.map((leader) => (
              <Card key={leader.id} hover className="bg-white">
                {/* Photo */}
                <div className="relative w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-24 h-24 text-purple-300" />
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-1">
                    {leader.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {leader.tenure}
                  </p>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Contributions */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Major Contributions:</h4>
                    <ul className="space-y-1">
                      {leader.contributions.slice(0, 3).map((contribution, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Legacy */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600 italic">
                      <strong className="text-gray-900">Legacy:</strong> {leader.legacy}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Experience St. Michael's School
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a visit to see our facilities, meet our teachers, and discover why parents 
            trust us with their children's education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule a Visit
            </Button>
            <Button href="/programs" variant="secondary" size="lg">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Mission/Vision Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedModal === 'mission' && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                <Target className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-primary-600 font-semibold">What Drives Us Every Day</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide quality, holistic education that nurtures academic excellence, 
                character development, and practical skills, preparing students to become 
                responsible citizens and future leaders who contribute positively to society.
              </p>

              <div className="bg-primary-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Our Mission in Action:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Delivering high-quality education that meets international standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Fostering character development and moral values in every student</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Equipping students with practical skills for the 21st century</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Building responsible citizens who contribute to community development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Preparing future leaders through innovative programs and mentorship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {selectedModal === 'vision' && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Eye className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-purple-600 font-semibold">Where We're Heading</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading educational institution recognized for excellence in 
                academics, innovation in teaching, and holistic student development, 
                setting the standard for quality education in Ghana and beyond.
              </p>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Our Vision Goals:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Become the #1 choice for quality education in the region</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lead in innovative teaching methods and educational technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Achieve 100% success rate in national examinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Establish international partnerships and recognition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Create a model that other schools aspire to replicate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}