import React from 'react'
import * as Icons from "react-icons/vsc"
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link,iconName}) => {
    const Icon = Icons[iconName];
    const location = useLocation();
    

    const matchRoute = (route) => {
        return matchPath({path :route} , location.pathname);
    }
  return (
    <NavLink to={link.path}
      className={`relative px-8 py-2 text-sm font-medium transition-all duration-200
        ${matchRoute(link.path) ? "bg-yellow-800 text-yellow-50" : "bg-transparent text-richblack-300"}`}>
        <span className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50
            ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}></span>

        <div className='flex items-center gap-2'>
            <Icon className="text-lg"/>
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink