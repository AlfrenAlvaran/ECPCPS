import { LuLayoutDashboard } from "react-icons/lu";
import { MdEventNote, MdOutlineReport } from "react-icons/md";


export const menu = [
  {
    id: "1",
    name: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "2",
    name: "Events",
    icon: MdEventNote,
    path: "/events",
  },
  { 
    id: "3",
    name: "Reports",
    icon: MdOutlineReport,
    path: "/reports",
  }
];
