import db from "../../firebase"
import React, { useEffect, useState } from "react"
import classes from "./catalog.module.css"
// import "./catalog.css"
import { collection, onSnapshot } from "firebase/firestore"
import { Link } from "react-router-dom"

function Catalog() {
  const [services, setServices] = useState([])
  const [value, setValue] = useState()

  useEffect(
    () =>
      onSnapshot(collection(db, "services_sell"), (snapshot) =>
        setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  const handleReverce = () => {
    setServices(services.reverse())
    console.log(services)
  }

  const handleSearch = () => {
    setValue(value)
    console.log(value)
  }

  return (
    <section className={classes.catalog}>
      <div className={classes.container}>
        <div className={classes.title}>Каталог услуг</div>
        <div className={classes.filters}>
          <div className={classes.filter}>
            <div>Сортировать по:</div>
            <div className={classes.actions}>
              {/* <button className={classes.time}>
                <svg
                  width="27"
                  height="30"
                  viewBox="0 0 27 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8626 27.6451H24.2802C24.3297 27.2355 24.3297 26.8771 24.3297 26.4676C24.3297 22.8328 21.2637 18.8396 18.544 15.3072C18.4945 15.2048 18.3956 15.1024 18.3462 15C18.3956 14.8976 18.4945 14.7952 18.544 14.6928C21.2637 11.1604 24.3297 7.16724 24.3297 3.53242C24.3297 3.12287 24.3297 2.71331 24.2802 2.35495H25.8626C26.456 2.35495 27 1.843 27 1.17747C27 0.511945 26.5055 0 25.8626 0H1.13736C0.543956 0 0 0.511945 0 1.17747C0 1.843 0.494506 2.35495 1.13736 2.35495H2.71978C2.67033 2.76451 2.67033 3.17406 2.67033 3.53242C2.67033 7.16724 5.73626 11.1604 8.45604 14.6928C8.50549 14.7952 8.6044 14.8976 8.65385 15C8.6044 15.1024 8.50549 15.2048 8.45604 15.3072C5.73626 18.8396 2.67033 22.8328 2.67033 26.4676C2.67033 26.8771 2.67033 27.2867 2.71978 27.6451H1.13736C0.543956 27.6451 0 28.157 0 28.8225C0 29.4881 0.494506 30 1.13736 30H25.8626C26.456 30 27 29.4881 27 28.8225C27 28.157 26.456 27.6451 25.8626 27.6451ZM4.8956 26.4676C4.8956 23.6519 7.86264 19.8123 10.2363 16.7406C10.4835 16.3823 10.7802 16.0751 11.0275 15.7167C11.3242 15.3072 11.3242 14.6928 11.0275 14.2833C10.7802 13.9761 10.533 13.6177 10.2363 13.2594C7.86264 10.1877 4.8956 6.34812 4.8956 3.53242C4.8956 3.12287 4.8956 2.71331 4.94506 2.35495H22.0549C22.1044 2.76451 22.1044 3.17406 22.1044 3.53242C22.1044 6.34812 19.1374 10.1877 16.7637 13.2594C16.5165 13.6177 16.2198 13.9249 15.9725 14.2833C15.6758 14.6928 15.6758 15.3072 15.9725 15.7167C16.2198 16.0239 16.467 16.3823 16.7637 16.7406C19.1374 19.8123 22.1044 23.6519 22.1044 26.4676C22.1044 26.8771 22.1044 27.2867 22.0549 27.6451H4.94506C4.8956 27.2355 4.8956 26.8771 4.8956 26.4676Z"
                    fill="#5E5E5F"
                  />
                </svg>
              </button> */}
              <button onClick={handleReverce} className={classes.order}>
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 28C8.75 28.6904 9.30964 29.25 10 29.25C10.6904 29.25 11.25 28.6904 11.25 28L8.75 28ZM10.8839 1.11612C10.3957 0.627962 9.60427 0.627962 9.11612 1.11612L1.16117 9.07107C0.673011 9.55922 0.673011 10.3507 1.16117 10.8388C1.64932 11.327 2.44078 11.327 2.92893 10.8388L10 3.76777L17.0711 10.8388C17.5592 11.327 18.3507 11.327 18.8388 10.8388C19.327 10.3507 19.327 9.55922 18.8388 9.07107L10.8839 1.11612ZM11.25 28L11.25 2L8.75 2L8.75 28L11.25 28Z"
                    fill="#5E5E5F"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={classes.filter}>
            <input
              onChange={handleSearch}
              value={value}
              type="text"
              placeholder="Поиск услуги"
            />
            <button className={classes.search}>
              <svg
                width="47"
                height="43"
                viewBox="0 0 47 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.3527 39.8953L33.5363 29.4946C38.8182 22.2762 38.2745 11.9531 31.6721 5.43321C28.1767 1.94043 23.5162 0 18.545 0C13.5737 0 8.91323 1.94043 5.41785 5.43321C-1.80595 12.6516 -1.80595 24.4495 5.41785 31.6679C8.91323 35.1606 13.5737 37.1011 18.545 37.1011C23.2832 37.1011 27.7106 35.3159 31.206 32.1336L44.1778 42.6119C44.4885 42.8448 44.8769 43 45.2653 43C45.809 43 46.275 42.7672 46.5857 42.3791C47.2071 41.6029 47.1295 40.5162 46.3527 39.8953ZM18.545 33.6083C14.5059 33.6083 10.7774 32.056 7.90346 29.1841C2.00014 23.2852 2.00014 13.7383 7.90346 7.91697C10.7774 5.04513 14.5059 3.49278 18.545 3.49278C22.5841 3.49278 26.3125 5.04513 29.1865 7.91697C35.0898 13.8159 35.0898 23.3628 29.1865 29.1841C26.3902 32.056 22.5841 33.6083 18.545 33.6083Z"
                  fill="#5E5E5F"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={classes.services}>
          {services.map((service) => (
            <div key={service.id} className={classes.card}>
              <div className={classes.title}>{service.title}</div>
              <img src={"/" + service.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
