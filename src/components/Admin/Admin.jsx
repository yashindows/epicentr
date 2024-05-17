import "./admin.css"
import db from "../../firebase"
import { collection, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Admin() {
  const [services, setServices] = useState()

  useEffect(
    () =>
      onSnapshot(collection(db, "services_sell"), (snapshot) =>
        setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  return (
    <>
      <section className="admin">
        <div className="container">
          <div className="dashboard">
            <button className="tab btn">Цены</button>
          </div>
          <div className="content">
            {services
              ? services.map((el) => (
                  <div key={el.id} className="admin-card">
                    <img src={el.image} alt="" />
                    {el.title}
                    <Link to={"/edit/" + el.id}>Редактировать</Link>
                    <Link to={"/delete/" + el.id}>Удалить</Link>
                  </div>
                ))
              : null}
            <button className="btn">Добавить услугу</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admin
