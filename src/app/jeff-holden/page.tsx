'use client';

import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import logotree from '/public/ANW_tree.png';
import logo from '/public/ANW_logo.png';

export default function Home() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // match this to your logo animation duration (1.5s = 1500ms)
    const timer = setTimeout(() => setShowTypewriter(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
  <div className="bg-brand-evergreen p-10  mb-6 animate-scale-in">
      <Image
        src={logotree}
        alt="ANW Contracting Logo"
        width={120}
        height={120}
        className="mb-6 animate-reveal-down"
        priority
      />
      </div>
      <div>   
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-charcole text-center">
        {showTypewriter && (
          <Typewriter
            words={[
              'When a fire calls,',
              'and you need the best',
              'who do you call?',
              'the A Team - Jeff & Holden!!',
              'Appricate you guys!!',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        )}
      </h1>
      </div>
    </main>
  );
}
