import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'All_Courses',
    path: '/all_courses',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'All_Courses',
    //     path: '/courses/all_courses',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'My_Courses',
    //     path: '/courses/my_courses',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
//   {
//     title: 'Reports',
//     path: '/reports',
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Reports',
//         path: '/reports/reports1',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 2',
//         path: '/reports/reports2',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 3',
//         path: '/reports/reports3',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />
//   },
  {
    title: 'My_Courses',
    path: '/my_courses',
    icon: <IoIcons.IoMdPeople />
  },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
  {
    title: 'Settings',
    path: '/setting',
    icon: <IoIcons.IoMdHelpCircle />
  },

  {
    title: 'Logout',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />
    

    
  }
];
