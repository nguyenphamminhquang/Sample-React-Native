import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export class BaseTextView extends Component {
  render() {
    return (
      <View>
        <Text style={{
            fontFamily: this.props.data.style.fontFamily,
            fontSize: this.props.data.style.fontSize,
            fontWeight: this.props.data.style.fontWeight,
            color: this.props.data.style.color
          }}>{this.props.data.text}</Text>
      </View>
    );
  }
}

export default BaseTextView;