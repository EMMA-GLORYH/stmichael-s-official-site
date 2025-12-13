// src/components/layout/Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '/about',
            dropdown: [
                { name: 'Our Story', href: '/about' },
                { name: 'Mission & Vision', href: '/about/mission' },
                { name: 'Leadership', href: '/about/leadership' },
                { name: 'Facilities', href: '/about/facilities' },
            ]
        },
        {
            name: 'Programs',
            href: '/programs',
            dropdown: [
                { name: 'Early Years', href: '/programs/early-years' },
                { name: 'Kindergarten', href: '/programs/kindergarten' },
                { name: 'Primary School', href: '/programs/primary' },
                { name: 'Junior High', href: '/programs/junior-high' },
            ]
        },
        {
            name: 'Special Programs',
            href: '/special-programs',
            dropdown: [
                { name: 'UCMAS', href: '/special-programs/ucmas' },
                { name: 'Coding', href: '/special-programs/coding' },
                { name: 'Typing Team', href: '/special-programs/typing' },
                { name: 'Science & Math', href: '/special-programs/science-math' },
                { name: 'Cultural Dance', href: '/special-programs/cultural-dance' },
            ]
        },
        { name: 'Admissions', href: '/admissions' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="bg-primary-700 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex gap-4">
                            <span>📞 +233-XXX-XXX-XXX</span>
                            <span className="hidden sm:inline">✉️ info@yourschool.com</span>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/careers" className="hover:text-yellow-300">Careers</Link>
                            <Link href="/gallery" className="hover:text-yellow-300">Gallery</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            S
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-bold text-lg text-gray-900">Your School Name</div>
                            <div className="text-xs text-gray-600">Excellence in Education</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium flex items-center gap-1 transition-colors"
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>

                                {item.dropdown && (
                                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button href="/admissions/apply" size="sm">
                            Apply Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t">
                        {navigation.map((item) => (
                            <div key={item.name} className="py-2">
                                <Link
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-4 mt-2 space-y-1">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 px-4">
                            <Button href="/admissions/apply" className="w-full">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}