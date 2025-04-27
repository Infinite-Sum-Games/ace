import ShineBorder from "@/_components/ui/shine-border";
import { MagicCard } from "@/_components/ui/magic-card";

interface PropsForOffer {
  logo: JSX.Element;
  title: string;
  subtitle: string;
}

export default function Offers({ logo, title, subtitle }: PropsForOffer) {
  return (
    <ShineBorder
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border bg-background shadow-md md:shadow-xl
      w-[100px] sm:w-[200px] md:w-[280px] lg:w-[330px] min-h-[300px] md:min-h-[330px] aspect-square"
      color={["#FFA500", "#FF8C00", "#FF7F50"]}
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap m-0 border-0 p-4 h-full"
        gradientColor={"#262626"}
      >
        <div className="flex justify-center items-center w-full p-2 mb-6">
          <div >{logo}</div>
        </div>
        <div className="text-white text-2xl font-bold  text-center whitespace-normal">
          {title}
        </div>
        <div className="text-slate-500 text-center text-lg p-2 whitespace-normal">
          {subtitle}
        </div>
      </MagicCard>
    </ShineBorder>
  );
}
