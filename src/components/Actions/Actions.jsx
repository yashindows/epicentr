import db from "../../firebase"
import React, { useEffect, useState } from "react"
import Tab from "../Tab/Tab"
import classes from "./actions.module.css"
import { collection, onSnapshot } from "firebase/firestore"

function Actions() {
  const [tabs, setTabs] = useState([{ title: "Загрузка...", id: "loading" }])

  useEffect(
    () =>
      onSnapshot(collection(db, "services"), (snapshot) =>
        setTabs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  return (
    <section className={classes.actions}>
      <div className={classes.container}>
        <div className={classes.title}>Основные виды деятельности</div>
        <div className={classes.tabSection}>
          {tabs.map((tab) => (
            <Tab key={tab.id} title={tab.title} text={tab.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Actions
