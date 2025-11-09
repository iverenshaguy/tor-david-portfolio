import React from "react";
import Image from "next/image";
import Heading from "app/components/ui/heading";
import Content from "app/components/ui/content";

// TODO: render these in white for dark mode
const socialLinks = [
  {
    href: "linkedin.com/in/tor-david-shaguy-ab1845226",
    icon: "./linkedin_icon.svg",
    ariaLabel: "LinkedIn profile",
  },
  {
    href: "mailto:shaguydavid@gmail.com?subject=Hello&body=Hi%20David",
    icon: "./email_icon.svg",
    ariaLabel: "Email contact",
  },
  {
    href: "https://wa.link/62g076",
    icon: "./whatsapp_icon.svg",
    ariaLabel: "WhatsApp contact",
  },
  {
    href: "https://dribbble.com/B_lack",
    icon: "./dribbble.svg",
    ariaLabel: "Dribbble contact",
  },
];

export function Footer() {
  return (
    <footer
      id="connect"
      className="relative w-full scroll-mt-20 border-t-[#C0BAC7] bg-linear-[180deg,_#FFF_50%,_#C0BAC7_100%] px-4 font-sans md:px-8 md:py-12 lg:py-16 dark:bg-[linear-gradient(180deg,_#1A1A1A_50%,_#3A3342_150.64%)]"
    >
      <Content className="py-8 pb-20 sm:pb-8">
        <div className="relative z-10 flex flex-col items-start">
          <Heading className="mb-11 text-left leading-[normal]">
            Ready to enhance your establishment with <br />
            simple designs that are visually appealing <br />
            and empathic?
          </Heading>

          <div className="w-full">
            <span className="relative inline-flex flex-row items-center">
              <a
                href="https://wa.link/62g076"
                className="h-auto rounded-full bg-[#4a3d7a] px-4 py-2 text-white transition hover:bg-[#3a2d6a] dark:text-gray-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contact me
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="151"
                height="101"
                viewBox="0 0 151 101"
                fill="none"
                className="absolute top-[2px] right-[-78px] h-[50.74px] w-[75.99px] md:top-[-15px] md:right-[-155px] md:h-[100.74px] md:w-[150.88px] lg:top-[-13px] lg:right-[-135px] lg:h-[85px] lg:w-[128px]"
              >
                <path
                  d="M142.88 35.8053C130.912 31.3149 116.267 29.0374 104.546 35.5483C101.577 37.1974 99.0263 39.7012 97.1313 42.6483M97.1313 42.6483C94.2451 47.137 92.88 52.6539 93.8756 57.7456C95.4332 65.7115 100.36 73.1202 108.93 73.8985C113.397 74.3042 117.475 72.6968 118.826 68.0986C120.89 61.0735 114.594 52.8329 109.268 49.0606C105.585 46.4523 101.483 44.3067 97.1313 42.6483ZM5.01429 39.001C16.778 34.0005 31.3114 31.0957 43.3019 37.0969C46.3389 38.6169 48.9949 41.0088 51.0148 43.8717M51.0148 43.8717C54.0912 48.2322 55.6921 53.6854 54.9162 58.8151C53.7024 66.8406 49.099 74.4542 40.5697 75.6001C36.124 76.1973 31.9815 74.7666 30.4339 70.2307C28.0697 63.3009 34.0062 54.7974 39.1653 50.7996C42.7323 48.0355 46.7379 45.7156 51.0148 43.8717ZM51.0148 43.8717C66.0429 37.3928 82.8145 35.9331 97.2835 42.5946"
                  stroke="#5A4B8E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M11.8906 26.2644C9.56583 29.042 4.43929 35.5987 2.5315 39.6045"
                  stroke="#5A4B8E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M2.53516 39.6038C5.87248 41.0116 13.4291 44.5 16.9569 47.1908"
                  stroke="#5A4B8E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <hr className="my-12 h-[1px] w-full border-gray-200 bg-gray-200 dark:border-[#4A4A4A] dark:bg-[#4A4A4A]" />

            <div className="mt-5">
              <h3 className="mb-10 font-sans text-2xl leading-normal font-medium tracking-[0.48px] text-[#828282] dark:text-[#A3A3A3]">
                Connect
              </h3>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    className="border-gray-4 flex h-[70px] w-[70px] items-center justify-center rounded-[35px] border border-solid p-5 transition-colors hover:bg-gray-50 dark:border-[#4A4A4A] dark:hover:bg-[#2A2A2A]"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={link.ariaLabel}
                  >
                    <Image
                      src={link.icon}
                      alt="Social icon"
                      width={30}
                      height={30}
                      className="transition-[filter] dark:brightness-1 dark:invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <Image
          src="/blob-3.svg"
          alt="Vector decoration"
          width={410}
          height={343}
          className="absolute top-[80px] right-[50px] z-0 h-[201.5px] w-[164.85px] object-contain md:top-[50px] md:right-[70px] md:h-[318.5px] md:w-[290.92px] lg:top-[95px] lg:right-[173px] lg:h-[342px] lg:w-[410px]"
        />
      </Content>
    </footer>
  );
}

export default Footer;
