
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransactionScreen from './screens/BookTransaction'
import SearchScreen from './screens/SearchScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  
 render(){
  return (
      <Appcontainer/>

  );
 }
}
const Tab = createBottomTabNavigator({
   Transaction:{screen:BookTransactionScreen},
   Search:{screen:SearchScreen}
})

const Appcontainer = createAppContainer(Tab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
