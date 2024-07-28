import { LucideProps } from 'lucide-react';

import NextImage from '@/components/NextImage';

export default function ItemLink(
  item:
    | {
        title: string;
        company: string;
        duration: string;
        description: React.JSX.Element;
      }
    | {
        title: string;
        description: React.JSX.Element;
        url: string;
        urlText: string;
        imageUrl: string;
        icon?: undefined;
      }
    | {
        title: string;
        description: React.JSX.Element;
        url: string;
        urlText: string;
        icon: React.ForwardRefExoticComponent<
          Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
        >;
        imageUrl?: undefined;
      }
) {
  return (
    'url' in item && (
      <a
        href={item.url}
        target='_blank'
        rel='external'
        className='flex p-2 items-center rounded-full bg-white w-fit my-2'
      >
        {item.urlText}
        {'imageUrl' in item && (
          <NextImage
            width={24}
            height={24}
            src={item.imageUrl ?? ''}
            alt={item.title}
            className='ml-4'
          />
        )}
        {item.icon && <item.icon size={24} className='ml-4' />}
      </a>
    )
  );
}
