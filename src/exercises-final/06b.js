// Controled Components medium

import React from 'react'
import {Switch} from '../switch'

function Usage() {
  const [state, setState] = React.useState(false)
  return (
    <div>
      <h3>Controled</h3>
      <Toggle value={state} onChange={setState} />
      <h3>UnControled</h3>
      <Toggle />
    </div>
  )
}

function Toggle({value, onChange}) {
  const {on, toggle} = useToggle({value, onChange})
  return <Switch on={on} onClick={toggle} />
}

function useToggle({onChange = () => {}, value: controledValue} = {}) {
  const [toggleState, setToggleState] = React.useState(false)
  const {current: isControled} = React.useRef(
    typeof controledValue === 'boolean',
  )

  const value = isControled ? controledValue : toggleState

  const superDispatch = _ => {
    /* 'suggesting changes' !value, passed(onChange) 
     so Usage can put it inside its own state */

    isControled ? onChange(!value) : setToggleState(!value)
  }

  return {on: value, toggle: superDispatch}
}

Usage.title = 'Contoled Props - eather/or'

export default Usage
