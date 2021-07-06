import React,{Component} from 'react';
import { Text,View,Image,KeyboardAvoidingView,StyleSheet,TouchableWithoutFeedback,Keyboard,TouchableOpacity,ScrollView } from 'react-native';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { Avatar,IconButton,Button,TextInput } from 'react-native-paper';
import {img} from "../constant"

export default class Group extends Component{
    render(){
        return(
            <KeyboardAvoidingView 
            behavior={'height'}
            style={styles.container}
          >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{flex:1}}>
                    <View style={styles.inner}>
                    <EvilIcons style={styles.icon1} name="chevron-left"/>
                    <Text style={styles.txt1}>Profile</Text>
                    </View>

                    <View style={{marginTop:100}} >
                    <Avatar.Image size={125} style={{bottom:50,alignSelf:"center"}}  source={img.avt1}/>
                      
            <TouchableOpacity style={{width:58,height:58,borderRadius:29,backgroundColor:"#222C82",position:"absolute",right:120,top:30}}>
            <IconButton style={{alignSelf:"center",paddingLeft:2}} icon="camera" color={"white"} size={32} />
            </TouchableOpacity>
                    
              </View>
               
       <View>
    
       <Text style={{color:"#75777D",textAlign:"left",marginTop:85,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Name</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="Jessica.louis"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Usename</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="Jessica.louis"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Email</Text>
         <TextInput keyboardType={"email-address"} style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="jessicalouis123@gmail.com"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Phone</Text>
         <TextInput keyboardType={"numeric"} style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="259745522"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Country</Text>


         <View style={{flexDirection:"row"}}>
         <TextInput keyboardType={"numeric"} style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6,marginLeft:15,paddingRight:30}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="NewYork"/>
         <TouchableOpacity>
         <AntDesign size={18} style={{top:18,right:28}} name="down"/>
         </TouchableOpacity>
   
         </View>
         
        
        
    
    <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Hobbies</Text>
         <TextInput keyboardType={"numeric"} style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5,opacity:0.6}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="Shopping, Horse Riding"/>
         <Button style={{backgroundColor:"#222C82",padding:10,width:"95%",alignSelf:"center",marginTop:40,borderRadius:8,flex:1,marginBottom:30}} labelStyle={{fontFamily:"Nunito-Bold",fontSize:17}} mode="contained" > Save </Button>
      </View>
                 </ScrollView>
                
        
                 
               
          
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    inner:{
        
        marginTop:8,
        flexDirection:"row",
        justifyContent:"center",
        position:"relative"
    },
    icon1:{
        fontSize:30,
        position:"absolute",
        left:10
    },
    txt1:{
        fontFamily:"Nunito-Bold",
        fontSize:22,
      
    }
});