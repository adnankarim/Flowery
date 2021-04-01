import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native-elements';
import { Button } from './components/button/Button';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Tflite from 'tflite-react-native';

let modelFile = './assets/models/model.tflite'

class App extends Component {

  state = {
    source: 'null',
  }
  selectAnImage = () => {
    const options = {};
    launchImageLibrary(options, (req, res) => {
      if (res.didCancel) {
        console.log('User Cancelled Image');
      } else if (res.errorCode) {
        console.log('Error');
      } else if (res.errorCode) {
        console.log('User Pressed Custom Button');
      } else {
        this.setState({
          source: { uri: res.uri },
        });


      }
    });
  }

  takeAPhoto = () => {
    const options = {};

    launchCamera(options, (req, res) => {
      if (res.didCancel) {
        console.log('User Cancelled Image');
      } else if (res.errorCode) {
        console.log('Error');
      } else if (res.errorCode) {
        console.log('User Pressed Custom Button');
      } else {
        this.setState({
          source: { uri: res.uri },
        });

      }
    });
  }
  render() {
    return (
      <LinearGradient
        style={{ flex: 1, flexDirection: 'row' }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Flowery</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 250,
          }}>
          <Image
            source={require('./assets/flower.png')}
            style={{ width: 250, height: 250, padding: 5 }}></Image>
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginHorizontal: 30, margin: 80, fontSize: 25 }}>
          <Button title={'Take a Photo'} style={{ width: 250, backgroundColor: 'black' }}></Button>
          <Button title={'Select an Image'} style={{ marginTop: 10, width: 250, backgroundColor: 'black' }}></Button>
        </View>
      </LinearGradient>
    );
  }
}

export default App;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 50,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
