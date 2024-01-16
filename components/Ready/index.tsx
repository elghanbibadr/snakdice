import SnakeSVG from '@/assets/svg/snake-2.svg';
import SnakeMobileSVG from '@/assets/svg/snake-2-mobile.svg';
import SectionTitle from '../Common/SectionTitle';
import Link from "next/link";

const Ready = () => {
  return (
    <>
      <section
        id="#Ready"
        className="relative w-full"
      >
        <div className="relative mt-[10%] lg:mt-[-30%] pb-[100%] xxs:pb-[60%] sm:pb-[100px] md:pb-0 w-full">
          <div className="absolute top-[15%] sm:top-[25%] lg:top-[50%] ml-[10%] mr-[15%] lg:ml-[15%]">
            <SectionTitle
              title="READY TO START?"
              paragraph="As we move forward in the crypto gaming landscape, the SnakeDice team remains dedicated to driving innovation, delivering unparalleled value to its community.
              We welcome you to the first social gaming platform with deflationary tokenomics offered to US-based users.
              "
              mb="40px"
            />
            <div className="w-[200px] block lg:hidden xl:block">
              <Link href="https://discord.gg/r2wBDTmZc5" target="_blank" className="rounded-lg [background:linear-gradient(99.85deg,_#4631d6,_#d535ef)] overflow-hidden flex flex-col items-center justify-center py-[15px] px-[30px] text-[1.31rem]">
                <div className="font-medium">
                  Join Discord
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <SnakeSVG />
          </div>
          <div className="block lg:hidden">
            <SnakeMobileSVG />
          </div>
        </div>
      </section >
    </>
  );
};

export default Ready;
