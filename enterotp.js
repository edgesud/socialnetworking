import React, { Component } from 'react';
import { Text,View,Image,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,StyleSheet,Keyboard,Platform} from 'react-native';
import {Button, DarkTheme, Surface } from 'react-native-paper';
import {img } from "../constant"

import OTPInputView from '@twotalltotems/react-native-otp-input'

class Cat extends Component {
 
    
  render() {
   
    return (
      <KeyboardAvoidingView 
      behavior={'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
      <Image style={styles.img} source={img.shield}/>
      <Text style={styles.txt1}>Enter your Verification code</Text>
      <Text  style={styles.txt2}>we sent verification code to 22699936548</Text>

      <OTPInputView
    style={{width: '95%', height: 200,alignSelf:"center"}}
    pinCount={5}
  
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
   
/>
<Button onPress={() => this.props.navigation.navigate('password')} style={{backgroundColor:"#222C82",padding:10,width:"95%",alignSelf:"center",marginTop:40,borderRadius:8}} labelStyle={{fontFamily:"Nunito-Bold",fontSize:17}} mode="contained" > Submit </Button>
 </View>
      </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
       
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:50
  },
  inner: {

    flex: 1,
    padding:18
 
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
 
  btnContainer: {
    backgroundColor:"#222C82",
    padding:10,
    width:"95%",
    alignSelf:"center",
    marginTop:40,
    borderRadius:8
  },
  img:{
    width:150,
    height:150,
    justifyContent:"center",
    alignSelf:"center",
    marginTop:30
  },
  txt1:{
    color:"#222C82",
    fontFamily:"Nunito-Regular",
    fontWeight:"bold",
    textAlign:"center",
    fontSize:25,
    marginTop:30,
    opacity:0.8
  },
  txt2:{
    color:"#75777D",
    fontFamily:"Nunito-Regular",
    textAlign:"center",
    fontSize:17,
    marginTop:10,
    width:"50%"
    ,alignSelf:"center"
  },
  underlineStyleBase: {
    width: 60,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color:"black",
    fontWeight:"bold",
    fontSize:18,
   
  },
  borderStyleBase: {
    width: 30,
    height: 45,
    color:"red"
  },
 
  borderStyleHighLighted: {
    borderColor: "green"
  },
  underlineStyleHighLighted: {
    borderColor: "#222C82"
  }
});
export default Cat;



