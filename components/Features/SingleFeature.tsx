import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="relative flex flex-row p-6 border-2">
      <div className="flex flex-col">
        <div className="absolute top-[-40px] h-[70px] w-[70px]">
          {icon}
        </div>
        <div className="mt-[16px]">
          <b className="text-[1.31rem] leading-[40px]">{title}</b>
          <p className="text-body-color-dark text-base inline-block">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
