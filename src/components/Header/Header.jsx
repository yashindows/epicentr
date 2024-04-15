import React from "react"
import classes from "./header.module.css"
import logo from "/logo.svg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.row}>
            <nav className={classes.navbar}>
              <Link to="/" className={classes.btn}>
                <img src={logo} alt="Логотип" />
              </Link>
              <ul className={classes.menu}>
                <li className={classes.link}>
                  <Link to="/services">Услуги</Link>
                </li>
                <li className={classes.link}>
                  <Link to="/prices">Цены</Link>
                </li>
                <li className={classes.link}>
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className={classes.info}>
              <div className={classes.item}>
                <a href="tel:+79294807505">+7 (929) 480-75-05</a>
              </div>
              <div className={classes.item}>ул. Смоленская,96</div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
