// ref
// you need to add focus on newly created email
import React, {Component} from 'react'
// eslint-disable-next-line no-unused-vars
import {range, isLast} from '../utils'

class Usage extends Component {
  state = {recipientCount: 1}

  addAnother = () => {
    // 1. create another input by incrementing recipientCount
    // 2. use this.setState callback function to set focus
  }

  handleOnClick = fn => e => fn(e)
  render() {
    return (
      <form>
        <fieldset>
          <legend>Email Notifications</legend>
          {/* eslint-disable-next-line no-unused-vars */}
          {range(this.state.recipientCount).map((_, index, arr) => {
            return (
              <p key={index}>
                <label>
                  {/* 
                  <input /> is where ref should live and be added only on the last input
                  element, start by using 'string' ref
                  */}
                  Email: <input />
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
