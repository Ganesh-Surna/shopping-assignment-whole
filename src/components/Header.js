import TogglerIcon from "../icons/toggler-icon";
import classes from "./Header.module.css";

export default function Header(){
    return <header className={classes.header}>
    <TogglerIcon/>
    <nav>
        <ul className={classes.list}>
            <li>
                Cart
            </li>
            <li>
                Msg
            </li>
            <li>
                Notif
            </li>
            <li>
                Image
            </li>
            <li>
                Name
            </li>
        </ul>
    </nav>
</header>
}