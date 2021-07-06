import React,{Component} from "react";
import { Text,View,Image,ImageBackground,StyleSheet, ScrollView,Keyboard,Platform,Animated, KeyboardAvoidingView} from "react-native";
import { img } from "../constant";
import { TextInput,Button, DarkTheme, Surface } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class Signin extends React.Component{
 

  
    render(){
    
        return(
            <KeyboardAvoidingView style={styles.container} >
          
            <ScrollView  ref={(ref) => (scrollView = ref)} contentContainerStyle={{flex:1}} showsVerticalScrollIndicator ={false} bounces={false}>
          <Image style={{marginTop:40,alignSelf:"center"}}source={img.logo}/>
          <Text style={{fontFamily:"Nunito-ExtraBold",color:"#222C82",marginTop:17,fontSize:24,textAlign:"center"}}>Welcome Back</Text>
          <Text style={{fontFamily:"Nunito-ExtraBold",color:"#75777D",marginTop:6,fontSize:18,textAlign:"center",opacity:0.7}}>Login in continue</Text>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:85,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Username</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="Jessica.louis"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Password</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}} underlineColor="lightgrey" selectionColor="#424752" secureTextEntry right={<TextInput.Icon name="eye"  />} placeholderTextColor="#424752"   placeholder="******"
    />
       <Text onPress={() => this.props.navigation.navigate('forgot')} style={{textAlign:"center",fontFamily:"Nuinito-ExtraBold",color:"#C5A12E",fontSize:17,fontWeight:"bold",marginTop:30,textDecorationLine:"underline"}} >Forgot Password?</Text>
       <Button  style={{backgroundColor:"#222C82",padding:10,width:"95%",alignSelf:"center",marginTop:20,borderRadius:8}} labelStyle={{fontFamily:"Nunito-Bold",fontSize:17}} mode="contained" onPress={() => this.props.navigation.navigate('Home')} > Sign In </Button>
       <View style={{flexDirection:"row",alignSelf:"center",marginTop:15}}>
           <Text style={{color:"#262626",fontFamily:"Nunito-ExtraBold",fontSize:16}}> New to App </Text>
           <Text onPress={() => this.props.navigation.navigate('sud')} style={{color:"#C5A12E",fontFamily:"Nunito-Bold",textDecorationLine:"underline",fontSize:16}}> Signup </Text>
         
         
       </View>
      </ScrollView>
            
     
     
      </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
     
    },
    image: {
    width:"100%",
    height:300 ,
    opacity:1,
    resizeMode:"contain",
    flex:1,
    alignSelf:"center"

    
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });