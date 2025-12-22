// src/app/admissions/apply/page.js
import AdmissionForm from '@/components/forms/AdmissionForm';

export const metadata = {
  title: 'Apply for Admission - St. Michael\'s School',
  description: 'Submit your application to St. Michael\'s School. Complete our simple 4-step application process.',
  keywords: 'admission, apply, St. Michael\'s School, school application, enrollment',
};

export default function ApplicationPage() {
  return <AdmissionForm />;
}