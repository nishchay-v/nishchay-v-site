'use client';

import { LucideExternalLink } from 'lucide-react';
import Head from 'next/head';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import '@/lib/env';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import ItemLink from '@/app/components/ItemLink';
import LinkWithIcon from '@/app/components/LinkWithIcon';

import ContactList from './components/ContactList';

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

const ProjectDashCode = () => (
  <ul className='list-disc space-y-2'>
    <li>
      Developed the Dashcode Android app for competitive programmers to track
      progress and view upcoming contests across platforms like CodeChef and
      Codeforces.
    </li>
    <li>
      Implemented caching of data in an offline database, enhancing app
      performance and reducing load times.
    </li>
    <li>
      Utilized Repository and Factory design patterns to ensure a scalable and
      maintainable codebase.
    </li>
    <li>
      Integrated multiple REST APIs to fetch and display user performance data
      in a graph format.
    </li>
  </ul>
);

const ProjectNextJsPokedex = () => (
  <ul className='list-disc space-y-2'>
    <li>
      Developed the Next.js Pokedex, a full-stack app using Next.js and Tailwind
      CSS.
    </li>
    <li>
      Designed and implemented a PostgreSQL database to store user-generated
      Pokémon.
    </li>
    <li>
      Connected the database using Prisma ORM for seamless data management and
      interaction.
    </li>
    <li>Key technologies: Next.js, Tailwind CSS, PostgreSQL, Prisma ORM.</li>
  </ul>
);

const ProjectChatbot = () => (
  <ul className='list-disc space-y-2'>
    <li>
      Developed an AI Chatbot, a full-stack Next.js app using TypeScript,
      Tailwind CSS, and tRPC.
    </li>
    <li>
      Created a chatbot user interface from scratch, supporting user login via
      NextAuth.
    </li>
    <li>
      Implemented chat storage in a PostgreSQL database and retrieval using
      remote procedure calls.
    </li>
    <li>
      Integrated an open-source cloud-hosted LLM to respond to user queries.
    </li>
    <li>
      Ensured end-to-end type safety using Next.js and tRPC with Drizzle ORM.
    </li>
  </ul>
);

const PAGE_SECTIONS = [
  {
    title: 'About',
    key: 'about',
    content:
      'Back in high school, I used to root Android phones, install custom ROMs, and tinker with kernels. This early interest in technology led me to pursue a degree in computer science at university, where I developed a deep passion for coding and web development.\n Fast-forward to today my main focus these days is on building scalable, high-performance web applications at Tekion. I love the intersection of design and engineering — crafting solutions that not only look good but are also robust and maintainable under the hood. One of my proudest achievements is developing a low-code/no-code tool that helps product managers configure vehicle information pages effortlessly.',
  },
  {
    title: 'Experience',
    key: 'experience',
    content: [
      {
        title: 'Software Engineer - 1',
        company: 'Tekion',
        duration: '2024 - Present',
        description: <TekionSE1 />,
        url: 'https://www.tekion.com/',
      },
      {
        title: 'Associate Software Engineer',
        company: 'Tekion',
        duration: '2022 - 2023',
        description: <TekionASE />,
        url: 'https://www.tekion.com/',
      },
      {
        title: 'Software Engineer Intern',
        company: 'Tekion',
        duration: 'Jan - June 2022',
        description: <TekionIntern />,
        url: 'https://www.tekion.com/',
      },
    ],
  },
  {
    title: 'Projects',
    key: 'projects',
    content: [
      {
        title: 'Dashcode',
        description: <ProjectDashCode />,
        url: 'https://github.com/nishchay-v/DashCode?tab=readme-ov-file#dashcode-android-app',
        urlText: 'Code Repo',
        icon: LucideExternalLink,
      },
      {
        title: 'Next.js Pokedex',
        description: <ProjectNextJsPokedex />,
        url: 'https://next-pokedex-blue.vercel.app/',
        urlText: 'View Live',
        icon: LucideExternalLink,
      },
      {
        title: 'Chatbot',
        description: <ProjectChatbot />,
        url: 'https://github.com/nishchay-v/DashCode',
        urlText: 'Code Repo',
        icon: LucideExternalLink,
      },
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(PAGE_SECTIONS[0].key);
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    PAGE_SECTIONS.map(() => null)
  );
  const scrollContainerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, clientHeight, offsetTop } = container;
    const isMobile = window.innerWidth < 768;
    const scrollPosition = isMobile ? scrollTop : scrollTop + clientHeight / 5;

    const currentSectionIndex = sectionRefs.current.findIndex((section) => {
      if (!section) return false;
      const { offsetTop: sectionTopOffset, clientHeight: sectionHeight } =
        section;
      return isMobile
        ? scrollPosition + offsetTop < sectionTopOffset + sectionHeight
        : scrollPosition >= sectionTopOffset &&
            scrollPosition < sectionTopOffset + sectionHeight;
    });

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

  const renderContentItem = (item: any, index: any) => (
    <a
      href={item.url}
      className='flex md:my-12 my-6 p-4 rounded-md group/resumeItem hover:cursor-pointer hover:bg-slate-300 backdrop-blur-md transition-all'
      key={item.title + index}
      target='_blank'
      rel='external'
    >
      <div className='text-gray-600 w-[25%] text-sm mt-1 pr-2'>
        {'duration' in item ? item.duration : ItemLink(item)}
      </div>
      <div className='w-[75%]'>
        <h3 className='text-lg'>
          <LinkWithIcon
            url={item.url}
            urlText={`${item.title} ${
              'company' in item && ', ' + item.company
            }`}
          />
        </h3>
        {'description' in item && <p className='text-sm'>{item.description}</p>}
      </div>
    </a>
  );

  const renderTabs = () => (
    <Tabs className='p-4 h-full max-md:hidden' orientation='vertical'>
      <TabsList className='flex-col h-full bg-transparent items-start'>
        {PAGE_SECTIONS.map((section, index) => (
          <TabsTrigger
            key={index}
            className='m-4 p-2'
            onClick={() => handleTabClick(section.key, index)}
            value={section.key}
            data-state={activeTab === section.key ? 'active' : 'inactive'}
          >
            {section.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );

  return (
    <>
      <Head>
        <title>Nishchay Vashistha - Software Engineer</title>
      </Head>
      <body className='bg-gradient-to-br from-stone-200 to-slate-300 h-screen font-mono text-slate-800'>
        <div className='mx-auto max-w-screen-xl px-4 font-sans md:px-8 py-0 h-full'>
          <div className='grid md:grid-cols-12 max-md:grid-rows-3 h-full'>
            <div className='md:col-span-5 max-md:row-span-1 md:h-full flex flex-col justify-between items-start max-h-screen pt-6 md:py-12 sticky'>
              <h1>Nishchay Vashistha</h1>
              <h2 className='my-2 md:my-4'>Software Engineer</h2>
              <h4 className='my-1'>Frontend | React.js Expert</h4>
              <p>
                I transform complex ideas into flawless, interactive, and
                universally accessible digital realities.
              </p>
              {renderTabs()}
              <ContactList className='md:p-4 pb-4' />
            </div>
            <main className='md:col-span-7 max-md:row-span-2 max-h-screen md:pt-12 lg:px-4'>
              <h3 className='md:hidden sticky h-[5%] border-b-[1px] border-gray-600'>
                {
                  PAGE_SECTIONS.find((section) => section.key === activeTab)
                    ?.title
                }
              </h3>
              <div
                ref={scrollContainerRef}
                className='overflow-y-auto space-y-20 md:space-y-40 h-[95%] pt-4'
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
                      <p className='text-sm px-8'>{section.content}</p>
                    ) : (
                      section.content.map(renderContentItem)
                    )}
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
