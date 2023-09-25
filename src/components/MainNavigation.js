import { NavLink, Form, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Logo from "../assets/logo.svg";
import { useState } from "react";

export default function MainNavigation(){
    const submit=useSubmit();
    const token= useRouteLoaderData("root");

    const [showUser,setShowUser]= useState(false);
    const [isOpen, setIsOpen]= useState(false);

    function handleShowUser(){
        setShowUser((prevState)=>!prevState);
    }

    function toggleNavbar(){
        setIsOpen((prevState)=>!prevState);
    }

    function handleLogout(){
        handleShowUser();
        submit(null,{method:"post", action:"/logout"});
    }

    return <header className={classes.header} style={token && {paddingRight:"1rem"}}>
        <div className={classes["logo-container"]}>
            <img src={Logo}/>
            <h1>React Shopping</h1>
        </div>
        <nav>
            <div className={classes.bars} onClick={toggleNavbar}>
                {!isOpen && <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="black"
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>}
                {isOpen && <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>}
            </div>
            {isOpen && <ul className={classes.list2}>
                <li onClick={toggleNavbar}>
                    <NavLink to="/" className={({isActive})=>isActive? classes.active : ""} end>
                        Home
                    </NavLink>
                </li>
                <li onClick={toggleNavbar}>
                    <NavLink to="/menu" className={({isActive})=>isActive? classes.active : ""}>
                        Menu
                    </NavLink>
                </li>
                {!token && <li onClick={toggleNavbar}>
                    <NavLink to="/auth?mode=login" className={({isActive})=>isActive? classes.active : ""}>
                        Register
                    </NavLink>
                </li>}
            </ul>}
            <ul className={classes.list}>
                <li>
                    <NavLink to="/" className={({isActive})=>isActive? classes.active : ""} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({isActive})=>isActive? classes.active : ""}>
                        Menu
                    </NavLink>
                </li>
                {!token && <li>
                    <NavLink to="/auth?mode=login" className={({isActive})=>isActive? classes.active : ""}>
                        Register
                    </NavLink>
                </li>}
            </ul>
            {token && <div className={classes.user}>
                <div className={classes.icon} onClick={handleShowUser}>SG</div>
                    {showUser && <div className={classes.options}>
                        <div className={classes.back}>Surna</div>
                        <div className={classes["icon-2"]}>SG</div>
                        <button className={classes.logout}  onClick={handleLogout}>Logout</button>
                </div>}
            </div>}
        </nav>
    </header>
}