import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./Sidebar.module.css";

export default function Sidebar() {
  const token= useRouteLoaderData("root");

    return (
      <div className={classes.sidebar}>
        <section className={classes["fields"]}>
          <NavLink to="/menu" className={({isActive})=>isActive? classes.active : ""} end >
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/menu/master-design" className={({isActive})=>isActive? classes.active : ""}>
            <span>Mater Design</span>
          </NavLink>
          <NavLink to="/menu/view-designs" className={({isActive})=>isActive? classes.active : ""}>
            <span>View Designs</span>
          </NavLink>
          <NavLink to="/menu/order-form" className={({isActive})=>isActive? classes.active : ""}>
            <span>Order Form</span>
          </NavLink>
          <NavLink to="/menu/customers" className={({isActive})=>isActive? classes.active : ""}>
            <span>Customers</span>
          </NavLink>
        </section>
        {token && <Form method="post" action="/logout" className={classes.action}>
            <button className={classes.logout}>Logout</button>
        </Form>}
      </div>
    );
  }