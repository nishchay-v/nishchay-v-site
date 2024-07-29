import { LucideProps } from 'lucide-react';

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
        className='flex md:items-center md:flex-row flex-col justify-start'
      >
        {item.urlText}
        {item.icon && <item.icon size={16} className='md:ml-2' />}
      </a>
    )
  );
}
