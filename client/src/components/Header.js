import React from "react";
import classes from "./Header.module.css";
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <div className={classes["header-holder"]}>
        <Link to='/sign-up'>
          <h1>
            <span>Half</span>
            <span>Name</span>
          </h1>
        </Link>
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
      </div>
    </header>
  );
}
