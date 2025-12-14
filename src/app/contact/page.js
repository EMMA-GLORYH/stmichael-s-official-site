// src/app/contact/page.js

import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Contact Us - St. Michael\'s School',
  description: 'Get in touch with St. Michael\'s School. Visit us, call, or send a message.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+233-552-735-903',
      subtext: 'Mon-Fri, 8AM-5PM',
      link: 'tel:+233552735903',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'stmichaelschool23@gmail.com',
      subtext: 'We reply within 24 hours',
      link: 'mailto:stmichaelschool23@gmail.com',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Akim Oda, Asawase',
      subtext: 'Ghana',
      link: 'https://www.google.com/maps/dir/?api=1&destination=5.8800139,-1.0021894',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: '8:00 AM - 5:00 PM',
      subtext: 'Monday to Friday',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const faqs = [
    {
      question: 'What are your admission requirements?',
      answer: 'We accept students from Creche to Junior High School. Requirements vary by level. Please visit our Admissions page or contact us for specific details.'
    },
    {
      question: 'Can I schedule a school tour?',
      answer: 'Yes! We encourage parents to visit our campus. Please call us or fill out the contact form to schedule a convenient time.'
    },
    {
      question: 'Do you offer transportation services?',
      answer: 'Yes, we provide safe and reliable school bus services to various locations. Contact us for route information and fees.'
    },
    {
      question: 'What special programs do you offer?',
      answer: 'We offer UCMAS, Coding & Programming, Typing, Science & Math teams, and Cultural Dance programs alongside our core curriculum.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">We're Here to Help</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} hover className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-primary-600 font-semibold">{info.details}</p>
                  )}
                  <p className="text-sm text-gray-600 mt-1">{info.subtext}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content - Form and Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <Card className="p-8">
                <ContactForm />
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <Card className="p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.123456789!2d-1.0021894!3d5.8800139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTInNDguMCJOIDHCsDAwJzA3LjkiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </Card>

              {/* Visit Us Card */}
              <Card className="bg-gradient-to-br from-primary-50 to-purple-50 border-2 border-primary-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Our Campus</h3>
                    <p className="text-gray-700 mb-4">
                      We welcome parents and students to visit our school. Experience our facilities and meet our dedicated staff.
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=5.8800139,-1.0021894"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Get Directions
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">FAQs</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} hover className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-primary-600 flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-7">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="tel:+233552735903"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              <Phone className="w-5 h-5" />
              Call us at +233-552-735-903
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}