"use client";

import { Image } from "@nextui-org/image";
import { RiCalendarScheduleFill } from "react-icons/ri";
import {Tooltip} from "@nextui-org/tooltip";
import { TbLocationPin } from "react-icons/tb";

import {RangeCalendar} from "@nextui-org/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";


function Page() {
  return (
  <main className="flex flex-col">
    <section className=" bg-center bg-cover bg-no-repeat flex flex-col  " style={{ backgroundImage: "url(/subsBg.jp)" }}>
      <div className="flex flex-col bg-black/30 justify-center items-center ">
        <div className="flex justify-center items-center py-2 gap2  text-[--color-text2]">
          <div className="flex bg-[--color-background2] p-2 rounded-sm">
            <h1 className="font-bold min-[450px]:text-2xl ">The Fit Club: <span className="font-light">Personal Training</span></h1>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 w-full max-w-[500px]">
          <div className="flex">
            <h2 className="bg-[--color-background2] p-2 rounded-sm text-[--color-text2]">Location: </h2>
          </div>
          <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
            <p className="">Calle 1 # 2 - 3</p>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 w-full max-w-[500px]">
          <div className="flex">
            <h2 className="bg-[--color-background2] p-2 rounded-sm text-[--color-text2]">Schedule: </h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
              <p className="">Mon - Fri</p>
            </div>
            <div className="flex bg-[--color-background3] p-2 rounded-sm text-[--color-text3]">
              <p className="">6:00 AM - 9:00 AM</p>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col p-4 gap-4 w-full max-w-[500px] bgred-400">
          <div className="flex ">
            <h2 className="bg-[--color-background2] p-2 rounded-sm text-[--color-text2]">Available Time: </h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex bgred-300 justify-center items-start bgred-200 h-[350px]">
                <RangeCalendar
                  className="drop-shadow-[0_1px_2px_var(--color-shadow)] "
                  isReadOnly
                  visibleMonths={2}
                  defaultValue={{
                    start: today(getLocalTimeZone()),
                    end: today(getLocalTimeZone()).add({months: 2}),
                  }}
                />
              </div>
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