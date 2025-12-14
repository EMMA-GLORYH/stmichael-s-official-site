// src/app/about/leadership/page.js

import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card';
import { currentLeadership, pastLeadership } from '@/lib/data/leadership';
import { Crown, Mail, Phone, CheckCircle, Star, Award, Users, History } from 'lucide-react';

export const metadata = {
  title: 'Our Leadership - St. Michael\'s School',
  description: 'Meet the dedicated leaders who guide St. Michael\'s School towards excellence in education.',
};

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        badge="Leadership Team"
        title="Meet Our Leaders"
        description="Experienced educators and visionaries dedicated to shaping the future of our students"
        icon={Crown}
      />

      {/* Current Leadership - Detailed View */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <Crown className="w-4 h-4" />
              <span>Current Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals guiding our school's mission and vision
            </p>
          </div>

          <div className="space-y-12">
            {currentLeadership.map((leader, index) => (
              <Card key={leader.id} hover className="overflow-hidden">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  {/* Photo */}
                  <div className="lg:w-1/3">
                    <div className="relative w-full h-80 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Users className="w-32 h-32 text-primary-300 mb-4" />
                        <p className="text-sm text-primary-600 font-semibold">Photo Coming Soon</p>
                      </div>
                      {/* Uncomment when you add actual images */}
                      {/* <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-xl text-primary-600 font-semibold mb-2">
                        {leader.position}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Tenure:</span> {leader.tenure}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary-600" />
                        Key Achievements
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {leader.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                      <a 
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Send Email
                      </a>
                      <a 
                        href="tel:+233552735903"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Office
                      </a>
                    </div>
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
              Honoring Our Past Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionaries who laid the foundation for our success
            </p>
          </div>

          <div className="space-y-12">
            {pastLeadership.map((leader) => (
              <Card key={leader.id} className="bg-white overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Photo */}
                  <div className="lg:w-1/3">
                    <div className="relative w-full h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Award className="w-32 h-32 text-purple-300 mb-4" />
                        <p className="text-sm text-purple-600 font-semibold">Photo Coming Soon</p>
                      </div>
                      {/* Uncomment when you add actual images */}
                      {/* <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-xl text-purple-600 font-semibold mb-2">
                        {leader.position}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Served:</span> {leader.tenure}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    {/* Contributions */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Major Contributions
                      </h4>
                      <div className="space-y-3">
                        {leader.contributions.map((contribution, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg">
                            <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-purple-700">{idx + 1}</span>
                            </div>
                            <span className="text-sm text-gray-700">{contribution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legacy */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-600">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Lasting Legacy
                      </h4>
                      <p className="text-gray-700 italic">
                        "{leader.legacy}"
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Leadership Philosophy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our leadership team is guided by a commitment to excellence, innovation, and 
            compassionate care for every student. We believe in servant leadership—leading 
            by example and prioritizing the needs of our students, staff, and community above all else.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Servant Leadership</h3>
              <p className="text-sm text-gray-600">Leading by example and service</p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Collaborative</h3>
              <p className="text-sm text-gray-600">Working together for success</p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Excellence Driven</h3>
              <p className="text-sm text-gray-600">Striving for the highest standards</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}