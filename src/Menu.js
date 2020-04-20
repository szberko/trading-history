import React from "react";
import Main from "./Main";
import Dashboard from "./Dashboard";
import InboxIcon from '@material-ui/icons/MoveToInbox';

const Menu = [
  {
    label: "Home",
    pathname: "/",
    component: Main,
    icon: <InboxIcon/>
  },
  {
    label: "Dashboard",
    pathname: "/dashboard",
    component: Dashboard,
    icon: <InboxIcon/>
  },
];

export default Menu;