import { LucideDownload } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { SOCIAL_LINKS } from '@/constant/constants';

interface ContactListProps {
  className: string;
}

const ContactList: React.FC<ContactListProps> = ({ className }) => {
  return (
    <ul className={`flex space-x-6 items-center ${className}`}>
      {SOCIAL_LINKS.map((link, index) => (
        <li key={index}>
          <a href={link.url} target='_blank' rel='external noopener noreferrer'>
            <Image
              width={24}
              height={24}
              src={link.imageUrl}
              alt={link.title}
              priority={index < 2}
            />
          </a>
        </li>
      ))}
      <li key='download-resume'>
        <a
          href={process.env.NEXT_PUBLIC_RESUME_URL}
          target='_blank'
          rel='noopener noreferrer'
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
