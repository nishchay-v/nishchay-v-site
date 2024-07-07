'use client';

import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import '@/lib/env';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AVATAR_IMAGE_URL =
  'https://nishchay-v.github.io/nishchay-v-site/public/images/avatar.jpg';

const PAGE_SECTIONS = [
  {
    title: 'About',
    key: 'about',
    content:
      'I am a software developer and a computer science student. I am passionate about technology and I love to learn new things. I am currently working on web development and I am also learning about cloud computing. In my free time, I enjoy exploring new programming languages, working on open-source projects, and contributing to the tech community. I have a strong foundation in algorithms and data structures, and I am always eager to solve complex problems. My goal is to continuously improve my skills and apply them to build innovative solutions.',
  },
  {
    title: 'Experience',
    key: 'experience',
    content: [
      {
        title: 'Software Developer',
        company: 'Company A',
        duration: '2020 - Present',
        description:
          'I am working on web development projects. My responsibilities include developing and maintaining web applications using modern JavaScript frameworks, collaborating with cross-functional teams to deliver high-quality software, and implementing best practices for coding and testing. I have successfully led several projects from inception to deployment, ensuring timely delivery and adherence to project requirements.',
      },
      {
        title: 'Intern',
        company: 'Company B',
        duration: '2019 - 2020',
        description:
          'I worked on a project that involved cloud computing. During my internship, I gained hands-on experience with cloud platforms such as AWS and Azure, developed automated deployment pipelines, and contributed to the optimization of cloud infrastructure. I also collaborated with senior developers to troubleshoot issues and implement scalable solutions.',
      },
    ],
  },
  {
    title: 'Projects',
    key: 'projects',
    content: [
      {
        title: 'Project A',
        description:
          'This project is about creating a responsive web application that allows users to track their daily tasks and manage their time efficiently. The application features a user-friendly interface, real-time updates, and integration with popular calendar apps. I used React for the frontend, Node.js for the backend, and MongoDB for the database.',
      },
      {
        title: 'Project B',
        description:
          'This project is about developing a cloud-based solution for data analytics. The solution involves collecting and processing large datasets from various sources, performing complex data transformations, and providing insightful visualizations. I utilized Python, Apache Spark, and AWS services such as S3, Lambda, and Redshift to build and deploy the solution.',
      },
      {
        title: 'Project C',
        description:
          'This project is about designing an e-commerce platform that offers a seamless shopping experience. The platform includes features like product recommendations, secure payment processing, and order tracking. I implemented the frontend using Vue.js, the backend using Django, and integrated third-party services for payment and shipping.',
      },
      {
        title: 'Project D',
        description:
          'This project is about creating an AI-powered chatbot for customer support. The chatbot can handle common queries, provide instant responses, and escalate complex issues to human agents. I used natural language processing techniques, machine learning models, and integrated the chatbot with messaging platforms like Slack and Facebook Messenger.',
      },
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(PAGE_SECTIONS[0].key);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Ensure that refs are populated
    sectionRefs.current = sectionRefs.current.slice(0, PAGE_SECTIONS.length);
  }, []);

  const handleTabClick = (key: string, index: number) => {
    setActiveTab(key);
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Nishchay Vashistha</title>
      </Head>
      <body className='bg-background'>
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='grid grid-cols-12'>
            <div className='col-span-5 h-full flex flex-col justify-between items-center max-h-screen pt-12 sticky'>
              <Avatar className='h-40 w-40 mb-12'>
                <AvatarImage src={AVATAR_IMAGE_URL} alt='Nishchay Vashistha' />
                <AvatarFallback>NV</AvatarFallback>
              </Avatar>
              <h1>Nishchay Vashistha</h1>
              <Tabs className='p-4 h-full' orientation='vertical'>
                <TabsList className='flex-col h-full bg-transparent'>
                  {PAGE_SECTIONS.map((section, index) => (
                    <TabsTrigger
                      key={index}
                      tabKey={section.key}
                      className='m-4 p-2'
                      onClick={() => handleTabClick(section.key, index)}
                    >
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <div className='m-8 flex'>
                <a
                  href='
              https://www.linkedin.com/in/nishchay-vashistha-0a5a1a1b2/'
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href='
              hrrps://github.com/nishchayvashistha'
                >
                  GitHub
                </a>
                <br />
                <a
                  href='
              mailto:lfasj@gmail.com'
                >
                  Email
                </a>
              </div>
            </div>
            <main className='col-span-7 overflow-y-auto h-screen pt-12'>
              {PAGE_SECTIONS.map((section, index) => (
                <div
                  key={section.key}
                  ref={(el) => {
                    if (el) {
                      sectionRefs.current[index] = el;
                    }
                  }}
                  className='my-4'
                >
                  <h2>{section.title}</h2>
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content.map((item, index) => (
                      <div key={index} className='my-4'>
                        <h3>{item.title}</h3>
                        {/* <p>{item.company}</p>
                      <p>{item.duration}</p> */}
                        <p>{item.description}</p>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
