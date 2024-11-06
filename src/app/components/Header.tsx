import Link from "next/link";
import "animate.css";

export default function Header() {
  return (
    
     <div // Header main container
     className="Name: HeaderContainer | Styling:
     Responsive: md:flex gap-auto md:items-center 
     Desktop: w-[1322px] h-[91px] mx-auto flex flex-row justify-evenly items-center">
    
     <Link // This is logo or brand name section
     href="/"
     className="Name: Brand/LogoHere | Styling:
     Responsive: 
     Desktop: text-white text-2xl font-bold font-['Montserrat'] ml-[136px] leading-loose tracking-tight">
     BrandName
     </Link>

     <Link // This is Home link section
     href="/"
     className="Name: HomeLink | Styling:
     Responsive:  max-md:hidden
     Desktop: ml-[83px] text-white text-sm font-bold font-['Montserrat'] hover:text-[#23a6f0]">
     Home
     </Link>

     <Link // This is Product link section
     href="/"
     className="Name: ProductLink | Styling:
     Responsive:  max-md:hidden
     Desktop: text-white text-sm font-bold font-['Montserrat'] hover:text-[#23a6f0]">
     Product
     </Link>

     <Link // This is Pricing link section
     href="/"
     className="Name: PricingLink | Styling:
     Responsive:  max-md:hidden
     Desktop: text-white text-sm font-bold font-['Montserrat'] hover:text-[#23a6f0]">
     Pricing
     </Link>

     <Link // This is Contact link section
     href="/"
     className="Name: ContactLink | Styling:
     Responsive: max-md:hidden
     Desktop: text-white mr-[239px] text-sm font-bold font-['Montserrat'] hover:text-[#23a6f0]">
     Contact
     </Link>

     <Link // This is Login link section
     href="/"
     className="Name: LoginLink | Styling:
     Responsive: md:ml-9
     Desktop: text-white mr-[45px] text-sm font-bold font-['Montserrat'] hover:text-[#23a5f0]">
     Login
     </Link>

     <div // This is Join us Button section
     className="Name: HeaderContainer | Styling:
     Responsive: 
     Desktop: join_us_button h-[52px] w-[138px] flex bg-[#23a6f0] rounded-[5px] mr-[136px] items-center justify-center cursor-pointer hover:bg-[#0c82c7] ">
     
     <Link // This is Join us link section
     href="/"
     className="Name: LoginLink | Styling:
     Responsive:
     Desktop: text-white text-sm font-bold font-['Montserrat']">
     Join Us
     </Link>
     
     </div>
     </div>

  );
}
