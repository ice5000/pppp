import React, { PureComponent } from "react";

export class Footer extends PureComponent {
  render() {
    return (
      <div className=" flex mt-28 justify-center flex-col space-y-32 items-center">
        <div className="font-bold text-[60px] text-[#FFA000]">Roadmap</div>
        <div className="flex flex-row space-x-2 items-center mx-auto justify-center">
          <div className=" space-y-3 flex justify-center items-center group flex-col">
            <div>
              <img
                className="w-72 h-72 rounded-full "
                src="brochu-2.jpg "
                alt="piku"
              />
            </div>
            <div>
              <div className="bg-red-700 flex justify-center items-center rounded-xl group cursor-pointer space-y-4 w-[450px] h-96 flex-col">
                <div className="font-bold text-2xl text-[#FFA000] group-hover:text-white cursor-pointer">Phase 1</div>
                <div className="font-medium text-[#FFA000] leading-9 text-[16px] ">
                  Launch Pingachu <br></br>Meme contests
                  <br></br> CoinGecko/Coinmarketcap Listings<br></br> 500+
                  Holders
                  <br></br>Get Pingachu Trending on twitter to outshine his
                  brothers.
                </div>
                <div className="bg-[#FFA000] hover:bg-blue-500 text-[#FFFFFF] w-32 h-12 justify-center items-center font-bold flex rounded-sm ">
                  Meme
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center group space-y-3 items-center flex-col">
            <div>
              <img
                className="w-72 h-72 rounded-full "
                src="chu-2.jpg "
                alt="ku"
              />
            </div>
            <div className="bg-red-700 flex justify-center items-center rounded-xl group cursor-pointer space-y-4 w-[450px] h-96 flex-col">
              <div className="font-bold text-2xl text-[#FFA000] group-hover:text-white cursor-pointer">Phase 2</div>
              <div className="font-medium text-[#FFA000] leading-9 text-[16px] ">
                Community Partnerships
                <br></br>Competitions and giveaways
                <br></br>CEX Listing, 1,000 holders

              </div>
              <div className="bg-[#FFA000] text-[#FFFFFF] hover:bg-blue-500 w-32 h-12 justify-center items-center font-bold flex rounded-sm ">
                Vibe
              </div>
            </div>
          </div>
          <div className="flex justify-center space-y-3 items-center group flex-col">
            <div>
              <img
                className="w-72 h-72 rounded-full "
                src="hingo-2.jpg "
                alt="hing"
              />
            </div>
            <div className="bg-red-700 flex justify-center items-center rounded-xl group cursor-pointer space-y-4 w-[450px] h-96 flex-col">
              <div className="font-bold text-2xl text-[#FFA000] group-hover:text-white cursor-pointer">Phase 3</div>
              <div className="font-medium text-[#FFA000] leading-9 text-[16px] ">
                <br></br>Utility building, Bot/Tools
                <br></br>5,000+ holders
                <br></br>Meme Takeover
              </div>
              <div className="bg-[#FFA000] hover:bg-blue-500 text-[#FFFFFF] w-32 h-12 justify-center items-center font-bold flex rounded-sm ">
                Meme Takeover
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#161C2D] w-full h-16 flex justify-center items-center  text-[#FFFFFFA6]">Copyright 2023, All Rights Reserved $PINGACHU</div>
      </div>
    );
  }
}

export default Footer;
