import React, { Component } from 'react';
import {View , TouchableOpacity,StyleSheet,Text} from 'react-native';

class Green extends Component {
    static navigationOptions = {
        title: 'Green'
      }; 
    render() { 
        return ( 
            <View style={styles.container}>
              <TouchableOpacity style={styles.touchableOpacity}
              onPress={()=>this.props.navigation.navigate('Home')}
              >
                      <Text>Go To Home</Text>
              </TouchableOpacity>
            </View>
         );
    }
}

const styles= StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#55efc4',
        alignItems:'center',
        justifyContent:'center'
    },
    touchableOpacity:{
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:40,
        backgroundColor:'#dfe6e9',
        borderRadius:5,
        margin:10
      }
})
 
export default Green;