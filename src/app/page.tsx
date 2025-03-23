'use client'
import { Separator } from "@workspace/ui/components/separator";
import { TextBalancer } from "@workspace/ui/components/balancer";
import Image from "next/image";
import Link from "next/link";
import Facebook from "public/ios-17-glyph/facebook-icon.svg";
import Instagram from "public/ios-17-glyph/instagram-icon.svg";
import XLogo from "public/ios-17-glyph/x-icon.svg";
import Logo from "public/logo.svg";
import CharcoSecurity from "public/charco/security.png";
import PhotosAndMedia from "public/charco/photos-and-media.png";
import { EmblaCarousel } from "@/components/carousel";
import { Button } from "@workspace/ui/components/button";
import { Linkedin, Youtube } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@workspace/ui/lib/utils";
import {HeroTextChanger, objectEasingIn, useConfettiEffect, useConfettiEffectOnLoad} from '@/anime/anime'

const playfairDisplay = Playfair_Display({
  preload: true,
  weight: ["600"],
  display: "swap",
  style: "italic",
  subsets: ["latin"],
});

export default function Home() {
  
  HeroTextChanger(["Connect", "Accomodate", "Collaborate", "Engage", "Thrive", "Connect"]); //Call Hero Text changer -------#HTML_Body: Add 'sliding-text-container' as the classname ---- #Argument: Add the first text to the last for a smoother flow
  objectEasingIn(); //Call Object Easing In -------#HTML_Body: Add 'fade-section' as the classname
  useConfettiEffect(); //Call Confetti onhover -------#HTML_Body: Add 'confetti-disp' as the classname
  useConfettiEffectOnLoad(); //Call Confetti after load ---------#HTML_Body: Add 'confetti-disp-infinite' as the classname



  return (
    <div className='bg- w-screen overflow-hidden'>
      <main className='min-h-screen'>
        {/* hero & carousel */}
        <div className='relative text-white confetti-disp-infinite'>
          <div className='absolute left-0 right-0 top-0 -z-[1] h-[50vh] lg:h-[60vh] min-h-[500px] xl:min-h-[800px] bg-mobile-buttongradient2'>
            <div className='bg-mobile-buttongradient1 w-full lg:h-full bg-cover bg-top bgAnime'></div>
          </div>
          <div className='z-10 w-full max-w-screen-lg mx-auto pt-12 lg:pt-16 xl:pt-24 px-4 sm:px-8 lg:px-0 space-y-8 lg:space-y-12 xl:space-y-14'>
            <div className='relative'>
              <Image
                src='/group2.png'
                alt=''
                width={234}
                height={386}
                className='absolute left-0 top-1/2 -translate-y-1/2 object-right-bottom object-contain hidden md:block tilt_float'
              />
              <Image
                src='/group1.png'
                alt=''
                width={266}
                height={392}
                className='absolute -right-[11%] top-1/2 -translate-y-1/2 object-right-bottom object-contain hidden md:block z-0 tilt_float'
              />
              <div className='space-y-10 md:space-y-16 lg:space-y-24'>
                <div className='flex justify-center items-center [&_svg]:w-44'>
                  <Logo />
                </div>

                <div className='max-w-xl xl:max-w-3xl mx-auto'>
                  <div className='space-y-6 text-center'>
                    <div className='lg:space-y-2'>
                      <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-balance'>
                        Where{" "}
                        <span
                          className={cn("italic", playfairDisplay.className)}
                        >
                          Brands
                        </span>{" "}
                        &{" "}
                        <span
                          className={cn("italic", playfairDisplay.className)}
                        >
                          Creators
                        </span>{" "}

                        <span className="sliding-text-container"></span>
                      </h1>
                      <p className='text-lg md:text-xl opacity-70'>
                        Build impactful campaigns with secure payments, smart
                        analytics, and authentic collaborations—all in one place
                        Join the Waitlist
                      </p>
                    </div>

                    <div className='max-w-xl mx-auto'>
                      {/* <WaitListForm button='default' /> */}
                      <Button
                        asChild
                        variant='secondary'
                        className='flex gap-2 text-brand-purple-500 w-full md:w-fit mx-auto'
                      >
                        <Link href='https://form.typeform.com/to/HgIPCAwA' className="confetti-disp">
                          Get early access
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <EmblaCarousel />

              <Image
                src='/flarebeige1.png'
                alt='flare'
                width={714}
                height={491}
                className='absolute -left-1/2 -bottom-[50%] rotate-[155.449deg] z-0 fade-section'
              />
              <Image
                src='/flarebeige2.png'
                alt='flare'
                width={714}
                height={491}
                className='absolute -right-1/2 -bottom-[50%] -rotate-[155.449deg] z-0 fade-section'
              />
            </div>
          </div>
        </div>
        {/* everything you need */}

        <div>
          <div className='w-full max-w-screen-lg mx-auto py-12 lg:pb-24 lg:pt-14 xl:pt-16 2xl:pt-24 space-y-8 px-4 sm:px-8 lg:px-0'>
            <div className='max-w-2xl mx-auto text-center space-y-2'>
              <h1 className='md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-brand-gray-500 text-balance fade-section'>
                Everything You Need to Amplify Your Influence
              </h1>
              <p className='text-lg lg:text-xl text-brand-gray-400 fade-section'>
                <TextBalancer>
                  At Trendibble, we believe that collaboration should be simple,
                  transparent, and effective. Our platform offers
                </TextBalancer>
              </p>
            </div>

            <div className='grid gap-6'>
              <div className='bg-white flex flex-col-reverse md:grid grid-cols-2 md:gap-4 border border-brand-gray-50 rounded-3xl overflow-clip fade-section confetti-disp'>
                <div className='p-8 md:p-12 flex flex-col justify-center'>
                  <h2 className='text-2xl lg:text-3xl text-brand-gray-500 font-bold'>
                    Secure Payments
                  </h2>
                  <p className='text-lg text-brand-gray-500 font-medium'>
                    Enjoy escrow-secured transactions that keep everyone safe
                  </p>
                </div>
                <div className='md:pt-8'>
                  <Image
                    src='/evt/file-00.webp'
                    alt='Escrow shot'
                    width={500}
                    height={380}
                    className='w-full h-full object-right-top object-cover'
                  />
                </div>
              </div>
              <div className='bg-white grid md:grid-cols-2 gap-4 border border-brand-gray-50 rounded-3xl overflow-clip fade-section confetti-disp'>
                <div className='md:pt-8'>
                  <Image
                    src='/evt/file-01.webp'
                    alt='Escrow shot'
                    width={500}
                    height={380}
                    className='w-full h-full object-right-top object-cover'
                  />
                </div>
                <div className='p-8 md:p-12 flex flex-col justify-center'>
                  <h2 className='text-2xl lg:text-3xl text-brand-gray-500 font-bold'>
                    Budget Planning
                  </h2>
                  <p className='text-lg text-brand-gray-500 font-medium'>
                    Plan your campaigns with confidence
                  </p>
                </div>
              </div>
              <div className='bg-white flex flex-col-reverse md:grid grid-cols-2 md:gap-4 border border-brand-gray-50 rounded-3xl overflow-clip fade-section confetti-disp'>
                <div className='p-8 md:p-12 flex flex-col justify-center'>
                  <h2 className='text-2xl lg:text-3xl text-brand-gray-500 font-bold'>
                    Real-Time Analytics
                  </h2>
                  <p className='text-lg text-brand-gray-500 font-medium'>
                    Track your campaign performance at a glance
                  </p>
                </div>
                <div className='md:pt-8'>
                  <Image
                    src='/evt/file-02.webp'
                    alt='Escrow shot'
                    width={500}
                    height={380}
                    className='w-full h-full object-right-top object-cover'
                  />
                </div>
              </div>
              <div className='bg-white grid md:grid-cols-2 md:gap-4 border border-brand-gray-50 rounded-3xl overflow-clip fade-section confetti-disp'>
                <div className='md:pt-8'>
                  <Image
                    src='/evt/file-03.webp'
                    alt='Escrow shot'
                    width={500}
                    height={380}
                    className='w-full h-full object-right-top object-cover'
                  />
                </div>
                <div className='p-8 md:p-12 flex flex-col justify-center'>
                  <h2 className='text-2xl lg:text-3xl text-brand-gray-500 font-bold'>
                    Authenticity Tools
                  </h2>
                  <p className='text-lg text-brand-gray-500 font-medium'>
                    Our built-in fake follower checker ensures that every
                    connection is genuine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why trendibble */}
        <div className='bg-white'>
          <div className='max-w-2xl mx-auto py-12 lg:py-24 space-y-8 px-4 sm:px-8 lg:px-0 confetti-disp'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold text-brand-gray-500 text-center fade-section'>
              Why Trendibble?
            </h1>

            <div className='grid md:grid-cols-2 gap-4 fade-section'>
              {why?.map((item, index) => (
                <div
                  key={index}
                  className='space-y-3 p-4 rounded-2xl bg-[#EEECED66] border border-[#EEECED99]'
                >
                  {item.icon}

                  <div>
                    <h3 className='text-brand-gray-500 font-semibold'>
                      {item.title}
                    </h3>
                    <p className='text-brand-gray-300'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-between overflow-clip'>
            <Image
              src={PhotosAndMedia}
              alt='photos and media'
              width={300}
              height={300}
              className='size-40 md:size-52 xl:size-64 rotate-[15deg] translate-y-8 -translate-x-8 object-left-bottom'
            />
            <Image
              src={CharcoSecurity}
              alt='security'
              width={300}
              height={300}
              className='size-40 md:size-52 lg:size-64 rotate-[-19.938deg] translate-y-8 translate-x-8 object-right-bottom'
            />
          </div>
        </div>
        {/* CTA */}
        <div className='bg-[url(/cta.png)] bg-left-bottom bgScale'>
          <div className='max-w-screen-1xl mx-auto min-h-96 flex flex-col-reverse md:grid grid-cols-2 md:gap-8 lg:gap-12 py-12 sm:py-16 lg:py-24 px-4 sm:px-8'>
            <div className='space-y-5 text-white'>
              <div className='space-y-2 md:space-y-3 fade-section'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold'>
                  <TextBalancer>Join Our Creative Community</TextBalancer>
                </h1>
                <p className='mf:text-lg lg:text-xl'>
                  <span className='opacity-50'>
                    Be among the first to experience
                  </span>{" "}
                  <span className='opacity-100 font-medium'>Trendibble</span>{" "}
                  <span className='opacity-50'>
                    and help shape the future of brand-creator collaboration.
                    Sign up now to receive exclusive updates, early access
                    invites, and insider tips on building campaigns that truly
                    make an impact.
                  </span>
                </p>
              </div>
              {/* <WaitListForm button='secondary' /> */}
              <Button
                asChild
                variant='secondary'
                className='flex gap-2 bg-brand-purple-500 border-transparent ring-transparent text-white w-full md:w-fit fade-section'
              >
                <Link href='https://form.typeform.com/to/HgIPCAwA' className="confetti-disp">
                  Get early access
                </Link>
              </Button>
            </div>
            <div>
              <Image src='/cta-frame.webp' alt='' width={680} height={224} className="tilt"/>
            </div>
          </div>
        </div>
      </main>
      <footer className='max-w-screen-1xl mx-auto px-4 sm:px-8 py-16 space-y-12'>
        <div className='mx-auto max-w-lg lg:max-w-2xl text-center lg:text-lg xl:text-xl font-medium'>
          <TextBalancer>
            Trendibble is more than a platform—it’s a movement. Sign up today
            and join a community where authentic connections drive creative
            success
          </TextBalancer>
        </div>
        <Separator className='bg-[#CAC4C8]' />
        <div className='space-y-8 md:space-y-6'>
          <div className='flex justify-center items-center [&_svg]:w-44 gap-5 text-brand-gray-500'>
            <Logo />
          </div>
          <div className='flex justify-center items-center gap-5 fade-section'>
            <Link
              className='text-brand-gray-300 hover:text-brand-gray-500 transition-all ease-linear duration-200'
              href='https://facebook.com/trendibble'
            >
              <Facebook className='size-9 md:size-7' />
            </Link>
            <Link
              className='text-brand-gray-300 hover:text-brand-gray-500 transition-all ease-linear duration-200'
              href='https://instagram.com/trendibble'
            >
              <Instagram className='size-8 md:size-6' />
            </Link>
            <Link
              className='text-brand-gray-300 hover:text-brand-gray-500 transition-all ease-linear duration-200'
              href='https://x.com/trendibble'
            >
              <XLogo className='size-8 md:size-6' />
            </Link>
            <Link
              className='text-brand-gray-300 hover:text-brand-gray-500 transition-all ease-linear duration-200'
              href='https://linkedin.com/in/trendibble'
            >
              <Linkedin strokeWidth={1.5} className='size-8 md:size-6' />
            </Link>
            <Link
              className='text-brand-gray-300 hover:text-brand-gray-500 transition-all ease-linear duration-200'
              href='https://youtube.com/trendibble'
            >
              <Youtube strokeWidth={1.5} className='size-8 md:size-6' />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const why = [
  {
    icon: (
      <svg
        width='28'
        height='24'
        viewBox='0 0 28 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.4344 0.378393C19.141 -0.354941 15.9664 -0.0509408 13.985 2.19706C11.9037 -0.0349409 8.83703 -0.358941 6.55969 0.379726C1.33969 2.05973 -0.288307 8.10773 1.19703 12.7464V12.7477C3.54103 20.0424 11.3344 23.9771 14.0037 23.9771C16.3864 23.9771 24.489 20.1157 26.8064 12.7464C28.2917 8.10906 26.6597 2.06106 21.4344 0.378393Z'
          fill='#9093E1'
        />
        <path
          d='M21.511 10.2638H21.5443C22.0803 10.2638 22.5243 9.83851 22.543 9.29718C22.6216 6.96918 21.2336 5.25851 19.0896 5.03984C18.543 4.98118 18.0496 5.38518 17.9923 5.93318C17.9363 6.48251 18.3363 6.97318 18.8856 7.02918C19.967 7.13984 20.587 7.96251 20.5443 9.23051C20.5256 9.78251 20.959 10.2438 21.511 10.2638Z'
          fill='#9093E1'
        />
      </svg>
    ),
    title: "Streamlined Collaboration",
    text: "Connect with the right brands or creators quickly and effortlessly",
  },
  {
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13 0C3.40267 0 0 3.40267 0 13C0 22.5973 3.40267 26 13 26C22.5973 26 26 22.5973 26 13C26 3.40267 22.5973 0 13 0Z'
          fill='#38B780'
        />
        <path
          d='M12.1216 16.8701L18.4549 10.5421C18.8456 10.1515 18.8456 9.51813 18.4549 9.12746C18.0642 8.73813 17.4309 8.73679 17.0402 9.12746L11.4149 14.7488L8.96023 12.2915C8.5709 11.9035 7.93756 11.9008 7.54556 12.2915C7.1549 12.6821 7.1549 13.3155 7.54556 13.7061L10.7069 16.8701C10.8949 17.0581 11.1496 17.1635 11.4149 17.1635C11.6802 17.1635 11.9336 17.0581 12.1216 16.8701Z'
          fill='#38B780'
        />
      </svg>
    ),
    title: "Trust and Transparency",
    text: "Every transaction is secure, and every profile is verified for authenticity",
  },
  {
    icon: (
      <svg
        width='28'
        height='28'
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.0009 0.350586C3.92223 0.350586 0.351562 3.92125 0.351562 13.9999C0.351562 24.0786 3.92223 27.6493 14.0009 27.6493C24.0782 27.6493 27.6502 24.0786 27.6502 13.9999C27.6502 3.92125 24.0782 0.350586 14.0009 0.350586Z'
          fill='#FF9574'
        />
        <path
          d='M19.9737 21.5567C20.5257 21.5567 20.9737 21.1087 20.9737 20.5567V16.3474C20.9737 15.7954 20.5257 15.3474 19.9737 15.3474C19.4217 15.3474 18.9737 15.7954 18.9737 16.3474V20.5567C18.9737 21.1087 19.4217 21.5567 19.9737 21.5567Z'
          fill='#FF9574'
        />
        <path
          d='M14.0017 21.5567C14.5537 21.5567 15.0017 21.1087 15.0017 20.5567V7.35937C15.0017 6.80604 14.5537 6.35938 14.0017 6.35938C13.4497 6.35938 13.0017 6.80604 13.0017 7.35937V20.5567C13.0017 21.1087 13.4497 21.5567 14.0017 21.5567Z'
          fill='#FF9574'
        />
        <path
          d='M7.92969 21.5567C8.48169 21.5567 8.92969 21.1087 8.92969 20.5567V11.6314C8.92969 11.0794 8.48169 10.6314 7.92969 10.6314C7.37769 10.6314 6.92969 11.0794 6.92969 11.6314V20.5567C6.92969 21.1087 7.37769 21.5567 7.92969 21.5567Z'
          fill='#FF9574'
        />
      </svg>
    ),
    title: "Data-Driven Decisions",
    text: "Use actionable insights to optimize your campaigns and boost your impact",
  },
  {
    icon: (
      <svg
        width='34'
        height='28'
        viewBox='0 0 34 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.5921 12.492H25.6187C28.4587 12.492 30.7787 10.172 30.7787 7.34538C30.7787 4.50538 28.4587 2.18538 25.6187 2.18538C25.0587 2.18538 24.5254 2.27872 24.0187 2.43872C24.9387 3.79872 25.4721 5.43872 25.4721 7.21205C25.4854 9.01205 24.9254 10.7454 23.8721 12.1854C24.4187 12.3854 24.9921 12.492 25.5921 12.492Z'
          fill='#FF85D6'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.36542 12.492H8.40542C9.00542 12.492 9.57875 12.3854 10.1254 12.1854C9.11208 10.7987 8.51208 9.07872 8.51208 7.21205C8.51208 5.43872 9.04542 3.79872 9.96542 2.43872C9.45875 2.27872 8.92542 2.18538 8.36542 2.18538C5.52542 2.18538 3.21875 4.50538 3.21875 7.34538C3.21875 10.172 5.52542 12.492 8.36542 12.492Z'
          fill='#FF85D6'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.9929 13.7002H17.0369C18.7635 13.6948 20.3849 13.0162 21.6009 11.7908C22.8182 10.5655 23.4849 8.94016 23.4782 7.21616C23.4782 3.63882 20.5702 0.729492 16.9929 0.729492C13.4169 0.729492 10.5089 3.63882 10.5089 7.21616C10.5089 10.7908 13.4169 13.7002 16.9929 13.7002Z'
          fill='#FF85D6'
        />
        <g opacity='0.4'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M25.6335 14.4121C24.1135 14.4121 22.6869 14.7188 21.4869 15.2388C25.6869 16.4521 28.6602 19.3588 28.7402 22.7588C30.9269 22.4788 33.2869 21.6521 33.2869 19.3988C33.2869 16.6921 29.7802 14.4121 25.6335 14.4121Z'
            fill='#FF85D6'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.5002 15.2254C11.3002 14.7188 9.8735 14.4121 8.36683 14.4121C4.22017 14.4121 0.713501 16.6921 0.713501 19.3988C0.713501 21.6521 3.06017 22.4654 5.24683 22.7588C5.3135 19.3588 8.28683 16.4521 12.5002 15.2254Z'
            fill='#FF85D6'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.993 16.5948C11.7117 16.5948 7.24898 19.4695 7.24898 22.8721C7.24898 27.2721 14.5823 27.2721 16.993 27.2721C21.177 27.2721 26.7397 26.8188 26.7397 22.9001C26.7397 19.4815 22.2757 16.5948 16.993 16.5948Z'
            fill='#FF85D6'
          />
        </g>
      </svg>
    ),
    title: "Community-Driven Growth",
    text: "Become part of a vibrant network where creativity meets opportunity",
  },
];
