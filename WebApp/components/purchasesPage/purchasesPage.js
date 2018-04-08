import React, { Component } from 'react'
import {Stylesheet} from '../stylesheet.js'
import sheet from './purchasesPage.scss'

export class purchasesPage extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // stuff goes here
    }
  }

  render () {
    const { data } = this.props
    console.debug('Data is ', data)
    return (
      <div>
        <h3> purchasesPage </h3>
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default purchasesPage
