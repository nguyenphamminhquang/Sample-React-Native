import React, { Component } from 'react';
import BaseTextView from './BaseTextView.js';
import BaseEditText from './BaseEditText.js';

import {
    View
  } from 'react-native';
  
  export class BaseComponent extends Component {
  
    render() {
      return (
        <View>
        if(this.props.item.type == "textview") return (<BaseTextView data = {this.props.item} />);
        if(this.props.item.type == "edittext") return (<BaseEditText data = {this.props.item} />);
        </View>
      );
    }
  }
  
  export default BaseComponent;