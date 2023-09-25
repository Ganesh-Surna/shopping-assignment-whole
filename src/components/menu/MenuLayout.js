import { Outlet } from "react-router-dom";
import Field from "../../UI/field-container";
import Sidebar from "../Sidebar";

export default function MenuLayout(){
    return <>
        <Sidebar/>
        <Field>
            <Outlet/>
        </Field>
    </>
}