// src/components/forms/AdmissionForm.js
'use client';

import { useState } from 'react';
import { 
  User,
  Users,
  Home,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Briefcase,
  AlertCircle,
  Loader2,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function AdmissionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  
  // Field-level errors
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    studentDOB: '',
    studentGender: '',
    applyingFor: '',
    previousSchool: '',
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    parentOccupation: '',
    relationship: '',
    residentialAddress: '',
    city: '',
    region: '',
    postalAddress: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    medicalConditions: '',
    specialNeeds: '',
    howHeard: ''
  });

  const totalSteps = 4;

  const steps = [
    { number: 1, title: 'Student Info', icon: User },
    { number: 2, title: 'Parent/Guardian', icon: Users },
    { number: 3, title: 'Contact Details', icon: Home },
    { number: 4, title: 'Review & Submit', icon: CheckCircle }
  ];

  // Validate individual field
  const validateField = (name, value) => {
    let error = '';

    // Step 1 validations
    if (name === 'studentFirstName' && !value?.trim()) {
      error = 'First name is required';
    }
    if (name === 'studentLastName' && !value?.trim()) {
      error = 'Last name is required';
    }
    if (name === 'studentDOB' && !value) {
      error = 'Date of birth is required';
    }
    if (name === 'studentGender' && !value) {
      error = 'Please select gender';
    }
    if (name === 'applyingFor' && !value) {
      error = 'Please select a class/level';
    }

    // Step 2 validations
    if (name === 'parentFirstName' && !value?.trim()) {
      error = 'First name is required';
    }
    if (name === 'parentLastName' && !value?.trim()) {
      error = 'Last name is required';
    }
    if (name === 'parentEmail') {
      if (!value?.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    if (name === 'parentPhone' && !value?.trim()) {
      error = 'Phone number is required';
    }
    if (name === 'parentOccupation' && !value?.trim()) {
      error = 'Occupation is required';
    }
    if (name === 'relationship' && !value) {
      error = 'Please select relationship';
    }

    // Step 3 validations
    if (name === 'residentialAddress' && !value?.trim()) {
      error = 'Residential address is required';
    }
    if (name === 'city' && !value?.trim()) {
      error = 'City is required';
    }
    if (name === 'region' && !value) {
      error = 'Please select region';
    }
    if (name === 'emergencyName' && !value?.trim()) {
      error = 'Emergency contact name is required';
    }
    if (name === 'emergencyPhone' && !value?.trim()) {
      error = 'Emergency contact phone is required';
    }
    if (name === 'emergencyRelationship' && !value?.trim()) {
      error = 'Relationship is required';
    }
    if (name === 'howHeard' && !value) {
      error = 'Please tell us how you heard about us';
    }

    return error;
  };

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate field if it's been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  // Validate current step
  const validateCurrentStep = () => {
    const newErrors = {};
    const fieldsToValidate = [];

    // Define required fields per step
    if (currentStep === 1) {
      fieldsToValidate.push(
        'studentFirstName',
        'studentLastName',
        'studentDOB',
        'studentGender',
        'applyingFor'
      );
    } else if (currentStep === 2) {
      fieldsToValidate.push(
        'parentFirstName',
        'parentLastName',
        'parentEmail',
        'parentPhone',
        'parentOccupation',
        'relationship'
      );
    } else if (currentStep === 3) {
      fieldsToValidate.push(
        'residentialAddress',
        'city',
        'region',
        'emergencyName',
        'emergencyPhone',
        'emergencyRelationship',
        'howHeard'
      );
    }

    // Validate all fields for current step
    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Mark all fields as touched
    const newTouched = { ...touched };
    fieldsToValidate.forEach(field => {
      newTouched[field] = true;
    });

    setTouched(newTouched);
    setErrors({ ...errors, ...newErrors });

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        setReferenceNumber(result.referenceNumber);

        // Reset form after 8 seconds
        setTimeout(() => {
          setCurrentStep(1);
          setFormData({
            studentFirstName: '',
            studentLastName: '',
            studentDOB: '',
            studentGender: '',
            applyingFor: '',
            previousSchool: '',
            parentFirstName: '',
            parentLastName: '',
            parentEmail: '',
            parentPhone: '',
            parentOccupation: '',
            relationship: '',
            residentialAddress: '',
            city: '',
            region: '',
            postalAddress: '',
            emergencyName: '',
            emergencyPhone: '',
            emergencyRelationship: '',
            medicalConditions: '',
            specialNeeds: '',
            howHeard: ''
          });
          setErrors({});
          setTouched({});
          setSubmitStatus(null);
          setSubmitMessage('');
          setReferenceNumber('');
        }, 8000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  // Helper component for input field with error
  const InputField = ({ label, name, type = 'text', required = false, placeholder, icon: Icon, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full ${Icon ? 'pl-10 pr-4' : 'px-4'} py-3 border-2 rounded-lg focus:outline-none transition-colors ${
            errors[name] && touched[name]
              ? 'border-red-500 focus:border-red-600 bg-red-50'
              : 'border-gray-200 focus:border-blue-500'
          }`}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {errors[name] && touched[name] && (
        <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  // Helper component for select field with error
  const SelectField = ({ label, name, required = false, children, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
          errors[name] && touched[name]
            ? 'border-red-500 focus:border-red-600 bg-red-50'
            : 'border-gray-200 focus:border-blue-500'
        }`}
        {...props}
      >
        {children}
      </select>
      {errors[name] && touched[name] && (
        <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Admission Application Form
          </h1>
          <p className="text-lg text-gray-600">
            Complete all steps to submit your application
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div key={step.number} className="flex-1 relative">
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : isActive 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <StepIcon className="w-6 h-6" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-semibold ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className={`absolute top-6 left-1/2 w-full h-1 ${
                        currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-center text-gray-600 mt-2">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Student Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Student Information</h2>
                    <p className="text-sm text-gray-600">Tell us about the student</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    name="studentFirstName"
                    required
                    placeholder="Enter first name"
                  />
                  <InputField
                    label="Last Name"
                    name="studentLastName"
                    required
                    placeholder="Enter last name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Date of Birth"
                    name="studentDOB"
                    type="date"
                    required
                    icon={Calendar}
                  />
                  <SelectField
                    label="Gender"
                    name="studentGender"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </SelectField>
                </div>

                <SelectField
                  label="Applying For"
                  name="applyingFor"
                  required
                >
                  <option value="">Select class/level</option>
                  <option value="creche">Creche</option>
                  <option value="nursery-1">Nursery 1</option>
                  <option value="nursery-2">Nursery 2</option>
                  <option value="kg1">KG1</option>
                  <option value="kg2">KG2</option>
                  <option value="basic-1">Basic 1</option>
                  <option value="basic-2">Basic 2</option>
                  <option value="basic-3">Basic 3</option>
                  <option value="basic-4">Basic 4</option>
                  <option value="basic-5">Basic 5</option>
                  <option value="basic-6">Basic 6</option>
                  <option value="jhs-1">JHS 1</option>
                  <option value="jhs-2">JHS 2</option>
                  <option value="jhs-3">JHS 3</option>
                </SelectField>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Previous School/Level (Optional)
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter previous school name or current level"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Example: "ABC Nursery - completed KG2" or "Currently in Basic 3"
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Parent/Guardian Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Information</h2>
                    <p className="text-sm text-gray-600">Primary contact details</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    name="parentFirstName"
                    required
                    placeholder="Enter first name"
                  />
                  <InputField
                    label="Last Name"
                    name="parentLastName"
                    required
                    placeholder="Enter last name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Email Address"
                    name="parentEmail"
                    type="email"
                    required
                    placeholder="parent@email.com"
                    icon={Mail}
                  />
                  <InputField
                    label="Phone Number"
                    name="parentPhone"
                    type="tel"
                    required
                    placeholder="+233-XXX-XXX-XXX"
                    icon={Phone}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Occupation"
                    name="parentOccupation"
                    required
                    placeholder="Enter occupation"
                    icon={Briefcase}
                  />
                  <SelectField
                    label="Relationship to Student"
                    name="relationship"
                    required
                  >
                    <option value="">Select relationship</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="guardian">Guardian</option>
                    <option value="other">Other</option>
                  </SelectField>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-1">Emergency Contact</p>
                      <p>We'll collect emergency contact information in the next step.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
                    <p className="text-sm text-gray-600">Residential and emergency contact</p>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Residential Address
                  </h3>
                  
                  <div className="space-y-4">
                    <InputField
                      label="Street Address"
                      name="residentialAddress"
                      required
                      placeholder="House number and street name"
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <InputField
                        label="City"
                        name="city"
                        required
                        placeholder="City"
                      />
                      <SelectField
                        label="Region"
                        name="region"
                        required
                      >
                        <option value="">Select region</option>
                        <option value="greater-accra">Greater Accra</option>
                        <option value="eastern">Eastern</option>
                        <option value="ashanti">Ashanti</option>
                        <option value="central">Central</option>
                        <option value="western">Western</option>
                        <option value="volta">Volta</option>
                        <option value="northern">Northern</option>
                        <option value="upper-east">Upper East</option>
                        <option value="upper-west">Upper West</option>
                      </SelectField>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Postal Address (Optional)
                      </label>
                      <input
                        type="text"
                        name="postalAddress"
                        value={formData.postalAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="P.O. Box"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="pt-6 border-t">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    Emergency Contact
                  </h3>
                  
                  <div className="space-y-4">
                    <InputField
                      label="Contact Name"
                      name="emergencyName"
                      required
                      placeholder="Full name"
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <InputField
                        label="Phone Number"
                        name="emergencyPhone"
                        type="tel"
                        required
                        placeholder="+233-XXX-XXX-XXX"
                      />
                      <InputField
                        label="Relationship"
                        name="emergencyRelationship"
                        required
                        placeholder="e.g., Uncle, Aunt"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="pt-6 border-t">
                  <h3 className="font-bold text-gray-900 mb-4">Additional Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Medical Conditions or Allergies (Optional)
                      </label>
                      <textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Please list any medical conditions, allergies, or special needs"
                      />
                    </div>

                    <SelectField
                      label="How did you hear about us?"
                      name="howHeard"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="website">Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend/Family Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="drive-by">Saw the school</option>
                      <option value="other">Other</option>
                    </SelectField>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>
                    <p className="text-sm text-gray-600">Please review your information before submitting</p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="space-y-6">
                  {/* Student Info */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-600" />
                      Student Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Name:</span>
                        <p className="font-semibold text-gray-900">{formData.studentFirstName} {formData.studentLastName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Date of Birth:</span>
                        <p className="font-semibold text-gray-900">{formData.studentDOB}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Gender:</span>
                        <p className="font-semibold text-gray-900 capitalize">{formData.studentGender}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Applying For:</span>
                        <p className="font-semibold text-gray-900 capitalize">{formData.applyingFor?.replace(/-/g, ' ')}</p>
                      </div>
                      {formData.previousSchool && (
                        <div className="md:col-span-2">
                          <span className="text-gray-600">Previous School/Level:</span>
                          <p className="font-semibold text-gray-900">{formData.previousSchool}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Parent Info */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Parent/Guardian Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Name:</span>
                        <p className="font-semibold text-gray-900">{formData.parentFirstName} {formData.parentLastName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Email:</span>
                        <p className="font-semibold text-gray-900">{formData.parentEmail}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Phone:</span>
                        <p className="font-semibold text-gray-900">{formData.parentPhone}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Occupation:</span>
                        <p className="font-semibold text-gray-900">{formData.parentOccupation}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Relationship:</span>
                        <p className="font-semibold text-gray-900 capitalize">{formData.relationship}</p>
                      </div>
                    </div>
                  </div>

                  {/* Address & Emergency */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Home className="w-5 h-5 text-blue-600" />
                      Contact Details
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-600">Address:</span>
                        <p className="font-semibold text-gray-900">{formData.residentialAddress}, {formData.city}, {formData.region?.replace(/-/g, ' ')}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Emergency Contact:</span>
                        <p className="font-semibold text-gray-900">{formData.emergencyName} ({formData.emergencyRelationship}) - {formData.emergencyPhone}</p>
                      </div>
                      {formData.medicalConditions && (
                        <div>
                          <span className="text-gray-600">Medical Conditions:</span>
                          <p className="font-semibold text-gray-900">{formData.medicalConditions}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-green-900 mb-2">Application Submitted Successfully!</h3>
                        <div className="bg-white rounded-lg p-4 mb-3">
                          <p className="text-sm text-gray-700 mb-2">Your Reference Number:</p>
                          <p className="text-2xl font-bold text-green-600">{referenceNumber}</p>
                        </div>
                        <p className="text-sm text-green-800">
                          Thank you for applying. We have received your application and will contact you within 3-5 business days.
                          A confirmation email has been sent to <strong>{formData.parentEmail}</strong>.
                        </p>
                        <p className="text-xs text-green-700 mt-2">
                          Please save your reference number for future correspondence.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-red-900 mb-2">Submission Failed</h3>
                        <p className="text-sm text-red-800">{submitMessage}</p>
                        <p className="text-xs text-red-700 mt-2">
                          Please check your information and try again. If the problem persists, contact us at +233-552-735-903
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                {!submitStatus && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-2">Before you submit:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Please ensure all information is accurate and complete</li>
                          <li>You will receive a confirmation email after submission</li>
                          <li>We may contact you for additional documents or information</li>
                          <li>By submitting, you agree to our terms and conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && !submitStatus && (
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold disabled:opacity-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
              )}

              {currentStep < totalSteps && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === totalSteps && !submitStatus && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about the application process, please contact us:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+233-552-735-903</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>admissions@stmichaelsschool.edu.gh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}