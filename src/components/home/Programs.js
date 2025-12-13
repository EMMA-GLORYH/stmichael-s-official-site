// src/components/home/Programs.js

import Link from 'next/link';
import Card from '@/components/ui/Card';
import { academicPrograms, specialPrograms } from '@/lib/data/programs';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Academic Programs */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Academic Programs
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive education from Creche to Junior High School
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {academicPrograms.map((program) => (
                        <Link key={program.id} href={program.link}>
                            <Card hover className="h-full cursor-pointer">
                                <div className={`text-5xl mb-4 ${program.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    {program.description}
                                </p>
                                <div className="space-y-2 mb-4">
                                    <div className="text-xs font-semibold text-primary-600">
                                        Age: {program.ageRange}
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {program.levels.slice(0, 3).map((level, idx) => (
                                            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                {level}
                                            </span>
                                        ))}
                                        {program.levels.length > 3 && (
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                +{program.levels.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Special Programs */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Special Programs
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Beyond academics - developing well-rounded students
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialPrograms.map((program) => (
                        <Link key={program.id} href={program.link}>
                            <Card hover className="h-full cursor-pointer">
                                <div className={`text-5xl mb-4 ${program.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {program.description}
                                </p>
                                <ul className="space-y-1 mb-4">
                                    {program.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                                            <span className="text-green-500 mr-2">✓</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                    Explore Program <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}