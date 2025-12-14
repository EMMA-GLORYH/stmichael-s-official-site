// src/app/admissions/page.js

import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  admissionProcess, 
  admissionRequirements, 
  feeStructure, 
  importantDates,
  faqs 
} from '@/lib/data/admissions';

import {
  FileText,
  Phone,
  Search,
  Users,
  CheckCircle,
  Calendar,
  Mail,
  GraduationCap,
  UserCheck,
  Building,
  Smartphone,
  Wallet,
  Award,
  Heart,
  Star
} from 'lucide-react';


export const metadata = {
  title: 'Admissions - St. Michael\'s School',
  description: 'Apply for admission to St. Michael\'s School. Learn about requirements, fees, and our application process.',
};

const iconMap = {
  phone: Phone,
  file: FileText,
  clipboard: ClipboardCheck,
  check: CheckCircle,
  users: Users,
  calendar: Calendar,
  download: Download,
  clock: Clock,
  mail: Mail,
  map: MapPin
};


export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        badge="Join Our School"
        title="Admissions Information"
        description="Start your child's journey to excellence. We welcome students from Creche to Junior High School."
        icon={GraduationCap}
      />

      {/* Quick Apply CTA */}
      <section className="py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white border-4 border-primary-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Ready to Apply?</h3>
                <p className="text-blue-100">
                  Complete our online application form in just a few minutes and take the first step towards excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/admissions/apply" variant="outline" size="lg">
                  Apply Online Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Schedule Visit
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <ClipboardCheck className="w-4 h-4 inline mr-2" />
              Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to complete your child's admission
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {admissionProcess.map((step, index) => {
            const IconComponent = step.icon || CheckCircle;

            return (
                <Card key={step.step} hover className="relative text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.step}
                </div>

                <div className="w-16 h-16 mx-auto mb-4 mt-4 bg-primary-100 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                    {step.description}
                </p>
                </Card>
            );
            })}

          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <FileText className="w-4 h-4 inline mr-2" />
              Requirements
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What You'll Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Required documents vary by grade level. Here's what you need to prepare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(admissionRequirements).map((req, index) => (
              <Card key={index} hover className="bg-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {req.level}
                    </h3>
                    <p className="text-sm text-primary-600 font-semibold">
                      Age: {req.ageRange}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {req.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-yellow-50 border-2 border-yellow-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 mb-1">Important Note</p>
                  <p className="text-sm text-gray-700">
                    All documents should be originals with photocopies. We'll verify and return originals immediately.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Transparent Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable quality education with flexible payment options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(feeStructure).map((fee, index) => (
              <Card 
                key={index} 
                hover 
                className="border-2 border-gray-100 hover:border-primary-200"
              >
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-3">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {fee.level}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registration:</span>
                    <span className="font-semibold text-gray-900">{fee.registration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tuition/Term:</span>
                    <span className="font-semibold text-gray-900">{fee.tuitionPerTerm}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Uniform:</span>
                    <span className="font-semibold text-gray-900">{fee.uniform}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Books:</span>
                    <span className="font-semibold text-gray-900">{fee.books}</span>
                  </div>
                  <div className="pt-3 border-t-2 border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">Total:</span>
                      <span className="font-bold text-primary-600">{fee.total}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-blue-50 border-2 border-blue-200">
              <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Flexible Payment</h4>
              <p className="text-sm text-gray-600">Pay termly or monthly installments</p>
            </Card>
            <Card className="text-center bg-green-50 border-2 border-green-200">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Sibling Discount</h4>
              <p className="text-sm text-gray-600">10% discount for 2nd & 3rd child</p>
            </Card>
            <Card className="text-center bg-purple-50 border-2 border-purple-200">
              <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Scholarship Available</h4>
              <p className="text-sm text-gray-600">Merit-based scholarships offered</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4 inline mr-2" />
              Academic Calendar
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Important Dates
            </h2>
          </div>

          <div className="space-y-4">
            {importantDates.map((date, index) => (
              <Card key={index} hover className="bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{date.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{date.dates}</p>
                    <p className="text-xs text-red-600 font-semibold">{date.deadline}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4 inline mr-2" />
              FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} hover>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-primary-600 flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-6">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Apply now or contact us for more information about admissions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/admissions/apply" variant="outline" size="lg">
              Apply Online Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Contact Admissions Office
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm text-blue-100">Call Us</div>
                <div className="font-semibold">+233-552-735-903</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm text-blue-100">Email Us</div>
                <div className="font-semibold text-sm">admissions@school.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <div className="text-left">
                <div className="text-sm text-blue-100">Visit Us</div>
                <div className="font-semibold text-sm">Akim Oda, Asawase</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}