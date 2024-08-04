import { LucideDownload } from 'lucide-react';
import React from 'react';

import { ContactLink } from '@/lib/types';

import NextImage from '@/components/NextImage';

export const RESUME_URL =
  'https://drive.google.com/file/d/1kmciKYbBvMdh1OOv0zA91enPaEWDgEd1/view?usp=sharing';

export const GITHUB_LOGO =
  'https://raw.githubusercontent.com/nishchay-v/nishchay-v-site/main/public/svg/Github.svg';

const SOCIAL_LINKS: readonly ContactLink[] = [
  {
    title: 'GitHub',
    url: '//www.github.com/nishchay-v',
    imageUrl: GITHUB_LOGO,
  },
  {
    title: 'LinkedIn',
    url: '//www.linkedin.com/in/nishchayv',
    imageUrl:
      'https://raw.githubusercontent.com/nishchay-v/nishchay-v-site/main/public/svg/Linkedin.svg',
  },
  {
    title: 'Email',
    url: '//mailto:nishchayvashishta@gmail.com',
    imageUrl:
      'https://raw.githubusercontent.com/nishchay-v/nishchay-v-site/main/public/svg/Email.svg',
  },
];

interface ContactListProps {
  className: string;
}

const ContactList: React.FC<ContactListProps> = ({ className }) => {
  return (
    <ul className={`flex space-x-6 items-center ${className}`}>
      {SOCIAL_LINKS.map((link, index) => (
        <li key={index}>
          <a href={link.url} target='_blank' rel='external'>
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
  );
};

export default ContactList;
