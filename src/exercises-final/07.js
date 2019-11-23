// string ref
import React, {Component} from 'react'
import {range, isLast} from '../utils'

class Usage extends Component {
  state = {recipientCount: 1}

  addAnother = () => {
    // 1. create another input by incrementing recipientCount
    this.setState(
      state => ({recipientCount: state.recipientCount + 1}),
      // 2. something, something
      () => this.refs.lastInput.focus(),
    )
  }

  handleOnClick = fn => e => fn(e)
  render() {
    return (
      <form>
        <fieldset>
          <legend>Email Notifications</legend>
          {range(this.state.recipientCount).map((_, index, arr) => {
            return (
              <p key={index}>
                <label>
                  {/* 
                  <input /> is where ref should live and be added only on the last input
                  element, start by using 'string' ref
                  */}
                  Email:{' '}
                  <input ref={isLast(arr, index) ? 'lastInput' : undefined} />
                </label>
              </p>
            )
          })}
          <button type="button" onClick={this.handleOnClick(this.addAnother)}>
            Add another
          </button>
        </fieldset>
      </form>
    )
  }
}

export default Usage

Usage.title = 'string ref'
