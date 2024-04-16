import React, { useState } from "react"
import classes from "./tab.module.css"
function Tab({ title, text }) {
  const [show, setShow] = useState(false)

  function handleShowText(e) {
    if (!show) {
      setShow(true)
      e.target.parentElement.classList.add("active")
      e.target.parentElement.children[1].classList.add("active")
    } else {
      setShow(false)
      e.target.parentElement.classList.remove("active")
      e.target.parentElement.children[1].classList.remove("active")
    }
  }

  return (
    <div className={classes.tab} onClick={handleShowText}>
      <div className={classes.tabTitle}>{title}</div>
      <button className={classes.moreInfo}>
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.95 0V22.5M22.95 45V22.5M22.95 22.5H45H0"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </button>
      {show ? <div className={classes.textHidden}>{text}</div> : null}
    </div>
  )
}

export default Tab
