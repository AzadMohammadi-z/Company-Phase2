import React, {Fragment} from 'react';
import {
  View
} from 'react-native';
import MainNavigator from './src/Route' ;

const App = () => {
  return (
    <Fragment>
      <View style={{flex:1}}>
        <MainNavigator/>
      </View>
    </Fragment>
  );
};


export default App;
