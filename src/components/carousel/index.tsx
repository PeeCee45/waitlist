"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselDotButton,
  useDotButton,
} from "@workspace/ui/components/carousel";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";

export const EmblaCarousel: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            playOnInit: true,
          }),
        ]}
        showNav={false}
        containerClassName='max-w-screen-xl mx-auto h-full relative pb-4 space-y-4 z-10'
        // className='h-full'
      >
        <CarouselContent className='-mt-1'>
          {[
            "/carousel/file-0.png",
            "/carousel/file-1.png",
            "/carousel/file-2.png",
            "/carousel/file-3.png",
          ].map((_, index) => (
            <CarouselItem key={index} className='pl-2 basis-full'>
              <div className='p-2'>
                <Image src={_} alt='' width={1280} height={800} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex justify-center items-end gap-2 h-5'>
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "h-1.5 w-12 bg-brand-gray-100 [&.selected]:bg-brand-gray-300",
                {
                  selected: index === selectedIndex,
                }
              )}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
};
