import { LucideArrowUpRight, LucideProps } from 'lucide-react';

export default function LinkWithIcon({
  url,
  urlText,
  icon: Icon = LucideArrowUpRight,
}: {
  url: string;
  urlText: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}) {
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
}
