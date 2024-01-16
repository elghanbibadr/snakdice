import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="relative z-10 py-12 md:py-16 lg:py-24">
        <div className="mx-[10%]">
          <SectionTitle
            title="GOVERNANCE & LIQUIDITY REWARDS"
            paragraph=""
            center
            width="100%"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
