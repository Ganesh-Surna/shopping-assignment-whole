import { Outlet } from "react-router-dom";
import classes from "./MenuLayout.module.css";
import Header from "../Header";

export default function MenuLayout(){
    return<div className={classes.menu}>
            <Header/>
            <Outlet/>
    </div>
}