import Image from 'next/image';
import Hero from './components/hero/Hero';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="absolute top-0 left-0 w-full h-screen z-[-1]">

      </div>
    </main>
  );
}
