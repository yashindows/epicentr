import React from "react"
import classes from "./header.module.css"
import logo from "/logo.svg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <nav className={classes.navbar}>
            <Link to="/" className={classes.btn}>
              <img src={logo} alt="Логотип" />
            </Link>
            <ul className={classes.menu}>
              <li>
                <Link className="link" to="/services">
                  Услуги
                </Link>
              </li>
              <li>
                <Link className="link" to="/prices">
                  Цены
                </Link>
              </li>
              <li>
                <Link className="link" to="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className={classes.info}>
            <div className={classes.item}>
              <a className="link" href="tel:+79294807505">
                +7 (929) 480-75-05
              </a>
            </div>
            <div className={classes.item}>
              <a href="" className="link">
                ул. Смоленская,96
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
