import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[#242424] px-6 ">
      <div className="h-[78px] bg-[#0E77D9] mt-[40px] mb-[20px] pt-2">
    
      </div>

        <div className="mid w-full h-[475px] bg-[#242424]   ">
          <div>
            <div className="flex justify-between h-[28px] py-1">
              <div className="text-[17px] text-[white]">Today's Goal</div>
              <div>
                <img src="/./heart.svg" />
              </div>
            </div>

            <div className="h-[365px] gap-[2px] mt-2">
              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <img src="/work.svg" />
                    <div className="text-[16px] text mt-1 text-[white]">
                      Workout for 20 Mins
                    </div>
                  </div>
                  <div>
                    <img src="/wdonetick.svg" />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <img src="/readbook.svg" />
                    <div className="text-[16px] text mt-1 text-[white]">
                    Read book for 15 mins
                    </div>
                  </div>
                  <div>
                    <img src="/readbooktick.svg" />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <img src="/walk.svg" />
                    <div className="text-[16px] text mt-1 text-[white]">
                    30 mins walk
                    </div>
                  </div>
                  <div>
                    <img src="/walktick.svg" />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <img src="/sleep.svg" />
                    <div className="text-[16px] text mt-1 text-[white]">
                    Sleep at 11 sharp
                    </div>
                  </div>
                  <div>
                    <img src="/sleeptick.svg" />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <img src="/drink.svg" />
                    <div className="text-[16px] text mt-1 text-[white]">
                    Drink 3L water
                    </div>
                  </div>
                  <div>
                    <img src="/drinktick.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="flex justify-between gap-[50px] upper w-full h-[50px] text-[white] bg-[#D15439] mb-[40px] p-2 pt-4 rounded-[38.03px] border-[1px] border-[#fffffff6]">
              <div className="w-8 h-8 rounded-full bg-gray-400 ">
                
              </div>
              <div className="text-xl font-medium ">
                  Swipe to track all
              </div> 
          </div> */}
  <div className="flex justify-between gap-[50px] upper w-full h-[50px] text-[white] bg-[#D15439] mb-[40px] p-2 pt-4 rounded-[38.03px] border-[1px] border-[#fffffff6]">
  <div className="circle flex items-center justify-center bg-white rounded-full w-8 h-8"></div>
  <div className="text-container flex items-center justify-center text-xl font-medium">
    Swipe to track all
  </div>
</div>
        </div>

       
      </div>
    </>
  );
}
