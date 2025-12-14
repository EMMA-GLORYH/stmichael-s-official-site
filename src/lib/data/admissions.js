// src/lib/data/admissions.js

export const admissionProcess = [
  {
    id: 1,
    step: 'Step 1',
    title: 'Submit Application',
    description: 'Complete and submit the online application form or visit our office to pick up a physical form.',
    icon: FileText,
    duration: '1-2 days',
    details: [
      'Fill out the application form completely',
      'Provide accurate contact information',
      'Submit required documents',
      'Pay application fee (if applicable)'
    ]
  },
  {
    id: 2,
    step: 'Step 2',
    title: 'Document Review',
    description: 'Our admissions team reviews your application and supporting documents for completeness.',
    icon: Search,
    duration: '3-5 days',
    details: [
      'Verification of submitted documents',
      'Academic records assessment',
      'Background check completion',
      'Initial eligibility determination'
    ]
  },
  {
    id: 3,
    step: 'Step 3',
    title: 'Assessment & Interview',
    description: 'Student assessment and parent-teacher interview to understand learning needs and expectations.',
    icon: Users,
    duration: '1 day',
    details: [
      'Student academic assessment',
      'Parent-teacher interview',
      'School tour and facility visit',
      'Q&A session with administrators'
    ]
  },
  {
    id: 4,
    step: 'Step 4',
    title: 'Admission Decision',
    description: 'Receive admission decision and complete enrollment process if accepted.',
    icon: CheckCircle,
    duration: '2-3 days',
    details: [
      'Admission decision notification',
      'Acceptance letter issuance',
      'Enrollment form completion',
      'Fee payment and finalization'
    ]
  }
];

export const admissionRequirements = {
  creche: {
    level: 'Creche (18 months - 3 years)',
    requirements: [
      'Birth certificate (original and photocopy)',
      'Immunization records up to date',
      'Two recent passport-size photographs',
      'Completed application form',
      'Parent/Guardian identification',
      'Proof of residence'
    ],
    ageRequirement: 'Child must be at least 18 months old by the start of the academic year'
  },
  nursery: {
    level: 'Nursery (3 - 5 years)',
    requirements: [
      'Birth certificate (original and photocopy)',
      'Immunization records',
      'Two recent passport-size photographs',
      'Previous school report (if applicable)',
      'Completed application form',
      'Parent/Guardian identification',
      'Proof of residence'
    ],
    ageRequirement: 'Child must be 3 years old by September 30th of the admission year'
  },
  primary: {
    level: 'Primary (6 - 11 years)',
    requirements: [
      'Birth certificate (original and photocopy)',
      'Previous school report cards (last 2 years)',
      'Transfer certificate from previous school',
      'Two recent passport-size photographs',
      'Completed application form',
      'Parent/Guardian identification',
      'Proof of residence',
      'Placement test results'
    ],
    ageRequirement: 'Age-appropriate grade placement based on academic assessment'
  },
  jhs: {
    level: 'Junior High School (12 - 15 years)',
    requirements: [
      'Birth certificate (original and photocopy)',
      'Previous school report cards (last 2 years)',
      'Transfer certificate from previous school',
      'BECE results (if applicable)',
      'Two recent passport-size photographs',
      'Completed application form',
      'Parent/Guardian identification',
      'Proof of residence',
      'Entrance examination results'
    ],
    ageRequirement: 'Must have completed primary education or equivalent'
  }
};

export const feeStructure = [
  {
    id: 1,
    level: 'Creche',
    ageRange: '18 months - 3 years',
    fees: {
      admissionFee: 'GHS 500',
      tuitionPerTerm: 'GHS 1,200',
      feeding: 'GHS 400/term',
      uniform: 'GHS 250',
      booksSupplies: 'GHS 150/term',
      totalFirstTerm: 'GHS 2,500'
    },
    note: 'Feeding is mandatory for Creche students'
  },
  {
    id: 2,
    level: 'Nursery 1 & 2',
    ageRange: '3 - 5 years',
    fees: {
      admissionFee: 'GHS 600',
      tuitionPerTerm: 'GHS 1,400',
      feeding: 'GHS 400/term',
      uniform: 'GHS 300',
      booksSupplies: 'GHS 200/term',
      totalFirstTerm: 'GHS 2,900'
    },
    note: 'Feeding is optional but recommended'
  },
  {
    id: 3,
    level: 'KG 1 & 2',
    ageRange: '5 - 6 years',
    fees: {
      admissionFee: 'GHS 650',
      tuitionPerTerm: 'GHS 1,600',
      feeding: 'GHS 450/term',
      uniform: 'GHS 350',
      booksSupplies: 'GHS 250/term',
      totalFirstTerm: 'GHS 3,300'
    },
    note: 'Includes UCMAS program foundation'
  },
  {
    id: 4,
    level: 'Primary 1-3',
    ageRange: '6 - 9 years',
    fees: {
      admissionFee: 'GHS 700',
      tuitionPerTerm: 'GHS 1,800',
      feeding: 'GHS 450/term',
      uniform: 'GHS 400',
      booksSupplies: 'GHS 300/term',
      totalFirstTerm: 'GHS 3,650'
    },
    note: 'UCMAS and Coding classes included'
  },
  {
    id: 5,
    level: 'Primary 4-6',
    ageRange: '9 - 12 years',
    fees: {
      admissionFee: 'GHS 750',
      tuitionPerTerm: 'GHS 2,000',
      feeding: 'GHS 500/term',
      uniform: 'GHS 450',
      booksSupplies: 'GHS 350/term',
      totalFirstTerm: 'GHS 4,050'
    },
    note: 'Advanced UCMAS and Coding programs included'
  },
  {
    id: 6,
    level: 'JHS 1-3',
    ageRange: '12 - 15 years',
    fees: {
      admissionFee: 'GHS 800',
      tuitionPerTerm: 'GHS 2,200',
      feeding: 'GHS 500/term',
      uniform: 'GHS 500',
      booksSupplies: 'GHS 400/term',
      totalFirstTerm: 'GHS 4,400'
    },
    note: 'BECE preparation classes included'
  }
];

export const importantDates = [
  {
    id: 1,
    title: 'Application Period Opens',
    date: 'January 15, 2025',
    description: 'Begin submitting applications for the 2025/2026 academic year',
    icon: 'Calendar',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Entrance Exams',
    date: 'March 1-15, 2025',
    description: 'Placement tests and assessments for new students',
    icon: 'FileText',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Admission Results',
    date: 'March 25, 2025',
    description: 'Admission decisions communicated to applicants',
    icon: 'Mail',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Registration Period',
    date: 'April 1-30, 2025',
    description: 'Complete enrollment and pay first term fees',
    icon: 'UserCheck',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Orientation Day',
    date: 'August 20, 2025',
    description: 'New student and parent orientation program',
    icon: 'Users',
    status: 'upcoming'
  },
  {
    id: 6,
    title: 'First Day of School',
    date: 'September 1, 2025',
    description: 'Academic year 2025/2026 begins',
    icon: 'GraduationCap',
    status: 'upcoming'
  }
];

export const faqs = [
  {
    id: 1,
    question: 'What is the admission process timeline?',
    answer: 'The entire admission process typically takes 1-2 weeks from application submission to final decision. This includes document review (3-5 days), assessment and interview (1 day), and admission decision (2-3 days).'
  },
  {
    id: 2,
    question: 'Is there an entrance examination?',
    answer: 'Yes, students applying for Primary 1 and above are required to take a placement test. The assessment evaluates basic literacy, numeracy, and age-appropriate skills to ensure proper grade placement. Nursery and Creche admissions do not require formal testing.'
  },
  {
    id: 3,
    question: 'What documents are required for admission?',
    answer: 'Required documents include: birth certificate, immunization records, passport photographs, previous school reports (if applicable), completed application form, parent/guardian ID, and proof of residence. Specific requirements vary by grade level.'
  },
  {
    id: 4,
    question: 'Are installment payment plans available?',
    answer: 'Yes, we offer flexible payment plans for families who need them. Parents can pay fees in two or three installments per term. Please contact our accounts office to discuss payment arrangements that work for your family.'
  },
  {
    id: 5,
    question: 'What is your class size policy?',
    answer: 'We maintain small class sizes to ensure personalized attention. Our maximum class size is 25 students per teacher, with lower ratios for younger grades. Creche and Nursery classes have a maximum of 15-20 students with additional support staff.'
  },
  {
    id: 6,
    question: 'Do you offer scholarships or financial aid?',
    answer: 'Yes, St. Michael\'s School offers merit-based scholarships and need-based financial assistance to qualifying families. Scholarship applications are reviewed annually. Please contact our admissions office for more information about eligibility and application procedures.'
  },
  {
    id: 7,
    question: 'Can I transfer my child mid-year?',
    answer: 'Yes, we accept mid-year transfers subject to space availability and successful completion of our assessment process. Transfer students must provide report cards from their previous school and will undergo placement testing to ensure appropriate grade level.'
  },
  {
    id: 8,
    question: 'What extra-curricular activities are available?',
    answer: 'We offer a wide range of activities including UCMAS (mental arithmetic), Coding classes, Cultural Arts (music and dance), Sports (football, athletics, volleyball), Drama club, Debate society, and Science club. Most activities are included in tuition fees.'
  },
  {
    id: 9,
    question: 'What is your student-teacher ratio?',
    answer: 'Our student-teacher ratios are: Creche (10:1 with assistants), Nursery/KG (15:1), Primary (20:1), and JHS (25:1). All classes have qualified teachers with assistants available for younger grades.'
  },
  {
    id: 10,
    question: 'Is transportation provided?',
    answer: 'Yes, we offer school bus services covering major routes in Akim Oda and surrounding areas. Transportation fees are separate from tuition and vary based on distance. Please contact our office for specific route information and pricing.'
  },
  {
    id: 11,
    question: 'What meals are provided?',
    answer: 'We provide nutritious breakfast and lunch for students who opt for our feeding program. Meals are prepared fresh daily by our catering staff following approved nutritional guidelines. Feeding is mandatory for Creche students and optional for other levels.'
  },
  {
    id: 12,
    question: 'What is your academic calendar?',
    answer: 'Our academic year runs from September to July, divided into three terms. First Term: September-December, Second Term: January-April, Third Term: May-July. Each term is approximately 13-14 weeks with scheduled breaks.'
  }
];

export const paymentMethods = [
  {
    id: 1,
    method: 'Bank Transfer',
    details: 'Transfer to St. Michael\'s School account',
    accountName: 'St. Michael\'s School',
    accountNumber: '1234567890',
    bank: 'GCB Bank',
    branch: 'Akim Oda Branch',
    icon: 'Building'
  },
  {
    id: 2,
    method: 'Mobile Money',
    details: 'Pay via MTN, Vodafone, or AirtelTigo',
    number: '0552735903',
    name: 'St. Michael\'s School',
    icon: 'Smartphone'
  },
  {
    id: 3,
    method: 'Cash Payment',
    details: 'Pay directly at school accounts office',
    location: 'Akim Oda, Asawase',
    hours: 'Monday - Friday: 8:00 AM - 4:00 PM',
    icon: 'Wallet'
  },
  {
    id: 4,
    method: 'Cheque Payment',
    details: 'Make cheque payable to St. Michael\'s School',
    note: 'Cheques must clear before enrollment is confirmed',
    icon: 'FileText'
  }
];

export const scholarshipInfo = [
  {
    id: 1,
    type: 'Academic Excellence Scholarship',
    description: 'Awarded to students with outstanding academic performance',
    coverage: 'Up to 50% tuition discount',
    criteria: [
      'Minimum 85% average in core subjects',
      'Excellent behavior and attendance record',
      'Active participation in school activities',
      'Leadership potential'
    ],
    icon: 'Award'
  },
  {
    id: 2,
    type: 'Need-Based Financial Aid',
    description: 'Support for families facing financial challenges',
    coverage: 'Up to 75% tuition assistance',
    criteria: [
      'Demonstrated financial need',
      'Good academic standing',
      'Parent/Guardian employment verification',
      'Annual renewal based on need assessment'
    ],
    icon: 'Heart'
  },
  {
    id: 3,
    type: 'Sibling Discount',
    description: 'Discount for families with multiple children enrolled',
    coverage: '10% off 2nd child, 15% off 3rd+ child',
    criteria: [
      'Multiple children enrolled simultaneously',
      'All accounts must be in good standing',
      'Automatic discount applied',
      'Valid for all grade levels'
    ],
    icon: 'Users'
  },
  {
    id: 4,
    type: 'Talent Scholarship',
    description: 'For students with exceptional skills in sports, arts, or STEM',
    coverage: 'Up to 30% tuition discount',
    criteria: [
      'Demonstrated talent in specific area',
      'Participation in school programs',
      'Good academic standing',
      'Commitment to represent school in competitions'
    ],
    icon: 'Star'
  }
];