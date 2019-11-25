import React from 'react'
import {Switch} from '../switch'

function Usage() {
  // 🐨 we need this: const [state, setState] = useState(false)
  /****************************************************************************
  🐨 Start with figuring out the api for <Toggle />
  🐨 for <input /> to be 'controlled' it needs min 2 props: 'value', 'onChange'
     defaultValue, which is optional

  you need to drive this <Toggle /> with state & setState
  ****************************************************************************/
  return <Toggle />
}

function Toggle() {
  // 🐨 figure out what you get from Toggle and what needs to be send to
  // useToggle
  const {on, toggle} = useToggle('???')
  return <Switch on={on} onClick={toggle} />
}

function useToggle() {
  /****************************************************************************
  Major logic is here: you need to call your callback fn you setup in Toggle with
  'suggested changes', that controling component(Usage) needs to keep in their
  'state'. 
  This means, already calculated state needs to be returned, but not
  its own implicite state.

  ****************************************************************************/
  return {on: '', toggle: () => {}} // you need to set on & toggle
}

export default Usage
