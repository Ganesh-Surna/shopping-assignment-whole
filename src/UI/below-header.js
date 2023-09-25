import classes from "./BelowHeader.module.css";

export default function Below({children}){
    return <div className={classes.below}>{children}</div>
}