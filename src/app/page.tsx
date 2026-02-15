import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-7xl px-5'>
      <Navbar />
      <Hero />
    </div>
  );
}
