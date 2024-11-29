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


const clientsTest = [
  {
    id: 0,
    name: "John Doe",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },
  {
    id: 1,
    name: "Capi Tanazo",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },
  {
    id: 2,
    name: "Cabiz Bajo",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },
  {
    id: 3,
    name: "Elza Pato",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },
  {
    id: 4,
    name: "Cabe Zota",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },
  {
    id: 5,
    name: "Pedro Perez",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },
  {
    id: 6,
    name: "Pacha Mama",
    email: "y7h5y@example.com",
    phone: "+58 412 3456 789",
    avatar: "https://github.com/BPM94/TTMD/raw/main/AvatarTimeit.webp",
    status: "Active",
    lastLogin: "2023-06-01T12:34:56Z",
    role: "User",
    suscription: "Personal Trainning",
    plan: "Monthly",
    schedules: "Mon-Fri 3pm-5pm"
  },

]

const Clients = () => {
  const [currentClients, setCurrentClients] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-[90%] place-self-center mt-5 gap-4">
      <div className="flex flex-col bggreen-400 place-self-start w-[320px] ">
        <div className="flex w-full">
          {
            typeClients.map((client, index) => (
              <div className={`select-none ${index === 0 ? "rounded-tl-md border-r-0" : index === typeClients.length - 1 ? "rounded-tr-md" : ""} ${index === typeClients.length - 1 ? "border-r" : ""} flex flex-col items-center justify-center bgpink-500 w-full h-[80px] cursor-pointer border-t border-l border-b-0 border-[--color-border] ${currentClients === client.name ? "bg-[--color-background-hover] text-[--color-text-hover]" : ""} text-base `}
                key={client.name}
                onClick={() => setCurrentClients(client.name)}
              >
                {client.icon}
                {client.name}
              </div>
            ))
          }
        </div>
        

        <div className="w-full h-[50px] bgpurple-400 flex justify-center p-2 items-center rounded-b-md border-[--color-border] border bgblue-400">
          <div tabIndex={0} className="flex h-full w-full rounded-lg border-2 border-[--color-border]">
            <input type="text" className="w-full  bg[--color-button]  text-[--color-text] p-1 outline-none rounded-l-md" />
            <div className="flex h-full w-[40px] justify-center border-l border-l-[--color-border] items-center bgred-600 hover:bg-red-500 rounded-r-md cursor-pointer hover:outline-2 hover:outline-red-500">
              <FaSearch className="text-2xl " />
            </div>
          </div>
        </div>


      </div>
      <div className="flex  max-h-[500px] w-full bgblue-400 place-self-center rounded-md border border-[--color-border] overflow-y-auto p-2">
        <div className="grid place-content-center place-items-center md:grid-cols-2 xl:grid-cols-3  p-2 gap-6 w-full h-full bgred-300">
          {
            clientsTest.map((client) => (
              <Card className='w-full max-w-[350px] h-[320px] p-4 bg-[--color-background] shadow shadow-[--color-shadow]' key={client.id}>
                <CardHeader className='flex gap-4  justify-center  rounded-md p-4 bgred-300'>
                  <Image className='rounded-full w-[120px]' src="https://github.com/BPM94/TTMD/raw/main/avatarAang.jpg" alt="" />
                  <div className='flex flex-col w-full'>
                    <h1>{client.name}</h1>
                    <h2>{client.email}</h2>
                    <h2>{client.phone}</h2>
                  </div>
                </CardHeader>
                <CardBody className=''>
                  <h3>Subscription: {client.suscription}</h3>
                  <h3>Plans: {client.plan}</h3>
                  <h3>Schedules: {client.schedules}</h3>
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
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Clients