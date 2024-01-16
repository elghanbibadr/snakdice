import Image from "next/image";
import { Card } from "@/types/card";

const SingleTeam = ({ team, selected }: { team: Card, selected: boolean }) => {
  const { image, name, title, paragraph } = team;
  return (
    <div className={`mt-[70px] mb-[40px] h-[85%] sm:h-[80%] mx-2 text-left cursor-pointer ${selected ? "border" : ""}`} >
      <div className="relative flex flex-row p-6">
        <div className="flex flex-col">
          <div className={`absolute top-[-50px] h-[100px] ${selected ? "w-[100px]" : "w-[70px]"}`}>
            <Image
              width={100}
              height={100}
              className="absolute bottom-0 object-cover"
              alt=""
              src={image}
            />
          </div>
          <div className="mt-[60px]">
            <p className="text-[1.31rem] leading-[40px]">{name}</p>
            <p className="text-transparent !bg-clip-text [background:linear-gradient(88.25deg,_#7d73ed,_#01e1ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mb-3">
              {title}
            </p>
            <p className="text-body-color-dark text-base inline-block">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
