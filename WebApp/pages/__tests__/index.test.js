// import React from 'react'
const React = require('react')
// import {shallow} from 'enzyme'
const {shallow} = require('enzyme')
import Index from '../index.js'
// const Index = require('../index.js')
// import {HashRouter} from 'react-router-dom'
const {HashRouter} = require('react-router-dom')
// import * as firebase from "firebase"
const firebase = require('firebase')

/*

@ Author: Alec Felt

@ Date: 4/22/18

Purpose: Define exactly what Index's responsibilites are,
        Test these responsibilites

*/

describe("Index component", () => {
  it("renders one child", () => {
    let wrapper = shallow(<Index/>);

    let expected = 1;
    let actual = wrapper.length;

    expect(actual).toEqual(expected)
  });

  it("renders a HashRouter or Register child", () => {
    let wrapper = shallow(<Index/>);

    let expected = 1;
    let actual = wrapper.find("HashRouter").length + wrapper.find("LoginRegister").length;

    expect(expected).toEqual(actual);
  });

  it("configures Firebase to our app", () => {
    let wrapper = shallow(<Index/>);

    let expected = "neo-market-8a303";
    let actual = firebase.app().options_.projectId;

    expect(actual).toEqual(actual);
  });
});
