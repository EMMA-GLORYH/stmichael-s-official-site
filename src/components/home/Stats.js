// src/components/home/Stats.js

import { schoolStats } from '@/lib/data/programs';

export default function Stats() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {schoolStats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-5xl mb-3 group-hover:animate-bounce">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-primary-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}