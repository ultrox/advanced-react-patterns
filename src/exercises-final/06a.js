import React from 'react'
import {Switch} from '../switch'

function Usage() {
  const [bothOn, setBothOn] = React.useState(false)

  return <Toggle value={bothOn} onChange={setBothOn} />
}

function Toggle({value, onChange}) {
  const {on, toggle} = useToggle({value, onChange})
  return <Switch on={on} onClick={toggle} />
}

function useToggle({onChange, value} = {}) {
  return {on: value, toggle: () => onChange(!value)}
}

Usage.title = 'Contoled Props - simple'

export default Usage
