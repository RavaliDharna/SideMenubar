import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";
import  TechieLogo from './Favicon.png';

export const SidebarData = [

  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <RiIcons.RiDashboardLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Test",
        path: "/Overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Test",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Calender",
    path: "/ Calender",
    icon: <AiIcons.AiOutlineCalendar />,
  },
  {
    title: "File Maneger",
    path: "/File Maneger",
    icon: <GoIcons.GoFileSubmodule />,
  },
  {
    title: "Scrumboard",
    path: "/Scrumboard",
    icon: <GoIcons.GoFileSubmodule />,
  },
  {
    title: "Chat",
    path: "/Chat",
    icon: <BsIcons.BsFillChatLeftDotsFill />,
  },
  {
    title: "Contacts",
    path: "/Contacs",
    icon: <AiIcons.AiOutlineContacts />,
  },
  {
    title: "Todos",
    path: "/Todos",
    icon: <AiIcons.AiOutlineContacts />,
  },
]
  export const  styleUserInterface = [
  {
    title: "Colors",
    path: "/Colors",
    icon: <AiIcons.AiOutlineContacts />,
  },
  {
    title: "Icons",
    path: "/Icons",
    icon: <IoIcons.IoMdColorPalette />,
  },
  {
    title: "Forms",
    path: "/Forms",
    icon: <RiIcons.RiDashboardLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "RegularForms",
        path: "/Overview/users",
        icon: "RA",
      },
      {
        title: "DataPiker",
        path: "/forms/dataPiker",
        icon: "DA",
      },
      {
        title: "ValidationForms",
        path: "/overview/revenue",
        icon: "VA",
      },
      {
        title: "Select",
        path: "/overview/revenue",
        icon: "SE",
      },
      {
        title: "Select Controls",
        path: "/forms/selectControls",
        icon: "SE" ,
      },
    ],
  },
  {
    title: "Editors",
    path: "/Editors",
  },
  {
    title: "Quill Editor",
    path: "/Quill Editors",
    icon: <AiIcons.AiTwotoneCreditCard />,
  },
  {
    title: "Roe Editor",
    path: "/Roe Editors",
    icon: <AiIcons.AiTwotoneCreditCard />,
  },
  {
    title: "For Editor",
    path: "/For Editors",
    icon: <AiIcons.AiTwotoneCreditCard />,
  },
];
