import React, { Component } from 'react'

// Imports for the individual page components
import ListingsPage from '../listingsPage/listingsPage.js'
import MakePost from '../makePost/makePost.js';
import WalletPage from '../walletPage/walletPage.js';
import TrashPage from '../trashPage/trashPage.js';
import ForumsPage from '../forumsPage/forumsPage.js';
import PromosPage from '../promosPage/promosPage.js';
import PurchasesPage from '../purchasesPage/purchasesPage.js';
import PeoplePage from '../peoplePage/peoplePage.js';
import CheckOutPage from '../checkOutPage/checkOutPage.js';
import MoreInfoListingPage from '../moreInfoListingPage/moreInfoListingPage.js';
import MyProfilePage from '../myProfilePage/myProfilePage.js';

// Import for react-router package.
import { Switch, Route, hashHistory } from 'react-router-dom'

class RoutingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    var state = this.props.state;
    var resetSearch = this.props.resetSearch;
    var search = this.props.search;
    var items = state.items;
    var cartItems = state.cartItems;
    var addCartItem = this.props.addCartItem;
    var removeCartItem = this.props.removeCartItem;
    var returnCheckOutDataByID = this.props.returnCheckOutDataByID;
    var sumTotalCartItems = this.props.sumTotalCartItems;
    var addItem = this.props.addItem;
    var removeItem = this.props.removeItem;
    var hasEdit = this.props.hasEdit;
    var users = state.users;
    var neoPrice = this.props.neoPrice;
    var useFirebaseBackend = this.props.useFirebaseBackend;
    var addMyListing = this.props.addMyListing;
    var removeMyListing = this.props.removeMyListing;
    var resetCartItemState = this.props.resetCartItemState;
    var returnNonPurchasedItems = this.props.returnNonPurchasedItems;
    var addToMyPurchases = this.props.addToMyPurchases;
    var removeItemFromNonPurchasedList = this.props.removeItemFromNonPurchasedList;

    return (
      <main>
        <Switch>
          <Route exact path="/" render={ () => <ListingsPage state={state} resetSearch={resetSearch} search={search} returnNonPurchasedItems={returnNonPurchasedItems} /> } />
          <Route path="/Listings" render={ () => <ListingsPage state={state} resetSearch={resetSearch} search={search} returnNonPurchasedItems={returnNonPurchasedItems}/> } />
          <Route path="/Post"  render={ () => <MakePost addItem={addItem} removeItem={removeItem} useFirebaseBackend={useFirebaseBackend} addMyListing={addMyListing}/> } />
          <Route path="/Profile" render={ () => <MyProfilePage state={state} returnCheckOutDataByID={returnCheckOutDataByID}/> } />
          <Route path="/Forums" component={ForumsPage} />
          <Route path="/Wallet" component={WalletPage} />
          <Route path="/Trash" component={TrashPage} />
          <Route path="/Promos" component={PromosPage} />
          <Route path="/Purchases" component={PurchasesPage} />
          <Route path="/People" component={PeoplePage} />
          <Route path="/CheckOut" render={ () => <CheckOutPage users={users} cartItems={cartItems} removeCartItem={removeCartItem} sumTotalCartItems={sumTotalCartItems} returnCheckOutDataByID={returnCheckOutDataByID} useFirebaseBackend={useFirebaseBackend} removeItem={removeItem} addToMyPurchases={addToMyPurchases} removeItemFromNonPurchasedList={removeItemFromNonPurchasedList} resetCartItemState={resetCartItemState}/> }/>
          {items.map( (item, key) => {
            var path="/MoreInfoItem/"+item.id;
            return (
              <Route path={path} key={key} render={ () => <MoreInfoListingPage neoPrice={neoPrice} item={items[key]} addCartItem={addCartItem} removeItem={removeItem} hasEdit={hasEdit} useFirebaseBackend={useFirebaseBackend} removeMyListing={removeMyListing}/> } />
            )
          })}
      	</Switch>
      </main>
    )
  }
}

export default RoutingComponent
