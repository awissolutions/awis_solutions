import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Bookkeeping",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Accounting",
        path: "services/accounting",
        newTab: false,
      },
      {
        id: 63,
        title: "Payroll",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "software integration",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "tax return",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "backlog clerance",
        path: "/signin",
        newTab: false,
      },
      // {
      //   id: 68,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
