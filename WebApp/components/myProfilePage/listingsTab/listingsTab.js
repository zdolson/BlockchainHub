import {Component} from 'react'
import {Stylesheet} from '../../stylesheet.js'
import sheet from './listingsTab.scss'

import Listing from '../../listingsPage/listing/listing.js'

import { Link } from "react-router-dom";

class ListingsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    var items = this.props.state.items;
    var cartItems = this.props.state.cartItems;
    var tryAgain = this.props.tryAgain;
    var listings = this.props.state.listings;
    var returnCheckOutDataByID = this.props.returnCheckOutDataByID;
    var listingsList = []

    for(var i = 0; i < listings.length; i++) {
      // console.log(listings)
      var currListing = returnCheckOutDataByID(listings[i])
      // console.log(currListing)
      listingsList.push(currListing)
    }
    // console.log(listingsList)
    // console.log(items)
    return (
      <div className='listings'>
        {items.map( (item, key) => {
          var link = '/MoreInfoItem/'+item.id;
          // console.log(link)
          // console.log(item.id)
          // console.log(item)
          // console.log(key)
          return (
            <Link to={link} key={key} className="navLink">  <Listing item={item} tryAgain={tryAgain}/> </Link>
          )
        })}

        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default ListingsTab;
