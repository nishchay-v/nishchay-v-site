import React from 'react';

import { ContentItem } from '@/lib/types';

const ItemLink: React.FC<ContentItem> = (item) => {
  if ('url' in item && item.url) {
    return (
      <a
        href={item.url}
        target='_blank'
        rel='external'
        className='flex md:items-center md:flex-row flex-col justify-start'
      >
        {item.urlText}
        {item.icon && <item.icon size={16} className='md:ml-2' />}
      </a>
    );
  }
  return null;
};

export default ItemLink;
