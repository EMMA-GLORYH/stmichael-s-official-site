// src/components/layout/Footer.js

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* School Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">Your School Name</div>
                                <div className="text-xs">Excellence in Education</div>
                            </div>
                        </div>
                        <p className="text-sm mb-4">
                            Nurturing young minds with quality education and innovative programs from Creche to Junior High School.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link href="/programs" className="hover:text-primary-400 transition-colors">Academic Programs</Link></li>
                            <li><Link href="/special-programs" className="hover:text-primary-400 transition-colors">Special Programs</Link></li>
                            <li><Link href="/admissions" className="hover:text-primary-400 transition-colors">Admissions</Link></li>
                            <li><Link href="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>
                            <li><Link href="/news" className="hover:text-primary-400 transition-colors">News & Events</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Special Programs</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/special-programs/ucmas" className="hover:text-primary-400 transition-colors">UCMAS</Link></li>
                            <li><Link href="/special-programs/coding" className="hover:text-primary-400 transition-colors">Coding & Programming</Link></li>
                            <li><Link href="/special-programs/typing" className="hover:text-primary-400 transition-colors">Typing Team</Link></li>
                            <li><Link href="/special-programs/science-math" className="hover:text-primary-400 transition-colors">Science & Math Team</Link></li>
                            <li><Link href="/special-programs/cultural-dance" className="hover:text-primary-400 transition-colors">Cultural Dance</Link></li>
                            <li><Link href="/partnerships/edify-ghana" className="hover:text-primary-400 transition-colors">Edify Partnership</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                <span>Your School Address<br />Accra, Ghana</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                                <span>+233-XXX-XXX-XXX</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                                <span>info@yourschool.com</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                            >
                                Get Directions
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>
                        © {currentYear} Your School Name. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}