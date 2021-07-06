import React, { Component } from 'react';
import { Text,View,Image,KeyboardAvoidingView,TouchableWithoutFeedback,StyleSheet,Keyboard,ScrollView} from 'react-native';
import {Button, TextInput,Icon } from 'react-native-paper';
import {img } from "../constant"



class createPassword extends Component {

    
  render() {
   
    return (
      <KeyboardAvoidingView 
      behavior={'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback style={{flex:1}} onPress={Keyboard.dismiss}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}  style={{flex:1}}>
               <Image style={styles.img} source={img.shield}/>
               <Text style={styles.txt1}>Change Password</Text>
               <Text  style={styles.txt2}>Please enter your new password</Text>
               <View style={{marginTop:30}}>
               <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>New Password</Text>
              <TextInput  style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}} underlineColor="lightgrey" selectionColor="#424752" secureTextEntry right={<TextInput.Icon  name="eye"  />} placeholderTextColor="#424752"   placeholder="******"
         />

              <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Confirm New Password</Text>
              <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}} underlineColor="lightgrey" selectionColor="#424752" secureTextEntry right={<TextInput.Icon name="eye-off"  />} placeholderTextColor="#424752"   placeholder="******"
         />
               </View>
               <Button onPress={() => this.props.navigation.navigate('login')} style={{backgroundColor:"#222C82",padding:10,width:"95%",alignSelf:"center",marginTop:60,borderRadius:8,flex:1}} labelStyle={{fontFamily:"Nunito-Bold",fontSize:17}} mode="contained" > Confirm </Button>
             </ScrollView>
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
export default createPassword;



