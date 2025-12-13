// src/components/home/Announcements.js

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { announcements } from '@/lib/data/programs';
import { Calendar, ArrowRight, Bell, Star, TrendingUp, Mail, Users } from 'lucide-react';
import { format } from 'date-fns';

const categoryIcons = {
  'Admissions': Bell,
  'Achievements': Star,
  'Events': Calendar
};

const categoryColors = {
  'Admissions': 'bg-blue-100 text-blue-700',
  'Achievements': 'bg-yellow-100 text-yellow-700',
  'Events': 'bg-purple-100 text-purple-700'
};

export default function Announcements() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-4 shadow-md">
            <Bell className="w-4 h-4 text-primary-600" />
            <span className="text-gray-700">Stay Updated</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Announcements
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed about what's happening at our school
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {announcements.map((announcement, index) => {
            const CategoryIcon = categoryIcons[announcement.category];
            const categoryColor = categoryColors[announcement.category];
            
            return (
              <Link key={announcement.id} href={announcement.link}>
                <div className="group relative h-full">
                  <Card hover className="h-full cursor-pointer border-2 border-white overflow-hidden bg-white/80 backdrop-blur-sm">
                    {/* Top Gradient Bar */}
                    <div className={`h-1.5 ${categoryColor} -mx-6 -mt-6 mb-6`}></div>

                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Published</div>
                        <div className="font-semibold text-gray-700">
                          {format(new Date(announcement.date), 'MMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${categoryColor} text-xs font-semibold rounded-lg`}>
                        <CategoryIcon className="w-3.5 h-3.5" />
                        {announcement.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight">
                      {announcement.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {announcement.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all pt-4 border-t border-gray-100">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
                  </Card>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Newsletter Signup Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <TrendingUp className="w-4 h-4" />
                Never Miss an Update
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest news, events, and announcements delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
                />
                <Button size="md" className="sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-10 h-10 text-primary-600" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <div className="text-gray-900 font-bold text-lg">Join 500+ Parents</div>
                </div>
                <div className="text-sm text-gray-600">Who receive our weekly updates</div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button href="/news" variant="secondary" size="lg">
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
}