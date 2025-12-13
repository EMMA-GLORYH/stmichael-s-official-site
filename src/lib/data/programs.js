// src/lib/data/programs.js

export const academicPrograms = [
    {
        id: 'early-years',
        title: 'Early Years',
        description: 'Nurturing young minds from Creche through Nursery',
        levels: ['Creche', 'Nursery X', 'Nursery Y'],
        ageRange: '6 months - 4 years',
        icon: '🌱',
        color: 'bg-pink-100 text-pink-700',
        link: '/programs/early-years'
    },
    {
        id: 'kindergarten',
        title: 'Kindergarten',
        description: 'Building strong foundations for lifelong learning',
        levels: ['KG1', 'KG2'],
        ageRange: '4 - 6 years',
        icon: '🎨',
        color: 'bg-purple-100 text-purple-700',
        link: '/programs/kindergarten'
    },
    {
        id: 'primary',
        title: 'Primary School',
        description: 'Comprehensive education from Basic 1 to Basic 6',
        levels: ['Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5', 'Basic 6'],
        ageRange: '6 - 12 years',
        icon: '📚',
        color: 'bg-blue-100 text-blue-700',
        link: '/programs/primary'
    },
    {
        id: 'junior-high',
        title: 'Junior High School',
        description: 'Preparing students for academic excellence',
        levels: ['Basic 7', 'Basic 8', 'Basic 9'],
        ageRange: '12 - 15 years',
        icon: '🎓',
        color: 'bg-green-100 text-green-700',
        link: '/programs/junior-high'
    }
];

export const specialPrograms = [
    {
        id: 'ucmas',
        title: 'UCMAS',
        description: 'Mental arithmetic and brain development program',
        icon: '🧮',
        color: 'bg-orange-100 text-orange-700',
        link: '/special-programs/ucmas',
        benefits: ['Enhanced concentration', 'Photographic memory', 'Speed & accuracy']
    },
    {
        id: 'coding',
        title: 'Coding & Programming',
        description: '21st-century skills for the digital age',
        icon: '💻',
        color: 'bg-indigo-100 text-indigo-700',
        link: '/special-programs/coding',
        benefits: ['Problem-solving', 'Logical thinking', 'Tech literacy']
    },
    {
        id: 'typing',
        title: 'Typing Team',
        description: 'Professional touch typing and speed training',
        icon: '⌨️',
        color: 'bg-cyan-100 text-cyan-700',
        link: '/special-programs/typing',
        benefits: ['Speed & accuracy', 'Certifications', 'Competition ready']
    },
    {
        id: 'science-math',
        title: 'Science & Math Team',
        description: 'STEM excellence and competition preparation',
        icon: '🔬',
        color: 'bg-teal-100 text-teal-700',
        link: '/special-programs/science-math',
        benefits: ['Critical thinking', 'Research skills', 'Competition success']
    },
    {
        id: 'cultural-dance',
        title: 'Cultural Dance Group',
        description: 'Preserving culture through traditional and modern dance',
        icon: '💃',
        color: 'bg-rose-100 text-rose-700',
        link: '/special-programs/cultural-dance',
        benefits: ['Cultural awareness', 'Performance skills', 'Physical fitness']
    }
];

export const announcements = [
    {
        id: 1,
        title: 'Admissions Open for 2025/2026 Academic Year',
        date: '2025-01-05',
        category: 'Admissions',
        excerpt: 'We are now accepting applications for all levels. Limited spaces available.',
        link: '/admissions/apply'
    },
    {
        id: 2,
        title: 'Edify Ghana Reading Competition Winners',
        date: '2025-01-10',
        category: 'Achievements',
        excerpt: 'Congratulations to our students who excelled in the national reading competition.',
        link: '/news/edify-competition-2025'
    },
    {
        id: 3,
        title: 'UCMAS Certification Ceremony',
        date: '2025-01-15',
        category: 'Events',
        excerpt: 'Join us as we celebrate our UCMAS students receiving their international certificates.',
        link: '/news/ucmas-ceremony'
    }
];

export const schoolStats = [
    {
        number: '15+',
        label: 'Years of Excellence',
        icon: '🏆'
    },
    {
        number: '500+',
        label: 'Happy Students',
        icon: '👨‍🎓'
    },
    {
        number: '50+',
        label: 'Qualified Teachers',
        icon: '👩‍🏫'
    },
    {
        number: '98%',
        label: 'Success Rate',
        icon: '📈'
    }
];