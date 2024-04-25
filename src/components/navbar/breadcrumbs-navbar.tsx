'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BreadcrumbsNavbar({
  data,
  className
}: BreadcrumbsProps) {
  return (
    <div role="presentation" className={`flex items-center h-[70px] ${className}`}>
      <Breadcrumbs aria-label="breadcrumb" separator=">">
        {
          data.map((item, index) => {
            if (item.link) {
              return <Link
                key={index}
                underline="hover"
                color="inherit"
                href={item.link || '#'}
              >
                {item.title}
              </Link>
            }
            return <div key={index} className='text-black'>{item.title}</div>
          }
          )
        }
      </Breadcrumbs>
    </div>
  );
}
export interface BreadcrumbsDataProps {
  title: string;
  link?: string;
}

interface BreadcrumbsProps {
  data: BreadcrumbsDataProps[];
  className?: string;
}