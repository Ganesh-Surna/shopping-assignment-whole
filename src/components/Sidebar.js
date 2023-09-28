import { Form, Link, NavLink, useRouteLoaderData, useSubmit } from "react-router-dom";
import Logo from "../assets/logo.svg";
import classes from "./Sidebar.module.css";
import { motion } from "framer-motion";

export default function Sidebar() {
  const submit= useSubmit();
  const token= useRouteLoaderData("root");

  function handleLogout(){
    submit(null,{method:"post", action:"/logout"});
  }
  // initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-30, opacity:0}} 
    return (
      <motion.div initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-30, opacity:0}}  className={classes.sidebar}>
        <div className={classes["logo-container"]}>
            <img src={Logo}/>
            <h2>React Shop</h2>
        </div>
        
        <section className={classes["fields"]}>
        <span className={classes["dashboard-span"]}>DASHBOARD</span>
          <NavLink to="/" className={({isActive})=>isActive? classes.active : ""} end >
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/master-design" className={({isActive})=>isActive? classes.active : ""}>
            <span>Mater Design</span>
          </NavLink>
          <NavLink to="/view-designs" className={({isActive})=>isActive? classes.active : ""}>
            <span>View Designs</span>
          </NavLink>
          <NavLink to="/order-form" className={({isActive})=>isActive? classes.active : ""}>
            <span>Order Form</span>
          </NavLink>
          <NavLink to="/customers" className={({isActive})=>isActive? classes.active : ""}>
            <span>Customers</span>
          </NavLink>
          <Link onClick={handleLogout}>Logout</Link>
          {/* {token && <Link onClick={handleLogout}>Logout</Link>} */}
        </section>
        {/* {token && <Form method="post" action="/logout" className={classes.action}>
            <button className={classes.logout}>Logout</button>
        </Form>} */}
      </motion.div>
    );
  }