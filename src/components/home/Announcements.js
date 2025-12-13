// src/components/home/Announcements.js

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { announcements } from '@/lib/data/programs';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export default function Announcements() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Latest News & Announcements
                    </h2>
                    <p className="text-lg text-gray-600">
                        Stay updated with what's happening at our school
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {announcements.map((announcement) => (
                        <Link key={announcement.id} href={announcement.link}>
                            <Card hover className="h-full cursor-pointer">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{format(new Date(announcement.date), 'MMMM d, yyyy')}</span>
                                </div>

                                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                                    {announcement.category}
                                </span>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                    {announcement.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {announcement.excerpt}
                                </p>

                                <div className="flex items-center text-primary-600 font-semibold text-sm">
                                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="/news" variant="secondary">
                        View All News
                    </Button>
                </div>
            </div>
        </section>
    );
}