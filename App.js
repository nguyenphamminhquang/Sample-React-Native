 'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,   FlatList, ActivityIndicator } from 'react-native';
import componentData from './mock/sampleComponent.json';
import BaseTextView from './components/BaseTextView.js';
import BaseEditText from './components/BaseEditText.js';
export default class App extends Component {
  constructor(props){
     super(props);
     this.state = {
       isLoading: true, //check data is loading or not
       dataSource: [], //store data object
     };
  }

  componentDidMount(){
    this.setState({
              isLoading: false, // already loading
              dataSource: componentData
            });
  }

  render() {
    if (this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            if(item.type == "textview")
            return (<BaseTextView data = {item} />)
            if(item.type == "edittext")
            return (<BaseEditText data = {item} />)
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
});