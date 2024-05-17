import React, { useEffect, useState } from "react"
import "./service.css"
import db from "../../firebase"
import { collection, onSnapshot } from "firebase/firestore"

function Service() {
  const [services, setServices] = useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, "services_sell"), (snapshot) =>
        setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  return (
    <section className="service">
      <div className="container">
        {/* {services.map((service) => console.log(service.id))} */}
        <div className="service-title">Изготовление вывесок</div>
        <img src="/1.webp" alt="" />
        <div className="info">
          <div className="description">
            С точки зрения наружной рекламы, вывеска — рекламный носитель,
            который размещается в непосредственной близости от объекта:
            магазина, салона, организации по оказанию различных услуг. С точки
            зрения закона, это элемент оформления фасада, который носит
            информационную цель: на нём написан юридический адрес организации,
            часы работы, род деятельности предприятия.
          </div>
          <div className="price">
            <span>Цена: </span>
            до 43000 р.
          </div>
          <div className="times">
            <span>Сроки выполнения: </span>
            3-7 дней.
          </div>
        </div>
        <button className="btn">Оформить заявку</button>
      </div>
    </section>
  )
}

export default Service
