// src/lib/data/leadership.js

export const currentLeadership = [
  {
    id: 1,
    name: 'Rev. Fr. Michael Mensah',  // ← CHANGE THIS: Enter the actual name
    position: 'School Director',       // ← CHANGE THIS: Enter their position
    tenure: '2015 - Present',          // ← CHANGE THIS: Enter start year - Present
    image: '/images/leadership/current/director.jpg',  // ← Image path (add photo later)
    bio: 'Leading the school with vision and dedication, ensuring academic excellence and spiritual growth for all students.',  // ← CHANGE THIS: Write their bio (2-3 sentences)
    achievements: [  // ← CHANGE THESE: List their main achievements
      'Expanded school enrollment by 200%',
      'Introduced innovative UCMAS and Coding programs',
      'Established partnership with Edify Ghana',
      'Modernized school facilities and infrastructure'
    ],
    email: 'director@stmichaelschool.com',  // ← CHANGE THIS: Their email
    status: 'current'  // ← KEEP THIS: Don't change
  },
  {
    id: 2,
    name: 'Mrs. Grace Owusu',
    position: 'Headmistress',
    tenure: '2018 - Present',
    image: '/images/leadership/current/headmistress.jpg',
    bio: 'Oversees daily operations and academic programs, fostering a nurturing environment for student success.',
    achievements: [
      'Implemented comprehensive curriculum review',
      'Launched teacher professional development program',
      'Improved student performance by 40%',
      'Strengthened parent-teacher collaboration'
    ],
    email: 'headmistress@stmichaelschool.com',
    status: 'current'
  },
  {
    id: 3,
    name: 'Mr. Emmanuel Adu',
    position: 'Assistant Headmaster',
    tenure: '2019 - Present',
    image: '/images/leadership/current/assistant-head.jpg',
    bio: 'Coordinates academic activities and student welfare programs, ensuring quality education delivery.',
    achievements: [
      'Organized successful inter-school competitions',
      'Developed student mentorship programs',
      'Enhanced extracurricular activities',
      'Improved school discipline and student behavior'
    ],
    email: 'assistant@stmichaelschool.com',
    status: 'current'
  },
  {
    id: 4,
    name: 'Mrs. Abena Mensah',
    position: 'Head of Special Programs',
    tenure: '2020 - Present',
    image: '/images/leadership/current/special-programs.jpg',
    bio: 'Leads UCMAS, Coding, and Cultural programs, bringing innovation to our curriculum.',
    achievements: [
      'Launched successful UCMAS certification program',
      'Established school coding club with 100+ students',
      'Organized cultural dance competitions',
      'Partnered with tech companies for student training'
    ],
    email: 'programs@stmichaelschool.com',
    status: 'current'
  },
  // ← ADD MORE CURRENT LEADERS HERE (copy the block above and change details)
];

export const pastLeadership = [
  {
    id: 1,
    name: 'Rev. Fr. John Appiah',    // ← CHANGE THIS: Past leader's name
    position: 'Founding Director',    // ← CHANGE THIS: Their position
    tenure: '2009 - 2015',             // ← CHANGE THIS: Years they served
    image: '/images/leadership/past/founder.jpg',
    bio: 'Visionary founder who established St. Michael\'s School with a mission to provide quality education to the community.',  // ← CHANGE THIS: Their story
    contributions: [  // ← CHANGE THESE: Their major contributions (5-7 items)
      'Founded the school in 2009 with 50 students',
      'Established the school\'s core values and mission',
      'Built the first school buildings and facilities',
      'Secured initial accreditation and licensing',
      'Created strong community relationships'
    ],
    legacy: 'His vision and dedication laid the foundation for the thriving institution we are today.',  // ← CHANGE THIS: One sentence about their legacy
    status: 'past'  // ← KEEP THIS: Don't change
  },
  {
    id: 2,
    name: 'Mrs. Elizabeth Osei',
    position: 'Former Headmistress',
    tenure: '2012 - 2018',
    image: '/images/leadership/past/former-head.jpg',
    bio: 'Instrumental in developing the school\'s academic framework and establishing excellence standards.',
    contributions: [
      'Developed comprehensive curriculum structure',
      'Introduced standardized assessment systems',
      'Expanded student enrollment from 100 to 300',
      'Mentored and trained teaching staff',
      'Established school library and resource center'
    ],
    legacy: 'Her commitment to academic excellence continues to inspire our educational approach.',
    status: 'past'
  },
  {
    id: 3,
    name: 'Mr. Kwame Asante',
    position: 'Former Administrator',
    tenure: '2010 - 2017',
    image: '/images/leadership/past/former-admin.jpg',
    bio: 'Built the school\'s administrative systems and operational frameworks that we use today.',
    contributions: [
      'Established efficient administrative procedures',
      'Developed student record management system',
      'Implemented parent communication protocols',
      'Organized first school sports day and events',
      'Created school safety and security policies'
    ],
    legacy: 'His organizational skills set the standard for our administrative excellence.',
    status: 'past'
  }
  // ← ADD MORE PAST LEADERS HERE (copy the block above and change details)
];

// ===============================================
// HOW TO ADD A NEW CURRENT LEADER:
// ===============================================
// 1. Copy this template:
/*
  {
    id: 5,  // ← Change to next number
    name: 'Full Name Here',
    position: 'Their Position Title',
    tenure: 'Year - Present',
    image: '/images/leadership/current/their-photo.jpg',
    bio: 'Write 2-3 sentences about them and their role.',
    achievements: [
      'First major achievement',
      'Second achievement',
      'Third achievement',
      'Fourth achievement'
    ],
    email: 'their-email@stmichaelschool.com',
    status: 'current'
  },
*/
// 2. Paste it inside currentLeadership array (before the closing ];)
// 3. Fill in all the information
// 4. Save the file

// ===============================================
// HOW TO ADD A NEW PAST LEADER:
// ===============================================
// 1. Copy this template:
/*
  {
    id: 4,  // ← Change to next number
    name: 'Full Name Here',
    position: 'Their Former Position',
    tenure: 'Start Year - End Year',
    image: '/images/leadership/past/their-photo.jpg',
    bio: 'Write 2-3 sentences about their time at the school.',
    contributions: [
      'First major contribution',
      'Second contribution',
      'Third contribution',
      'Fourth contribution',
      'Fifth contribution'
    ],
    legacy: 'One powerful sentence about their lasting impact.',
    status: 'past'
  }
*/
// 2. Paste it inside pastLeadership array (before the closing ];)
// 3. Fill in all the information
// 4. Save the file

// ===============================================
// HOW TO REMOVE A LEADER:
// ===============================================
// Simply delete their entire block (from { to }, including the comma)
// OR comment it out by wrapping in /* and */