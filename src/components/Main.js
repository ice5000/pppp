import React from "react";
import Marquee from "react-fast-marquee";

const Main = () => {
  return (
    <div>
      <div>
        <div className="flex mt-24 justify-center items-center space-x-16 flex-row ">
          <div className="">
            <img
              className="w-96 h-96 rounded-full"
              src="pingu-2.jpg"
              alt="pink"
            />
          </div>
          
            <div>
            <div className="flex font-bold text-[60px] text-[#FFA000]">
              About Pingachu
            </div>
            <div className=" font-medium text-[#FFA000] leading-9 text-[20px]">
              Pingachu is the  Chinese brother of pikachu. He was lost and
              forgotten <br></br>
              in China, a disgrace to the world. His brothers in the USA and
              Japan<br></br>
              were famous and favored. But now China is joining the crypto world
              and<br></br>
              it's Pingachus time to shine. He may be the ugliest of the
              brothers<br></br>
              but he looks just like his president and the world will see just
              how<br></br>
              memeable he can be.
            </div>
            </div>
          
        </div>
        <div className="mt-24 bg-[#13111A] text-white">
        <Marquee className="bg-[#131212] p-5 mb-5" gradient={false} speed={100}>
          {/* <div className="flex space-x-2 mx-10">
            <h4 className="text-white font-bold">
              Previous winner:&nbsp; {previousWinner}
            </h4>
          </div> */}
          <div className="flex space-x-96 flex-row justify-between">
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">$PINGACHU&nbsp;</h4>
            </div>
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">JOIN OUR COMMUNITY:&nbsp;</h4>
            </div>
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">@Jinpingachu&nbsp;</h4>
            </div>
          </div>
        </Marquee>
        </div>
      </div>
      <div className="flex flex-row mt-28 justify-center items-center space-x-32 ">
        <div className="">
          <div className="font-bold text-[60px] text-[#FFA000]">Tokenomics</div>
          <div className="font-medium text-[#FFA000] leading-9 text-[20px]">
            1% Buy and 1% sell tax all added to liquidity <br></br> Token distribution 4%
            cex 5% Giveaway/Partnership <br></br>91% Liquidity.
          </div>
          <div className="bg-[#FFA000] text-[#FFFFFF] w-32 h-12 justify-center items-center mt-9 font-bold flex rounded-sm">
            Dextools
          </div>
        </div>
        <div>
          <img
            className=" w-96 h-96 rounded-full"
            src="pingu-3.jpg"
            alt="pik"
          />
        </div>
      </div>
      <Marquee className=" mt-28 bg-[#131212] p-5 mb-5" gradient={false} speed={100}>
          {/* <div className="flex space-x-2 mx-10">
            <h4 className="text-white font-bold">
              Previous winner:&nbsp; {previousWinner}
            </h4>
          </div> */}
          <div className="flex space-x-96 flex-row justify-between">
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">JOIN OUR COMMUNITY:&nbsp;</h4>
            </div>
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">$PINGACHU&nbsp;</h4>
            </div>
            <div className="flex space-x-2 mx-10">
              <h4 className="text-white font-bold">@Jinpingachu&nbsp;</h4>
            </div>
          </div>
        </Marquee>
    </div>
  );
};

export default Main;
