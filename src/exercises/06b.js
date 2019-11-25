// Controled Components medium
// Fix uncontroled component <Toggle />

import React from 'react'
import {Switch} from '../switch'

function Usage() {
  const [state, setState] = React.useState(false)

  return (
    <div>
      <h3>Controled</h3>
      <Toggle value={state} onChange={setState} />
      <h3>UnControled</h3>
      <Toggle /> {/* ← this one doesent work */} 
    </div>
  )
}

function Toggle({value, onChange}) {
  const {on, toggle} = useToggle({value, onChange})
  return <Switch on={on} onClick={toggle} />
}

function useToggle({onChange=() => {}, value} = {}) {
  // 1. detect component is controled with `isControled` predicate
  // 2. make internal state for useToggle
  // 3. based on isControled, update eather internal state or call onChange()
  // - you can call branching function `superDispatch`, which is a fn, that will call
  // eather onChange or your internal setState function

  return {on: value, toggle: () => onChange(!value)}
}

export default Usage
