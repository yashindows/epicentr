import React from "react"
import Tab from "../Tab/Tab"
import classes from "./actions.module.css"

function Actions() {
  return (
    <section className={classes.actions}>
      <div className={classes.container}>
        <div className={classes.title}>Основные виды деятельности</div>
        <div className={classes.tabSection}>
          <Tab
            title="Разработка рекламы"
            text="Nam sed euismod libero. Pellentesque egestas fringilla sagittis. Nulla facilisi. Vestibulum eleifend hendrerit ultricies. Aliquam pharetra purus mattis, fermentum nisl quis, volutpat ipsum. Pellentesque ultrices fringilla turpis ac tristique. Proin at tortor magna. Pellentesque convallis, ex et imperdiet tempor, lacus sapien dictum velit, nec mattis ante ligula semper lectus."
          />
          <Tab
            title="Вывески"
            text="Nam sed euismod libero. Pellentesque egestas fringilla sagittis. Nulla facilisi. Vestibulum eleifend hendrerit ultricies. Aliquam pharetra purus mattis, fermentum nisl quis, volutpat ipsum. Pellentesque ultrices fringilla turpis ac tristique. Proin at tortor magna. Pellentesque convallis, ex et imperdiet tempor, lacus sapien dictum velit, nec mattis ante ligula semper lectus."
          />
          <Tab
            title="Все виды рекламных конструкций"
            text="Nam sed euismod libero. Pellentesque egestas fringilla sagittis. Nulla facilisi. Vestibulum eleifend hendrerit ultricies. Aliquam pharetra purus mattis, fermentum nisl quis, volutpat ipsum. Pellentesque ultrices fringilla turpis ac tristique. Proin at tortor magna. Pellentesque convallis, ex et imperdiet tempor, lacus sapien dictum velit, nec mattis ante ligula semper lectus."
          />
        </div>
      </div>
    </section>
  )
}

export default Actions
