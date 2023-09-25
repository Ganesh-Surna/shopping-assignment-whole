import { Outlet } from "react-router-dom";
import Below from "../UI/below-header";
import MainNavigation from "./MainNavigation";

export default function RootLayout(){
 
    return <>
        <MainNavigation/>
        <Below>
            <Outlet/>
        </Below>
    </>
}