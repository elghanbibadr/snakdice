import Image from "next/image";

const Tokenomics = () => {
  return (
    <>
      <section
        id="#Tokenomics"
        className="relative z-10 overflow-hidden py-12 md:py-16 lg:py-24"
      >
        <div className="ml-[10%] xl:ml-[5%] mr-[10%]">
          <div className="relative w-full flex flex-col xl:flex-row-reverse">
            <div className="w-full xl:w-[43%] mt-12">
              <div
                className="wow fadeInUp mx-auto xl:text-left mb-12"
                data-wow-delay=".2s"
              >
                <h1 className="mb-8 text-3xl font-bold text-center xl:text-left leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  TOKENOMICS
                </h1>
                <p className="text-body-color-dark text-center xl:text-left">
                  The SnakeDice ($SNAKE) token is designed with a carefully
                  structured tokenomics model to ensure the long-term success and sustainability of the ecosystem.
                </p>
              </div>
              <div
                className="wow fadeInUp mx-auto xl:text-left mb-12"
                data-wow-delay=".2s"
              >
                <h1 className="mb-2 text-2xl leading-tight md:text-3xl sm:leading-tight md:leading-tight">
                  45% Treasury
                </h1>
                <p className="text-body-color-dark text-base">
                  The treasury serves as a vital resource to fuel project development, marketing efforts, and partnerships.
                </p>
              </div>
              <div
                className="wow fadeInUp mx-auto xl:text-left mb-12"
                data-wow-delay=".2s"
              >
                <h1 className="mb-2 text-2xl leading-tight md:text-3xl sm:leading-tight md:leading-tight">
                  10% Core Team
                </h1>
                <p className="text-body-color-dark text-base">
                  To align the interests of the core team and advisors with the project's long-term success, 10% of supply is allocated here, vested over 24 months.
                </p>
              </div>
              <div
                className="wow fadeInUp mx-auto xl:text-left mb-12"
                data-wow-delay=".2s"
              >
                <h1 className="mb-2 text-2xl leading-tight md:text-3xl sm:leading-tight md:leading-tight">
                  30% ICO
                </h1>
                <p className="text-body-color-dark text-base">
                  30,000 $SNAKE will be sold via a fair public sale during the initial coin offering. Valuation of $SNAKE will start at 60 ETH and end at 600 ETH during the second public sale.
                </p>
              </div>
              <div
                className="wow fadeInUp mx-auto xl:text-left mb-12"
                data-wow-delay=".2s"
              >
                <h1 className="mb-2 text-2xl leading-tight md:text-3xl sm:leading-tight md:leading-tight">
                  15% Liquidity Incentives
                </h1>
                <p className="text-body-color-dark text-base">
                  This will be distributed for between 16 and 40 months, depending on the emissions rate. Rewards will be emitted at a rate of between 375 to 937.50 tokens per month, giving incentive to long-term holders.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[57%] ml-0 h-calc flex items-center justify-center">
              <Image
                width={700}
                height={700}
                className="object-cover"
                alt=""
                src="/images/snakedice/tokenomics.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
