"use client";

import React, { useState } from "react";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

import {Image} from "@nextui-org/image";


import { FaUserCheck } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUserPen } from "react-icons/fa6";
import { FaBan } from "react-icons/fa";




const typeClients = [
  {
    name: "All Users",
    icon: <FaUserCheck className="text-2xl"/>
  },
  {
    name: "Active",
    icon: <FaUserClock className="text-2xl"/>
  },
  {
    name: "Inactive",
    icon: <FaUserTimes className="text-2xl"/>
  },
  {
    name: "Banned",
    icon: <FaUserAltSlash className="text-2xl"/>
  },
]

const Clients = () => {
  const [currentClients, setCurrentClients] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-[90%] place-self-center mt-5">
      <div className="flex flex-col bggreen-400 place-self-start ">
        <div className="flex">
          {
            typeClients.map((client, index) => (
              <div
                className={`select-none ${index === 0 ? "rounded-tl-md" : index === typeClients.length - 1 ? "rounded-tr-md" : ""} flex flex-col items-center justify-center bgpink-500 w-[75px] h-[80px] cursor-pointer border border-b-0 border-[--color-border] ${currentClients === client.name ? "bg-[--color-background-hover] text-[--color-text-hover]" : ""} text-base `}
                key={client.name}
                onClick={() => setCurrentClients(client.name)}
              >
                {client.icon}
                {client.name}
              </div>
            ))
          }
        </div>
        <div className="w-[300px] bg-purple-400 flex justify-center items-center rounded-md">
          <input type="text" className="w-full outline-none bg-[--color-button] text-[--color-background] p-2 rounded-l-md" />
          <div className="flex p-2 bg-red-600 rounded-r-md ">
            <FaSearch className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex  h-[500px] w-full bg-[--color-] place-self-center rounded-b-md rounded-tr-md border border-[--color-border] overflow-y-auto">
        <div className="flex flex-col p-4 w-full h-full bgred-300">
        <Card
          className='w-full max-w-[400px] p-4 bg-[--color-background] shadow shadow-[--color-shadow]'>
          <CardHeader className='flex gap-[10%]  justify-center  rounded-md P-4'>
            <Image className='rounded-full w-[150px]' src="https://github.com/BPM94/TTMD/raw/main/avatarAang.jpg" alt="" />
            <div className='flex flex-col w-full'>
              <h1>MrMonkaDonk</h1>
              <h1>Seras Victoria Seras Eterna</h1>
              <h2>zambranomnk@gmail.com</h2>
              <h2>+58 412 3456 789</h2>
            </div>
          </CardHeader>
          <CardBody className=''>
            <h3>Subscription: Yoga</h3>
            <h3>Plans: Monthly</h3>
            <h3>Schedules: 3PM-7PM</h3>
          </CardBody>
          <CardFooter className='flex justify-end  bgblue-400 gap-2 text-[--color-text-hover]'>
            <div className='flex  bggreen-400 cursor-pointer bg-[--color-button] hover:bg-[--color-button-hover] p-2 rounded-md'>
              <RiCalendarScheduleFill className="text-lg" />
            </div>
            <div className='flex  bggreen-400 cursor-pointer bg-[--color-button] hover:bg-[--color-button-hover] p-2 rounded-md'>
              <FaUserPen className="text-lg" />
            </div>
            <div className='flex  bggreen-400 cursor-pointer bg-[--color-button] hover:bg-[--color-button-hover] p-2 rounded-md'>
              <FaBan className="text-lg" />
            </div>
          </CardFooter>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default Clients