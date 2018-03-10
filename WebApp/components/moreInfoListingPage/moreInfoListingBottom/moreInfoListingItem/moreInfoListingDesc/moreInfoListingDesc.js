import React, { Component } from 'react'
import { Stylesheet } from '../../../../stylesheet.js'
import sheet from './moreInfoListingDesc.scss'

/**

@ Alec

@ 3/09/18

Purpose: description of moreInfoPage item

**/

class MoreInfoListingDesc extends Component {
  constructor(props, context) {
    super(props, context)
    this.State = {

    }
  }

  render () {
    return (
      <div className='moreInfoListingDesc'>
        description description description description description description
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default MoreInfoListingDesc
