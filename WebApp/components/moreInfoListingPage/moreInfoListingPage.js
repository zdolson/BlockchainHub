import React, { Component } from 'react'

import { Stylesheet } from '../stylesheet.js'
import sheet from './moreInfoListingPage.scss'
// import MoreInfoListingFields from '../moreInfoListingFields/moreInfoListingFields.js'
import MoreInfoListingTop from './moreInfoListingTop/moreInfoListingTop.js'
import MoreInfoListingBottom from './moreInfoListingBottom/moreInfoListingBottom.js'
import MoreInfoListingEditing from './moreInfoListingEditing/moreInfoListingEditing.js'

/**

@ Victoria

@ 3/08/18

Purpose: Reusable component for text withing a ListingContent

TODO: props logic so parent ListingContent can dynamically assign text

**/

class MoreInfoListingPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      is_editing: false
    }
    this.toggle_edit = this.toggle_edit.bind(this);
  }

  toggle_edit = () => {
    this.setState( {is_editing: !this.state.is_editing} );
  }

  render () {
    let item = this.props.item;
    let addCartItem = this.props.addCartItem;
    let removeItem = this.props.removeItem;
    let hasEdit = this.props.hasEdit;
    let neoPrice = this.props.neoPrice;
    let useFirebaseBackend = this.props.useFirebaseBackend;
    let removeMyListing = this.props.removeMyListing;

    const page = this.state.is_editing ? (
      <div>
        <MoreInfoListingEditing toggle_edit={this.toggle_edit} item={item} addCartItem={addCartItem} removeItem={removeItem} hasEdit={hasEdit} useFirebaseBackend={useFirebaseBackend}/>
      </div>
    ) : (
      <div>
        <MoreInfoListingTop toggle_edit={this.toggle_edit} owner={item.owner}/>
        <MoreInfoListingBottom neoPrice={neoPrice} item={item} addCartItem={addCartItem} removeItem={removeItem} useFirebaseBackend={useFirebaseBackend} removeMyListing={removeMyListing}/>
      </div>
    );

    return (
      <div className='moreInfoListingPage'>
        {page}
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default MoreInfoListingPage
