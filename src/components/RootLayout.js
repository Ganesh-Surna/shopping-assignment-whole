import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";
import Sidebar from "./Sidebar";

export default function RootLayout(){
 
    return <div className={classes.root}>
            <Sidebar/>
            <Outlet/>
    </div>
}