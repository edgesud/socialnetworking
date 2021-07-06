import React,{Component} from "react";
import {Text,View,Image, TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard,StyleSheet} from "react-native";
import { img } from "../constant";
import { Button } from "react-native-paper";


function ForgotPassword  ({ navigation }) {
  
         return(
             <KeyboardAvoidingView style={{flex:1}}>
                <TouchableWithoutFeedback style={{flex:1}} onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
               <Image style={styles.img} source={img.shield}/>
                <Text style={styles.txt1}>Forgot Password</Text>
                <Text  style={styles.txt2}>Enter your Register phone Number</Text>
                <Text style={{color:"#75777D",textAlign:"left",marginTop:70,fontSize:16,marginLeft:12,fontFamily:"Nunito-Bold"}}>Phone</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",position:"relative"}}>
                    <Text style={{paddingTop:10,position:'absolute',top:2,fontSize:18,marginLeft:10}}>+ 91 </Text>
                <TextInput maxLength={11} keyboardAppearance="light" keyboardType="number-pad" style={{borderBottomWidth:1,borderBottomColor:"#E3E3E3",width:"95%", paddingTop: 10, paddingRight: 10,paddingBottom: 10, paddingLeft: 55,fontSize:18}}> </TextInput>
                </View>
                <TouchableOpacity>
                <Text style={{color:"#C5A12E",textAlign:"center",marginTop:30,fontSize:18,fontFamily:"Nunito-Bold",textDecorationLine:"underline"}}>Change to Email?</Text>
                </TouchableOpacity>
              
                <TouchableOpacity>
        
         <Button onPress={() => navigation.navigate('OTP')}  style={{backgroundColor:"#222C82",padding:10,width:"95%",alignSelf:"center",marginTop:40,borderRadius:8}} labelStyle={{fontFamily:"Nunito-Bold",fontSize:17}} mode="contained" > Send OTP </Button>
         </TouchableOpacity>
</View>
      
         </TouchableWithoutFeedback>
   
        </KeyboardAvoidingView>
         )
         }
 
 export default ForgotPassword;

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:50
      },
      inner: {
    
        flex: 1,
        padding:18
     
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
        width:"90%"
        ,alignSelf:"center"
      },
      img:{
        width:150,
        height:150,
        justifyContent:"center",
        alignSelf:"center",
        marginTop:30
      },
 })