import { ChevronRightIcon, PlayIcon, ZapIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <header className='mt-16 flex flex-col items-center'>
        <div className='flex items-center gap-4 rounded-lg bg-neutral-50 p-2 px-3 text-sm'>
          <div className='flex items-center gap-2'>
            <ZapIcon size={18} />
            <p className='text-neutral-500'>
              Video AI Raises{' '}
              <span className='font-semibold text-neutral-700'>$32.8M</span> to
              Fule-up
            </p>
          </div>
          <Button size='icon-sm' className='size-5 rounded-full'>
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <h1 className='mt-6 text-center font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl'>
          AI-Powered Growth to <br /> Supercharge Sales
        </h1>
        <p className='mt-4 max-w-lg text-center text-sm text-neutral-600 md:text-base'>
          Unlock salses potential through AI automation - and accelerate your
          business growth by 10X.
        </p>
        <div className='mt-8 flex items-center gap-3'>
          <Button className='rounded-full px-4'>Download App</Button>
          <Button variant='outline' className='rounded-full px-4'>
            Watch a Demo
          </Button>
        </div>
      </header>
      <div className='mt-10 mb-5 grid w-full grid-cols-1 gap-4 px-6 md:mt-20 md:mb-10 md:px-12 lg:grid-cols-3'>
        <div className='col-span-1 h-100 overflow-hidden rounded-xl lg:col-span-2 lg:h-full'>
          <Image
            src={'/hero.jpg'}
            alt='hero-img'
            width={500}
            height={126}
            className='size-full object-cover object-center'
          />
        </div>
        <div className='flex flex-col rounded-xl bg-neutral-900 p-6 text-white'>
          <p className='mt-4 mb-10 shrink-0 text-2xl md:text-4xl'>
            Get Analytics <br /> Over all Products
          </p>
          <div className='flex flex-1 flex-col rounded-xl bg-white p-4 text-neutral-900'>
            <div className='flex items-center gap-4'>
              <div className='size-12 rounded-md bg-yellow-400'></div>
              <h3 className='text-lg font-semibold'>Product visit</h3>
            </div>
            <div className='mt-4 flex items-center gap-2 text-sm'>
              <span>on</span>
              <div className='rounded-md bg-neutral-200/80 px-2 py-1 font-medium'>
                Shoppable Videos
              </div>
              <span>in</span>
              <div className='rounded-md bg-neutral-200/80 px-2 py-1 font-medium'>
                Nike Runner
              </div>
            </div>
            <div className='my-8 grid grid-cols-2'>
              <div className='flex flex-col border-l border-neutral-200 px-2'>
                <p className='text-xl font-medium'>104,887</p>
                <p className='mt-3 text-xs text-neutral-500'>Product views</p>
              </div>
              <div className='flex flex-col border-l border-neutral-200 px-2'>
                <p className='text-xl font-medium'>3,216</p>
                <p className='mt-3 text-xs text-neutral-500'>
                  Product conversion
                </p>
              </div>
            </div>
            <div className='flex flex-wrap gap-3'>
              <Button size='sm' className='gap-2 rounded-full'>
                <PlayIcon size={18} />
                <span>Session replay</span>
              </Button>
              <Button variant='outline' size='sm' className='rounded-full'>
                Save a new segment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

