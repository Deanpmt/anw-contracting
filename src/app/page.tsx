'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">
        <Typewriter
          words={['Who is the coolest mom!?', 'Christy is!!', 'Who is the coolest Kid!?.', 'LOGAN IS!!', 'who is the coolest Dad?', 'I am of course!!']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="mt-6 text-lg text-gray-400">Just because I can!! You think it is cool huh. </p>
    </main>
  );
}
