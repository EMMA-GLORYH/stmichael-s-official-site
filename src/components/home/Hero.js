// src/components/home/Hero.js

import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-2xl">🤝</span>
                            <span className="text-sm font-medium">Proud Partner of Edify Ghana</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Excellence in Education,
                            <span className="block text-yellow-300">Excellence in Character</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                            Nurturing young minds from Creche to Junior High School with innovative programs including UCMAS, Coding, and Cultural Arts.
                        </p>

                        {/* Key Features */}
                        <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                UCMAS Certified
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                Coding Education
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                Cultural Excellence
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button href="/admissions/apply" size="lg">
                                Apply for Admission
                            </Button>
                            <Button href="/special-programs" variant="outline" size="lg">
                                Explore Programs
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Image Placeholder */}
                    <div className="relative">
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                            {/* Placeholder for school image */}
                            <div className="aspect-square bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-8xl mb-4 block">🏫</span>
                                    <p className="text-primary-900 font-semibold text-lg">
                                        Add your school image to<br />
                                        public/images/hero/
                                    </p>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -left-6 bg-white text-primary-900 rounded-xl shadow-xl p-4">
                                <div className="text-3xl font-bold">15+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>

                            <div className="absolute -top-6 -right-6 bg-yellow-400 text-primary-900 rounded-xl shadow-xl p-4">
                                <div className="text-3xl font-bold">500+</div>
                                <div className="text-sm text-primary-800">Students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
}