import classes from "./FieldContainer.module.css";

export default function Field({children}){
    return <div className={classes["field-container"]}>{children}</div>
}