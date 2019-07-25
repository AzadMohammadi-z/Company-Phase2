import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';
import ListItem from '../components/ListItem';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  state = {
    isModalVisible: false,
    placeName: '',
    places: []
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
   
    this.props.add(this.state.placeName);
    this.setState({
      placeName: ''
    })
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });


  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchableOpacity}
          onPress={this.toggleModal}
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
        <View >
          <Modal
            onRequestClose={this.toggleModal}
            isVisible={this.state.isModalVisible}>
            <View style={styles.modal}>
              <View style={styles.modalItem}>
                <TextInput
                  value={this.state.placeName}
                  onChangeText={this.placeNameChangeHandler}
                  placeholder="Add Message"
                  style={styles.textInput}
                />
                <TouchableOpacity
                  onPress={this.placeSubmitHandler}
                  style={styles.touchableOpacityPlus}>
                  <Text style={{ fontSize: 20 }}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this.toggleModal}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>

        </View>
        <View style={styles.viewFlatList}>

          <FlatList style={styles.listContainer}
            data={this.props.places}
            keyExtractor={(item, index) => index.toString()}
            renderItem={info => (
              <ListItem
                placeName={info.item.value}
              />
            )}
          />

        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e84393',
    alignItems: "center",
    justifyContent: 'center'
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    backgroundColor: '#8395a7',
    borderRadius: 5,
    marginTop: 20
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea'
  },
  touchableOpacityPlus: {
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea'
  },
  listContainer: {
    width: '100%'
  },
  modalItem:{
    flexDirection: 'row',
    marginHorizontal: 20
  },
  viewFlatList:{
    width: '100%',
    height: 300,
    marginTop: 20
  }
});

const mapStateToProps = state => {

  return {
    places: state.places.places,
  }
}



const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)