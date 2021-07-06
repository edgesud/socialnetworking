import React, { Component } from 'react';
import { Text,View,Image, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import {img} from "../constant"
import { Searchbar, Card,IconButton, TextInput,Avatar} from 'react-native-paper';



class Profile extends Component {
  render() {
    return (
    <ScrollView style={{flex:1}} bounces={false} showsVerticalScrollIndicator ={false}>
    <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:10}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
      <Image style={{width:25,height:14,marginTop:5,marginLeft:15}} source={img.left}/> 
      </TouchableOpacity>
   
     <Text style={{fontFamily:"Nunito-Bold",fontSize:20,color:"#424752"}}>Profile</Text>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('edit')}>
     <Image style={{width:22,height:22,marginTop:5,marginRight:15}} source={img.edit}/>
     </TouchableOpacity>
     
    </View>

    <View style={{marginTop:12,position:"relative"}} >
      <Image style={{alignSelf:"center",width:"95%",height:180,borderRadius:20,resizeMode:"cover"}} source={img.profimg}/> 
      <View style={{width:50,height:50,borderRadius:25,backgroundColor:"#222C82",position:"absolute",right:25,bottom:10}} onPress={() => console.log('Pressed')}>
      <IconButton icon="camera" color={"white"} size={26} />
      </View>
    </View>

    <View style={{alignSelf:"center",position:"relative"}}>
      <Avatar.Image size={120} style={{bottom:50}}  source={img.avatar}/>
      <TouchableOpacity style={{width:40,height:40,borderRadius:20,backgroundColor:"#222C82",position:"absolute",right:-2,top:30}}>
      <IconButton icon="camera" color={"white"} size={20} />
      </TouchableOpacity>
      </View>
  
    <View style={{marginTop:-20}}>
      <Text style={{fontFamily:"Nunito-ExtraBold",color:"#222C82",fontSize:20,textAlign:"center"}}>Jessica Louis </Text>
      <Text style={{fontFamily:"Nunito-Regular",color:"#424752",fontSize:15,textAlign:"center"}}>jessicalouis123@gmail.com </Text>
    </View>
      
    <View>
      <Text style={{color:"#75777D",fontFamily:"Nunito-Bold",fontSize:12,textAlign:"left",marginLeft:30,marginTop:40}}>User Name</Text>
     <TextInput style={{width:"95%",alignSelf:"center",height:55,borderRadius:10,marginTop:8,fontSize:12}} underlineColor="lightgrey"  placeholder="Jessica.louis" />

     <Text style={{color:"#75777D",fontFamily:"Nunito-Bold",fontSize:12,textAlign:"left",marginLeft:30,marginTop:8}}>Phone Number</Text>
     <TextInput style={{width:"95%",alignSelf:"center",height:55,borderRadius:10,marginTop:8,fontSize:12}} keyboardType="number-pad" underlineColor="lightgrey"  placeholder="2559636956" />

     <Text style={{color:"#75777D",fontFamily:"Nunito-Bold",fontSize:12,textAlign:"left",marginLeft:30,marginTop:8}}>Country</Text>
     <TextInput style={{width:"95%",alignSelf:"center",height:55,borderRadius:10,marginTop:8,fontSize:12}} underlineColor="lightgrey"  placeholder="New York" />

     <Text style={{color:"#75777D",fontFamily:"Nunito-Bold",fontSize:12,textAlign:"left",marginLeft:30,marginTop:8}}>Community</Text>
     <TextInput style={{width:"95%",alignSelf:"center",height:55,borderRadius:10,marginTop:8,fontSize:12}} underlineColor="lightgrey"  placeholder="India" />

     <Text style={{color:"#75777D",fontFamily:"Nunito-Bold",fontSize:12,textAlign:"left",marginLeft:30,marginTop:8}}>Interest</Text>
     <TextInput style={{width:"95%",alignSelf:"center",height:55,borderRadius:10,fontSize:12}} underlineColor="lightgrey"  placeholder="Reading Book, Food, Singing" />

     <Text style={{color:"#75777D",fontFamily:"Nunito-Bold",fontSize:12,textAlign:"left",marginLeft:30,marginTop:8}}>Bio</Text>
     <TextInput style={{width:"95%",alignSelf:"center",height:55,borderRadius:10,fontSize:12,marginBottom:25}}   underlineColor="lightgrey"  placeholder="Reading Book, Food, Singing" />
    
      </View> 
    </ScrollView>
    );
  }
}

export default Profile;