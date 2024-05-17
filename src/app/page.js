import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] p-6 h-[100vh]">
        <div className="bg-[#0E77D9] w-full p-4 flex gap-3 items-center mb-[20px] rounded-[16px]">
          <div className="w-[48px] h-[48px] bg-[#7DA7CE] rounded-full flex justify-center items-center">
            <div className="w-[32px] h-[32px] bg-[#fff] rounded-full flex justify-center items-center">
              <div className="w-[20px] h-[20px] bg-[#7DA7CE] rounded-full flex justify-center items-center">
                <div className="w-[12px] h-[12px] bg-[#fff] rounded-full flex justify-center items-center">
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="text-[14px] text-[#fff]">Your daily goal almost done</div>
              <div className="text-[#E1EAF2] text-[12px]">4 of 5 completed</div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="mid w-full h-[475px] bg-[#242424]">
          <div>
            <div className="flex justify-between h-[28px] py-1">
              <div className="text-[17px] text-[white]">Today's Goal</div>
              <div>
                <Image src="/heart.svg" alt="Heart Icon" width={24} height={24} />
              </div>
            </div>

            <div className="h-[365px] gap-[2px] mt-2">
              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <Image src="/work.svg" alt="Work Icon" width={24} height={24} />
                    <div className="text-[16px] text mt-1 text-[white]">
                      Workout for 20 Mins
                    </div>
                  </div>
                  <div>
                    <Image src="/wdonetick.svg" alt="Work Done Icon" width={24} height={24} />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <Image src="/readbook.svg" alt="Read Book Icon" width={24} height={24} />
                    <div className="text-[16px] text mt-1 text-[white]">
                      Read book for 15 mins
                    </div>
                  </div>
                  <div>
                    <Image src="/readbooktick.svg" alt="Read Book Done Icon" width={24} height={24} />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <Image src="/walk.svg" alt="Walk Icon" width={24} height={24} />
                    <div className="text-[16px] text mt-1 text-[white]">
                      30 mins walk
                    </div>
                  </div>
                  <div>
                    <Image src="/walktick.svg" alt="Walk Done Icon" width={24} height={24} />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <Image src="/sleep.svg" alt="Sleep Icon" width={24} height={24} />
                    <div className="text-[16px] text mt-1 text-[white]">
                      Sleep at 11 sharp
                    </div>
                  </div>
                  <div>
                    <Image src="/sleeptick.svg" alt="Sleep Done Icon" width={24} height={24} />
                  </div>
                </div>
              </div>

              <div className="h-[65px] mt-2 p-2 pt-4 rounded-[12px] border-[1px] border-[#fffffff6]">
                <div className="flex justify-between w-full  h-[32px]">
                  <div className="flex justify-between gap-3">
                    <Image src="/drink.svg" alt="Drink Icon" width={24} height={24} />
                    <div className="text-[16px] text mt-1 text-[white]">
                      Drink 3L water
                    </div>
                  </div>
                  <div>
                    <Image src="/drinktick.svg" alt="Drink Done Icon" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-4 w-full h-[50px] text-[white] bg-[#D15439] mb-[40px] rounded-[38.03px] border-[1px] border-[#fffffff6]">
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
