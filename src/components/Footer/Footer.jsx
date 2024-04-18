import React from "react"
import classes from "./footer.module.css"

function Footer() {
  return (
    <footer id="contacts" className={classes.footer}>
      <div className="container">
        <div className={classes.footerTop}>
          <div className={classes.links}>
            <a className="link" href="">
              Услуги
            </a>
            <a className="link" href="">
              Цены
            </a>
            <a className="link" href="">
              Контакты
            </a>
          </div>
          <div className={classes.news}>
            <div className={classes.title}>
              Хотите быть в курсе всех акций? Подпишитесь на рассылку новостей!
            </div>
            <form action="" className={classes.newsForm} method="post">
              <input
                className={classes.input}
                type="email"
                name=""
                id=""
                placeholder="Введите E-mail"
              />
              <input className={classes.send} type="submit" value="Отправить" />
            </form>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <div className={classes.footerInfo}>
            <div className={classes.item}>
              <a className="link" href="">
                epicentr@list.ru
              </a>
            </div>
            <div className={classes.item}>
              <a className="link" href="">
                8 929-480-75-05
              </a>
            </div>
            <div className={classes.item}>
              <a className="link" href="">
                ул. Смоленская,96
              </a>
            </div>
          </div>
          <div className={classes.media}>
            <div className={classes.label}>Соцсети: </div>
            <div className={classes.links}>
              <a className="link" href="">
                media-icon
              </a>
              <a className="link" href="">
                media-icon
              </a>
              <a className="link" href="">
                media-icon
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
