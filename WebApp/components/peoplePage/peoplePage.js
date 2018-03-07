import React, { Component } from 'react'
import {Stylesheet} from '../stylesheet.js'
import sheet from './peoplePage.scss'

export class peoplePage extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // stuff goes here
    }
  }

  componentDidMount () {
    console.debug('peoplePage Loaded');
  }

  render () {
    const { data } = this.props
    console.debug('Data is ', data)
    return (
      <div>
        <h3> peoplePage </h3>
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default peoplePage