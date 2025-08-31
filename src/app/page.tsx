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
    const timer = setTimeout(() => setShowTypewriter(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
       {/* Top-left image */}
      <div className="absolute top-4 left-4 flex items-end space-x-2">
        <Image
          src={logo}
          alt="ANW Contracting Logo"
          width={30}
          height={30}
          className="animate-pulse"
        /><span className="font-serif text-sm text-center mt-2 text-brand-offwhite animate-pulse ">Aretmis Northwest LLC</span>
      </div>
      
      <Image
        src={logotree}
        alt="Logo Tree"
        width={200}
        height={200}
        className="mb-6 animate-reveal-down"
        priority
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-offwhite text-center">
        {showTypewriter && (
          <Typewriter
            words={[
              'When you need trees cut,',
              'and you want the best',
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
    </main>
  );
}
