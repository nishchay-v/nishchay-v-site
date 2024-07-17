'use client';

import { LucideDownload } from 'lucide-react';
import Head from 'next/head';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import '@/lib/env';

import NextImage from '@/components/NextImage';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TekionSE1 = () => (
  <ul className='list-disc space-y-2'>
    <>
      <li>
        {' '}
        Took <strong>ownership</strong> of frontend integration modules,
        refactored code using <strong>design patterns</strong> to{' '}
        <strong>scale</strong> from 5 to 12 workflows across different programs,
        migrated logic to the <strong>backend</strong> and exposed{' '}
        <strong>RESTful APIs</strong>.
      </li>
      <li>
        {' '}
        <strong>Architected</strong> a <strong>low-code/no-code tool</strong> to
        help product managers to configure vehicle information page based on
        brand and region, onboarded and <strong>mentored</strong> 2 interns to
        successfully deliver the project.
      </li>
      <li>
        {' '}
        Developed a robust <strong>framework</strong> for custom{' '}
        <strong>PDF generation</strong>, focusing on{' '}
        <strong>maintainability</strong> and{' '}
        <strong>managing contributions</strong> from multiple developers.
      </li>
      <li>
        {' '}
        Contributed to <strong>micro-frontend architecture</strong> using{' '}
        <strong>Webpack</strong> to enhance build efficiency, chunk strategy,
        bundling, and module federation.
      </li>
      <li>
        {' '}
        Developed a fees setup page with{' '}
        <strong>dynamic forms and tables</strong> using{' '}
        <strong>various React.js libraries</strong> (eg. react-table,
        ant-design) implementing deeply nested interdependent{' '}
        <strong>validations</strong> for complex business scenarios.
      </li>
    </>
  </ul>
);

const TekionASE = () => (
  <ul className='list-disc space-y-2'>
    <li>
      Developed, maintained, and shipped <strong>production code</strong> for
      large-scale web application primarily using <strong>React</strong>,{' '}
      <strong>HTML</strong>, <strong>Scss</strong> and{' '}
      <strong>Javascript</strong>
    </li>
    <li>
      Developed a platform-level Moodle integration for user certificate{' '}
      <strong>authentication</strong> and access control,{' '}
      <strong>optimising performance</strong> with local storage and
      implementing <strong>security</strong> measures to handle edge cases.
    </li>
    <li>
      Integrated Tekion's system with multiple third-party sources,{' '}
      <strong>aggregating data</strong> from different sources into
      user-friendly views using by leveraging{' '}
      <strong>asynchronous programming</strong> techniques.
    </li>
    <li>
      Demonstrated proficiency in working with{' '}
      <strong>large-scale codebases</strong> for distributed web applications,
      showcasing <strong>exceptional debugging skills</strong>.
    </li>
    <li>
      Displayed <strong>high flexibility</strong> by contributing to vast number
      of modules including backend code.
    </li>
    <li>
      Worked closely with <strong>cross-functional teams</strong>, including
      backend developers, product managers and UI/UX designers to develop{' '}
      <strong>performant</strong> frontend applications at an{' '}
      <strong>agile</strong> (2 week) cadence.
    </li>
    <li>
      Ensured code quality and adherence to coding standards by conducting{' '}
      <strong>code reviews</strong>, writing <strong>unit tests</strong> and
      focusing on <strong>code reusability</strong>, componentization, and state
      management using <strong>Redux</strong> and <strong>Context API</strong>.
    </li>
  </ul>
);

const TekionIntern = () => (
  <ul className='list-disc space-y-2'>
    <li>
      Created a <strong>mobile first</strong> progressive web app (
      <strong>PWA</strong>) for tracking support tickets, translated wireframes
      and mockups into interactive and visually appealing user interfaces using{' '}
      <strong>React</strong>.
    </li>
    <li>
      Implemented multiple user navigation flows using <strong>React</strong>{' '}
      <strong>Router</strong> and integrated with authenticator service for the
      login.
    </li>
    <li>
      Developed strong understanding of version control systems (
      <strong>Git</strong>) and code collaboration platforms (Github, Gitlab,
      Bitbucket).
    </li>
  </ul>
);

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
        company: 'Tekion',
        duration: 'Jan 2024 - Present',
        description: <TekionSE1 />,
      },
      {
        title: 'Associate Software Engineer',
        company: 'Tekion',
        duration: 'July 2022 - Jan 2024',
        description: <TekionASE />,
      },
      {
        title: 'Software Engineer Intern',
        company: 'Tekion',
        duration: '2019 - 2020',
        description: <TekionIntern />,
      },
    ],
  },
  {
    title: 'Projects',
    key: 'projects',
    content: [
      {
        title: 'Task Manager',
        description:
          'This project is about creating a responsive web application that allows users to track their daily tasks and manage their time efficiently. The application features a user-friendly interface, real-time updates, and integration with popular calendar apps. I used React for the frontend, Node.js for the backend, and MongoDB for the database.',
      },
      {
        title: 'Data Analytics Platform',
        description:
          'This project is about developing a cloud-based solution for data analytics. The solution involves collecting and processing large datasets from various sources, performing complex data transformations, and providing insightful visualizations. I utilized Python, Apache Spark, and AWS services such as S3, Lambda, and Redshift to build and deploy the solution.',
      },
      {
        title: 'E-commerce Platform',
        description:
          'This project is about designing an e-commerce platform that offers a seamless shopping experience. The platform includes features like product recommendations, secure payment processing, and order tracking. I implemented the frontend using Vue.js, the backend using Django, and integrated third-party services for payment and shipping.',
      },
      {
        title: 'Chatbot for Customer Support',
        description:
          'This project is about creating an AI-powered chatbot for customer support. The chatbot can handle common queries, provide instant responses, and escalate complex issues to human agents. I used natural language processing techniques, machine learning models, and integrated the chatbot with messaging platforms like Slack and Facebook Messenger.',
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    title: 'GitHub',
    url: 'www.github.com/nishchay-v',
    imageUrl:
      'https://raw.githubusercontent.com/nishchay-v/nishchay-v-site/main/public/svg/Github.svg',
  },
  {
    title: 'LinkedIn',
    url: 'www.linkedin.com/in/nishchayv',
    imageUrl:
      'https://raw.githubusercontent.com/nishchay-v/nishchay-v-site/main/public/svg/Linkedin.svg',
  },
  {
    title: 'Email',
    url: 'mailto:nishchayvashishta@gmail.com',
    imageUrl:
      'https://raw.githubusercontent.com/nishchay-v/nishchay-v-site/main/public/svg/Email.svg',
  },
];

const RESUME_URL = 'https://shorturl.at/p3h7G';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(PAGE_SECTIONS[0].key);
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    PAGE_SECTIONS.map(() => null)
  );
  const scrollContainerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollTop: containerScrollY, clientHeight: containerRenderHeight } =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      scrollContainerRef.current!;
    const scrollPosition = containerScrollY + containerRenderHeight / 2.5;

    const currentSectionIndex = sectionRefs.current.findIndex(
      (section, index) => {
        if (!section) return false;
        const { offsetTop, clientHeight } = section;
        if (index === 0) {
          return containerScrollY <= offsetTop + clientHeight / 2;
        }
        return (
          scrollPosition >= offsetTop &&
          scrollPosition <= offsetTop + clientHeight
        );
      }
    );

    if (
      currentSectionIndex !== -1 &&
      PAGE_SECTIONS[currentSectionIndex].key !== activeTab
    ) {
      setActiveTab(PAGE_SECTIONS[currentSectionIndex].key);
    }
  }, [activeTab]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const scrollContainer = scrollContainerRef.current! as HTMLElement;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  const handleTabClick = (key: React.SetStateAction<string>, index: number) => {
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
      <body className='bg-gradient-to-br from-slate-200 to-emerald-100'>
        <div className='mx-auto h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 py-0'>
          <div className='grid grid-cols-12'>
            <div className='col-span-5 h-full flex flex-col justify-between items-start max-h-screen pt-12 sticky'>
              <h1>Nishchay Vashistha</h1>
              <h2 className='my-4'>Software Engineer</h2>
              <p className=''>
                I transform complex ideas into flawless, interactive, and
                universally accessible digital realities.
              </p>
              <Tabs className='p-4 h-full' orientation='vertical'>
                <TabsList className='flex-col h-full bg-transparent items-start'>
                  {PAGE_SECTIONS.map((section, index) => (
                    <TabsTrigger
                      key={index}
                      className='m-4 p-2'
                      onClick={() => handleTabClick(section.key, index)}
                      value={section.key}
                      data-state={
                        activeTab === section.key ? 'active' : 'inactive'
                      }
                    >
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <ul className='flex space-x-6 p-4 items-center'>
                {SOCIAL_LINKS.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target='_blank' rel='noreferrer'>
                      <NextImage
                        width={24}
                        height={24}
                        src={link.imageUrl}
                        alt={link.title}
                      />
                    </a>
                  </li>
                ))}
                <li key='download-resume'>
                  <a
                    href={RESUME_URL}
                    target='_blank'
                    download={true}
                    className='flex rounded-full bg-black py-1 px-4 space-x-1 items-center text-sm'
                  >
                    <span className='text-primary-foreground'>Resume</span>
                    <LucideDownload size={12} color='white' />
                  </a>
                </li>
              </ul>
            </div>
            <main
              className='col-span-7 overflow-y-auto h-screen pt-12 space-y-40 px-8'
              ref={scrollContainerRef}
            >
              {PAGE_SECTIONS.map((section, index) => (
                <div
                  key={section.key}
                  ref={(el) => {
                    if (sectionRefs.current[index] === null)
                      sectionRefs.current[index] = el;
                  }}
                >
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content.map((item, index) => (
                      <div key={index} className='my-12'>
                        <h3>{item.title}</h3>
                        {'company' in item && <h4>{item.company}</h4>}
                        {'duration' in item && <p>{item.duration}</p>}
                        <p>{item.description}</p>
                        <p></p>
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
