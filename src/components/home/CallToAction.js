// src/components/home/CallToAction.js

import Button from '@/components/ui/Button';

export default function CallToAction() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Join Our School Family?
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                    Give your child the gift of quality education with innovative programs,
                    experienced teachers, and a nurturing environment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button href="/admissions/apply" variant="outline" size="lg">
                        Apply for Admission
                    </Button>
                    <Button href="/contact" variant="secondary" size="lg">
                        Schedule a Visit
                    </Button>
                </div>

                {/* Additional Info */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="grid sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold mb-2">📞 Contact Us</div>
                            <p className="text-blue-100">+233-XXX-XXX-XXX</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold mb-2">✉️ Email Us</div>
                            <p className="text-blue-100">info@yourschool.com</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold mb-2">📍 Visit Us</div>
                            <p className="text-blue-100">Accra, Ghana</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}