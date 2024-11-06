// import { Montserrat } from "next/font/google";
// const h1font = Montserrat({
//   weight: "400",
//   style: "normal",
//   subsets: ["latin"],
//   display: "swap",
// });

export default function HomeElements1() {
    return (
      <div className="w-[328px] h-[292px] bg-white cursor-pointer hover:scale-105" >
        <div className="colorBox bg-[#FFDCD1] w-[70px] h-[76px] ml-[40px] mt-[35px] rounded-md"></div>
        <h1 className="font-bold font-[Montserrat] mt-[20px] ml-[40px]">training Courses</h1>
        <div className="line w-[50px] h-[2px] bg-[#E74040] mt-[20px] ml-[40px]"></div>
        <p className="font-bold text-[14px]font-[Montserrat] mt-[20px] ml-[40px] w-[222px] tracking-tight text-[#737373]
">
          The gradual accumulation of information about atomic and small-scale behaviour...</p>
</div>
    );
  }