import { useRef, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"

function Test() {
  const [state, setState] = useState(false)
  const helloRef = useRef(null)
  const goodbyeRef = useRef(null)
  const nodeRef = state ? goodbyeRef : helloRef
  return (
    <SwitchTransition>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        nodeRef={nodeRef}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="fade"
      >
        <button ref={nodeRef} onClick={() => setState((state) => !state)}>
          {state ? "Goodbye, world!" : "Hello, world!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default Test
