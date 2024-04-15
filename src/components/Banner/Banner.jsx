import React from "react"
import classes from "./banner.module.css"

function Banner() {
  return (
    <>
      <section className={classes.banner}>
        <div className="container">
          <div className={classes.info}>
            <div className={classes.title}>
              Рекламно-производственная компания “Эпицентр”
            </div>
            <ul className={classes.actions}>
              <li className={classes.item}>Занимаемся разработкой рекламы</li>
              <li className={classes.item}>
                Установка всех видов рекламных конструкций
              </li>
              <li className={classes.item}>Реклама на мониторах</li>
            </ul>
            <a href="#services" className={classes.btn}>
              Подробнее
            </a>
          </div>
          <a className={classes.next} href="#next">
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 12.951C11.5251 13.5368 12.4749 13.5368 13.0607 12.951L22.6066 3.40506C23.1924 2.81927 23.1924 1.86952 22.6066 1.28374C22.0208 0.697951 21.0711 0.697951 20.4853 1.28374L12 9.76902L3.51472 1.28374C2.92893 0.697951 1.97919 0.697951 1.3934 1.28374C0.807611 1.86952 0.807611 2.81927 1.3934 3.40506L10.9393 12.951ZM10.5 10.8477V11.8903H13.5V10.8477H10.5Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

export default Banner
