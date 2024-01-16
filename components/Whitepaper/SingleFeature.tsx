import Image from "next/image";
import { Card } from "@/types/card";

const SingleFeature = ({ card, selected, handleSelected }: { card: Card, selected: boolean, handleSelected: any }) => {
  const { image, title, paragraph } = card;
  return (
    <div className={`w-auto cursor-pointer ${selected? "border-2": ""}`} onClick={() => handleSelected(card.id)}>
      <div className="relative flex flex-row p-6">
        <div className="flex flex-col">
          <div className="absolute top-[-40px] h-[70px] w-[70px]">
            <Image
              width={100}
              height={100}
              className={`absolute bottom-0 transform -translate-x-1/2 object-cover ${selected? "left-[50%] w-[70px] h-[70px]" : "left-[25%] w-[35px] h-[35px]"}`}
              alt=""
              src={image}
            />
          </div>
          <div className="mt-[16px]">
            <b className="text-[1.31rem] leading-[40px]">{title}</b>
            <p className="text-body-color-dark">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
