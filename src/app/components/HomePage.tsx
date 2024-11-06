import Link from "next/link";
import HomeElements1 from "./HomeElement1";
import HomeElements2 from "./HomeElement2";
import HomeElements3 from "./HomeElement3";

export default function HomePage() {
  return (
    <div className="HomePage h-[1046px] w-[1028px] bg-[#252B42] mx-auto flex border-1 flex-col ">
      <div className="Bodytext h-[496px] w-[701px] mx-auto mt-[93px] flex flex-col justify-evenly items-center ">
        <h5 className=" text-[#23a6f0] text-[16px] font-bold font-['Montserrat']">
          Welcome
        </h5>
        <h1 className="text-white text-[58px] text-center tracking-tight font-bold font-['Montserrat'] ">
          Selling on the <br />
          internet like a pro
        </h1>
        <h4 className="text-white text-center text-[20px] w-[536px] leading-7 font-['Montserrat']">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <div className="BodyButtons flex flex-row items-center justify-evenly ">
          <div className="button1 w-[192px] h-[52px] bg-[#23a6f0] rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-[#0c82c7] mr-[10px] ">
            <Link
              href="#"
              className="text-white text-sm font-bold font-[Montserrat] "
            >
              Get Quote Now
            </Link>
          </div>
          <div className="button2 w-[192px] h-[52px] flex rounded-md border-[2px] border-[#23a6f0] items-center justify-center cursor-pointer hover:bg-[#23a6f0] group ">
            <Link
              href="#"
              className="text-[#23a6f0] text-sm font-bold font-['Montserrat'] group-hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div // In this section calling elements
     className="Name: BoxElements | Styling:
     Responsive: 
     Desktop: flex flex-row w-[1028px] h-[292px] mx-auto mt-[80px] justify-between">
        <HomeElements1 />
        <HomeElements2 />
        <HomeElements3 />
      </div>
    </div>
  );
}
