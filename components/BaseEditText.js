import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';

export class BaseEditText extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.data.text };
  }

  render() {
    return (
      <View>
        <TextInput style={{
            fontFamily: this.props.data.style.fontFamily,
            fontSize: this.props.data.style.fontSize,
            fontWeight: this.props.data.style.fontWeight,
            color: this.props.data.style.color,
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1
          }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder = {this.props.data.hint}
          />
      </View>
    );
  }
}

export default BaseEditText;