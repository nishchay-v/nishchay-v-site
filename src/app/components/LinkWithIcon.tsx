import { LucideArrowUpRight, LucideProps } from 'lucide-react';
import React from 'react';

interface LinkWithIconProps {
  url: string;
  urlText: string;
  icon?: React.ComponentType<LucideProps>;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  url,
  urlText,
  icon: Icon = LucideArrowUpRight,
}) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='external'
      className='flex justify-start group-hover/resumeItem:text-teal-500 transition-colors'
    >
      {urlText}
      {Icon && (
        <Icon
          size={16}
          className='self-center group-hover/resumeItem:self-start ml-2 transition-transform delay-300'
        />
      )}
    </a>
  );
};

export default LinkWithIcon;
