 'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,   FlatList, ActivityIndicator } from 'react-native';
import componentData from './mock/sampleComponent.json';

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
            return (
              <View>
                <Text>-------Start----------</Text>
                <Text>Type is {item.type} </Text>
                <Text>Text is {item.text} </Text>
                <Text>Hint is {item.hint} </Text>
                <Text>---------Style-------- </Text>
                <Text>fontFamily is {item.style.fontFamily} </Text>
                <Text>fontStyle is {item.style.fontStyle} </Text>
                <Text>fontSize is {item.style.fontSize} </Text>
                <Text>color is {item.style.color} </Text>
                <Text>alignment is {item.style.alignment} </Text>
                <Text>-------End----------</Text>
              </View>
            )
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
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});