import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Alert,
    TextInput
  } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }; 
    constructor(props){
        super(props);
        this.state={
          modalVisible: false,
          messages:[],
          visibilityFilter:'SHOW_ALL_MESSAGES'
        }
      }
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() { 
        return ( 
            <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity}
             onPress={() => {
              this.setModalVisible(true);
            }}
            >
              <Text>Show Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity}
             onPress={() => {
              this.props.navigation.navigate("Green")
            }}
            >
              <Text>Navigate To Green </Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                  <View style={styles.modal}>
                    <TouchableOpacity
                    style={styles.touchableOpacity}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row' , marginHorizontal:20}}>
                      <TextInput 
                      placeholder="add"
                      style={styles.placeholder}
                      />
                      <TouchableOpacity 
                      onPress={()=> alert('added')}
                      style={styles.touchableOpacityPlus}>
                        <Text style={{fontSize:20}}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
           </View>
         );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#e84393',
      alignItems:"center"
    },
    touchableOpacity:{
      alignItems:'center',
      justifyContent:'center',
      width:150,
      height:40,
      backgroundColor:'#dfe6e9',
      borderRadius:5,
      margin:10
    },
    modal:{
      flex:1,
      alignItems:'center',
      flexDirection:'column',
      height:250,
      width:250
    },
    placeholder:{
      flex:1,
      height:50,
      padding:5,
      borderWidth:1,
      borderColor:'#f2f2e1',
      backgroundColor:'#eaeaea'
    },
    touchableOpacityPlus:{
      height:50,
      width:60,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#eaeaea'
    }
   });
 
export default Home;