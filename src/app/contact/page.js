"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We'd love to hear from you. Get in touch with us for any inquiries, admissions, or just to say hello!
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              Ashongman Estate<br />
              Accra, Ghana
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-green-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">
              +233 24 123 4567<br />
              +233 30 234 5678
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-purple-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">
              info@ccschool.edu.gh<br />
              admissions@ccschool.edu.gh
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-600">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-orange-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600 text-sm">
              Mon - Fri: 7:30 AM - 4:00 PM<br />
              Sat: 8:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {status === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-green-900">Message Sent Successfully!</h4>
                  <p className="text-green-700 text-sm">We'll respond to your inquiry shortly.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                <AlertCircle className="text-red-600 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-red-900">Error Sending Message</h4>
                  <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+233 24 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="general">General Information</option>
                  <option value="programs">Programs & Curriculum</option>
                  <option value="special-programs">Special Programs</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4769843935675!2d-0.1817437!3d5.6512852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDQuNiJOIDDCsDEwJzU0LjMiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CCS Location Map"
              ></iframe>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-start pb-4 border-b">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Admissions Office</h4>
                    <p className="text-gray-600 text-sm">admissions@ccschool.edu.gh</p>
                    <p className="text-gray-600 text-sm">+233 24 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start pb-4 border-b">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Office</h4>
                    <p className="text-gray-600 text-sm">academic@ccschool.edu.gh</p>
                    <p className="text-gray-600 text-sm">+233 30 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start pb-4 border-b">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Finance Department</h4>
                    <p className="text-gray-600 text-sm">finance@ccschool.edu.gh</p>
                    <p className="text-gray-600 text-sm">+233 24 234 5679</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Mail className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">HR Department</h4>
                    <p className="text-gray-600 text-sm">careers@ccschool.edu.gh</p>
                    <p className="text-gray-600 text-sm">+233 30 345 6780</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
              <p className="mb-6 text-blue-100">
                We welcome parents and prospective students to tour our facilities. Schedule a visit to see our classrooms, meet our staff, and experience the CCS difference.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">What are your admission requirements?</h4>
              <p className="text-gray-600 text-sm">
                Admission requirements vary by program level. Generally, we require completed application forms, birth certificate, previous school records, and an assessment. Visit our Admissions page for detailed requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer transportation services?</h4>
              <p className="text-gray-600 text-sm">
                Yes, we provide safe and reliable transportation services covering major areas in Accra. Contact our admissions office for routes and fees.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">What is your student-teacher ratio?</h4>
              <p className="text-gray-600 text-sm">
                We maintain a low student-teacher ratio of 15:1 to ensure personalized attention and quality education for every child.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Are your special programs included in tuition?</h4>
              <p className="text-gray-600 text-sm">
                Some special programs like UCMAS, Coding, and Advanced Science are offered as additional enrichment programs with separate fees. Basic extracurricular activities are included in tuition.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">What safety measures do you have in place?</h4>
              <p className="text-gray-600 text-sm">
                Student safety is our priority. We have 24/7 security, CCTV surveillance, secure pickup/drop-off procedures, and trained staff in first aid and emergency response.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Can I schedule a campus tour?</h4>
              <p className="text-gray-600 text-sm">
                Absolutely! We encourage prospective parents to tour our facilities. Contact us to schedule a personalized campus tour at your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}