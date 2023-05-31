import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="">
      <div>
        
        
        
        <div className="flex justify-center items-center flex-col text-center">
        <div className="mt-10"><img className=" w-52 h-52 rounded-full" src="pinka-1.jpg" alt="pinka" /></div>
          <div className=" text-[#FFA000] font-bold text-[80px] ">
            Welcome to Pingachu
          </div>
          <div className="font-medium text-[20px] text-[#FFA000] ">
            It's time to welcome Pingachu into the crypto world. The USA had its
            time, now China is here to take over teh memes. We honor President
            Xi Jinping with the most classic animated character of all, Pikachu.
            But what would he be without the presidents face? Just a pokemon.
            Now he's something far greater. PINGACHU.
          </div>
        </div>
       
      </div>
      <div className="flex flex-row justify-center mt-10 space-x-44">
        <div className="bg-[#FFA000] text-[#FFFFFF] w-32 h-12 justify-center items-center font-bold  flex rounded-sm">
          Dextools
        </div>
        <div className=" flex space-x-1 flex-row bg-[#FFA000] text-[#13111A] font-bold w-32 rounded-sm h-12 justify-center items-center">
          <div className="text-[#FFFFFF]">Buy</div>
          <div className="text-[#FFFFFF]">$Pingachu</div>
        </div>
      </div>
      <div className=" flex flex-row justify-center space-x-2 ">
      
        <div className="flex flex-col space-y-10">
        <div className="flex flex-row space-x-5">
        <div className="bg-[#1da1f2] w-12 h-12 items-center justify-center rounded-md flex f">
        
        <a href="https://twitter.com/Jinpingachu"><FaTwitter className="text-white" size={30} /></a>
      </div>
      <div className="bg-[#1da1f2] w-12 h-12 justify-center flex rounded-md  items-center">
        <a href="https://t.me/chinesepikachu"><FaTelegram className="text-white " size={25} /></a>
      </div>
        </div>
      <div><img className=" w-28 h-28 rounded-full" src="pic-20.jpg" alt="pi"/></div>
        </div>
        
      </div>
      <div className=" mt-52 bg-[#13111A] text-white">
      <Marquee className="bg-[#131212] p-5 mb-5" gradient={false} speed={100}>
          {/* <div className="flex space-x-2 mx-10">
            <h4 className="text-white font-bold">
              Previous winner:&nbsp; {previousWinner}
            </h4>
          </div> */}
          <div className="flex space-x-96 flex-row justify-between">
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">@Jinpingachu&nbsp;</h4>
            </div>
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">$PINGACHU&nbsp;</h4>
            </div>
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">JOIN OUR COMMUNITY:&nbsp;</h4>
            </div>
          </div>
        </Marquee>
      </div>
    </header>
  );
};

export default Header;
