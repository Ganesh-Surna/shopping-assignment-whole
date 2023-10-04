import { Form, Link, NavLink, useRouteLoaderData, useSubmit } from "react-router-dom";
import Logo from "../assets/logo.svg";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  const submit= useSubmit();
  const token= useRouteLoaderData("root");

  function handleLogout(){
    submit(null,{method:"post", action:"/logout"});
  }

    return (
      <div className={classes.sidebar}>
        <div className={classes["logo-container"]}>
            <img src={Logo}/>
            <h2>React Shop</h2>
        </div>
        
        <section className={classes["fields"]}>
        <span className={classes["dashboard-span"]}>DASHBOARD</span>
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
          {token && <Link onClick={handleLogout}>Logout</Link>}
        </section>
        {token && <Form method="post" action="/logout" className={classes.action}>
            <button className={classes.logout}>Logout</button>
        </Form>}
      </div>
    );
  }