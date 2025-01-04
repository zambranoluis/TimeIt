"use client";

import { Image } from "@nextui-org/image";
import { RiCalendarScheduleFill } from "react-icons/ri";
import {Tooltip} from "@nextui-org/tooltip";
import { TbLocationPin } from "react-icons/tb";


function Page() {
  return (
  <main className="flex flex-col">
    <section className=" bg-center bg-cover bg-no-repeat flex flex-col py-6" >
      <div className="flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center py-2 gap2  text-[--color-text2]">
          <div className="flex bg-[--color-background2] p-2 rounded-sm">
            <h1 className="font-bold min-[450px]:text-2xl ">The Fit Club: <span className="font-light">Personal Training</span></h1>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 w-full max-w-[500px]">
          <div className="flex flex-col p-2 gap-2">
            <div className="flex">
              <h2 className="bg-[--color-background2] p-2 rounded-sm text-[--color-text2]">Locations: </h2>
            </div>
            <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
              <p className="">Calle 1 # 2 - 3</p>
            </div>
            <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
              <p className="">Calle 2 # 3 - 4</p>
            </div>
            
          </div>
          <div className="flex bgred-300 justify-end">
            <Tooltip content="Edit Locations">
              <div className="flex p-2 bg-[--color-background2] text-[--color-text2] rounded-xl cursor-pointer hover:drop-shadow-[0_1.2px_1.2px_var(--color-text)] drop-shadow-[0_1px_1px_var(--color-background2)]">
                <TbLocationPin className="text-3xl bgpink-500" />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 w-full max-w-[500px]">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <h2 className="bg-[--color-background2] p-2 rounded-sm text-[--color-text2]">Schedules: </h2>
            </div>
            <div className="flex flex-col gap-1 border border-[--color-border] p-2 rounded-md">
              <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
                <p className="">Mon - Fri</p>
              </div>
              <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
                <p className="">6:00 AM - 9:00 AM</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 border border-[--color-border] p-2 rounded-md">
              <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
                <p className="">Mon - Fri</p>
              </div>
              <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
                <p className="">6:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
          <div className="flex bgred-300 justify-end">
            <Tooltip content="Edit Schedules">
              <div className="flex p-2 bg-[--color-background2] text-[--color-text2] rounded-xl cursor-pointer hover:drop-shadow-[0_1.2px_1.2px_var(--color-text)] drop-shadow-[0_1px_1px_var(--color-background2)]">
                <RiCalendarScheduleFill className="text-3xl bgpink-500" />
              </div>
            </Tooltip>
          </div>

          

        </div>
      </div>
    </section>

    <section className="flex w-full bggreen-300">
    </section>
  </main>
  );
}
export default Page;