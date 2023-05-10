import Image from "next/image";
import desktopBg from "../assets/home/background-home-desktop.jpg";
import tabletBg from "../assets/home/background-home-tablet.jpg";
import mobileBg from "../assets/home/background-home-mobile.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        alt="home background"
        src={desktopBg}
        width={1440}
        height={900}
        className="w-screen h-screen hidden laptop:block transition-all absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="home background"
        src={tabletBg}
        width={768}
        height={1024}
        className="w-screen h-screen hidden tablet:block laptop:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <Image
        alt="home background"
        src={mobileBg}
        width={375}
        height={667}
        className="w-screen h-screen tablet:hidden transition-all absolute inset-0 -z-10"
        priority
      />
      <div className="w-full h-[calc(100vh-90px)] tablet:h-[calc(100vh-128px)] laptop:h-[calc(100vh-160px)] p-8  pb-12 tablet:pb-0 laptop:p-24 laptop:pr-12  flex flex-col laptop:flex-row justify-between gap-28 items-center laptop:items-end">
        <div className="text-white flex flex-col justify-between items-center laptop:items-start gap-0 laptop:gap-6 max-w-[450px]">
          <p className="uppercase font-keezy-reg text-xl leading-6 tracking-[3.5px] text-center laptop:text-left laptop:text-[28px] laptop:leading-8 laptop:tracking-[5px] text-[#D0D6F9]">
            So, you want travel to
          </p>
          <h1 className="uppercase font-keezy-bellefar text-[80px] tablet:text-[130px] leading--[150px] laptop:leading-[172px]">
            Space
          </h1>
          <p className="font-keezy text-[15px] tablet:text-base leading-6 text-center laptop:text-lg laptop:leading-8 laptop:text-left text-[#D0D6F9]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div className="pointer-events-none bg-transparent flex  items-center justify-center hover:bg-white/10 transition-all duration-[400ms] w-[200px] h-[200px] tablet:w-[280px] tablet:h-[280px] laptop:w-[350px] laptop:h-[350px] rounded-full">
          <Link
            href="/destination/Moon"
            className="w-[150px] tablet:w-[220px] laptop:w-[274px] h-[150px] tablet:h-[220px] laptop:h-[274px] rounded-full bg-white flex items-center justify-center pointer-events-auto cursor-pointer hover:w-[130px] hover:h-[130px] tablet:hover:w-[200px] tablet:hover:h-[200px] laptop:hover:w-[250px] laptop:hover:h-[250px] transition-all duration-[400ms]"
          >
            <p className="uppercase font-keezy-bellefar text-xl tablet:text-[32px] leading-9 tracking-[2px] text-[#0B0D17]">
              explore
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
