// src/app/about/leadership/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import { currentLeadership, pastLeadership } from '@/lib/data/leadership';
import { Crown, Mail, Phone, CheckCircle, Star, Award, Users, History, ExternalLink } from 'lucide-react';

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLeaderModal = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedLeader(null), 300);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        badge="Leadership Team"
        title="Meet Our Leaders"
        description="Experienced educators and visionaries dedicated to shaping the future of our students"
        icon={Crown}
      />

      {/* Current Leadership */}
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
              Click on any leader to learn more about them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentLeadership.map((leader) => (
              <Card 
                key={leader.id} 
                hover 
                className="cursor-pointer group"
                onClick={() => openLeaderModal(leader)}
              >
                {/* Photo */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-300" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-semibold text-sm mb-2">
                  {leader.position}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  {leader.tenure}
                </p>

                {/* View More */}
                <div className="flex items-center gap-2 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Leadership */}
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
              Click to learn about their lasting legacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastLeadership.map((leader) => (
              <Card 
                key={leader.id} 
                hover 
                className="cursor-pointer bg-white group"
                onClick={() => openLeaderModal(leader)}
              >
                {/* Photo */}
                <div className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-purple-300" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-purple-600 font-semibold text-sm mb-2">
                  {leader.position}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Served: {leader.tenure}
                </p>

                {/* View More */}
                <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>View Legacy</span>
                  <ExternalLink className="w-4 h-4" />
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

      {/* Leader Detail Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
      >
        {selectedLeader && (
          <div>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Photo */}
              <div className="md:w-1/3">
                <div className="relative w-full h-80 bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {selectedLeader.status === 'current' ? (
                      <Users className="w-32 h-32 text-primary-300" />
                    ) : (
                      <Award className="w-32 h-32 text-purple-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {selectedLeader.name}
                </h3>
                <p className={`text-xl font-semibold mb-2 ${selectedLeader.status === 'current' ? 'text-primary-600' : 'text-purple-600'}`}>
                  {selectedLeader.position}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">
                    {selectedLeader.status === 'current' ? 'Tenure:' : 'Served:'}
                  </span> {selectedLeader.tenure}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedLeader.bio}
                </p>
              </div>
            </div>

            {/* Achievements or Contributions */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                {selectedLeader.status === 'current' ? (
                  <>
                    <Award className="w-6 h-6 text-primary-600" />
                    Key Achievements
                  </>
                ) : (
                  <>
                    <Star className="w-6 h-6 text-yellow-500" />
                    Major Contributions
                  </>
                )}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {(selectedLeader.achievements || selectedLeader.contributions)?.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-3 p-4 rounded-lg ${selectedLeader.status === 'current' ? 'bg-green-50' : 'bg-purple-50'}`}>
                    {selectedLeader.status === 'current' ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-purple-700">{idx + 1}</span>
                      </div>
                    )}
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legacy (for past leaders) */}
            {selectedLeader.legacy && (
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-600 mb-8">
                <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Lasting Legacy
                </h4>
                <p className="text-gray-700 italic text-lg">
                  "{selectedLeader.legacy}"
                </p>
              </div>
            )}

            {/* Contact (for current leaders) */}
            {selectedLeader.status === 'current' && (
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                <a 
                  href={`mailto:${selectedLeader.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a 
                  href="tel:+233552735903"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Office
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}