import { cn } from '@/lib/utils';
import { LoaderIcon } from 'lucide-react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';

export const Navbar = () => {
  const NAV_LINKS = [
    {
      label: 'Products',
      href: '#',
    },
    {
      label: 'Customer Storied',
      href: '#',
    },
    {
      label: 'Resources',
      href: '#',
    },
    {
      label: 'Pricing',
      href: '#',
    },
  ];

  return (
    <div className='relative flex w-full items-center justify-between py-4'>
      <div className='flex items-center gap-2'>
        <LoaderIcon size={32} />
        <p className='text-sm text-neutral-600'>/ hello@reel.ai</p>
      </div>
      <nav className='absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center justify-center gap-3 lg:flex'>
        {NAV_LINKS.map((navLink) => {
          return (
            <Link
              key={navLink.label}
              href={navLink.href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-neutral-600'
              )}
            >
              {navLink.label}
            </Link>
          );
        })}
      </nav>
      <div className='flex items-center gap-3'>
        <Button variant='ghost' className='text-neutral-600'>
          Book A Demo
        </Button>
        <Button className='rounded-full px-4'>Get Started</Button>
      </div>
    </div>
  );
};

