'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

const PAGE_SECTIONS = [
  {
    title: 'About',
    key: 'about',
  },
  {
    title: 'Experience',
    key: 'experience',
  },
  {
    title: 'Projects',
    key: 'projects',
  },
];

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Nishchay Vashistha</title>
      </Head>
      <div h-screen w-screen>
        <div className='grid grid-cols-12 m-12'>
          <div className='col-span-5'>
            <h1>Nishchay Vashistha</h1>
          </div>
          <div className='col-span-7'>
            <p>
              I am a software developer and a computer science student. I am
              passionate about technology and I love to learn new things. I am
              currently working on web development and I am also learning about
              cloud computing.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
