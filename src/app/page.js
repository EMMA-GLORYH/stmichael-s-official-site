// src/app/page.js

import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Programs from '@/components/home/Programs';
import Announcements from '@/components/home/Announcements';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <Announcements />
      <CallToAction />
    </>
  );
}