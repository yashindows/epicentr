import React from "react"
import classes from "./special-suggestions.module.css"
import image from "../../assets/Rectangle 6.png"

function SpecialSuggestions() {
  return (
    <>
      <section id="next" className={classes.suggest}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.slider}>
              <div className={classes.title}>
                <button className={classes.control}>
                  <svg
                    className={classes.right}
                    width="17"
                    height="30"
                    viewBox="0 0 17 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585786 13.5858ZM5 13H2L2 17H5V13Z"
                      fill="#5E5E5F"
                    />
                  </svg>
                </button>
                <p>Специальные предложения</p>
                <button className={classes.control}>
                  <svg
                    className={classes.left}
                    width="17"
                    height="30"
                    viewBox="0 0 17 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768158 1.63891 0.0768158 0.857864 0.857864C0.0768158 1.63891 0.0768158 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768158 27.0948 0.0768158 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM12 17H15V13H12V17Z"
                      fill="#5E5E5F"
                    />
                  </svg>
                </button>
              </div>
              <img src={image} alt="" className={classes.img} />
              <div className={classes.text}>
                <div className={classes.saleTitle}>Акции на что</div>
                <div className={classes.description}>Описание акции...</div>
              </div>
              <div className={classes.lines}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpecialSuggestions
