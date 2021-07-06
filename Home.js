import React, { Component } from 'react';
import { Text,View,Image, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import {img} from "../constant"
import { Searchbar, Card} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class Home extends Component {
  renderItem = ({ item, index }) => (
    <Image 
     source={item.thumbnail} />
  );
  render() {
    return (
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator ={false} >
        <View  style={{flexDirection:"row",marginTop:10,width:"95%"}}>
          
          <Image style={{width:36,height:36,marginLeft:10,marginTop:5}} source ={img.logo}/>
          <Image style={{width:19.63,height:21.6,position:"absolute",top:10,right:50}} source={img.bell}/>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('prof')}   style={{position:"absolute",right:3,top:5}}>
          <Image style={{width:30,height:30}}  source={img.prof} />
          </TouchableOpacity>
         
        </View>
        <View style={{marginTop:12,width:"95%",marginLeft:"auto",marginRight:"auto"}}>
        <Searchbar style={{borderRadius:50,shadowColor:"grey"}} inputStyle={{fontFamily:"Nunito-Regular"}}
         placeholder="Search" /> 

         <View style={{marginTop:20,width:"100%"}}>
           <View style={{marginLeft:-10}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('detail')}>
           <Card.Title  style={{}}title="Kevien Deo" 
         titleStyle={{fontFamily:"Nunito-Bold"}}
         subtitle="combined with a handful of model sentence tructures, to generatbee from repetition."                
         subtitleStyle={{fontFamily:"Nunito-Regular",width:"100%"}}
         subtitleNumberOfLines={2}
         left={(props) => <Image style={{width:44,height:44}} source={img.prof}/>}
         right={(props) => <Image style={{marginBottom:42,marginRight:18}} source={img.vert} onPress={() => {}} />} />
         </TouchableOpacity>
           </View>


               
          <View style={{marginTop:20}}>
          <Card style={{elevation:5}}>
         <Card.Cover resizeMode="cover" Image source={img.card1} />
         <Card.Actions style={{}}>
        <Image style={{width:22,height:20,marginLeft:3}} source={img.fadehrt}/>
        <Text style={{marginLeft:8,fontSize:15,fontFamily:"Nunito-Regular"}}>7.8k</Text>
        <Image style={{width:22,height:22,marginLeft:3,marginLeft:30}} source={img.comment}/>
        <Text style={{marginLeft:8,fontSize:15,fontFamily:"Nunito-Regular"}}>288</Text>
        <Image style={{width:18,height:18,marginLeft:3,marginLeft:150}} source={img.share}/>
    </Card.Actions>
         </Card>
         
      </View>
        
          </View>

           {/* SECOND CARD */}

         <View style={{marginTop:20}}>
         <View style={{marginLeft:-10}}>
           <Card.Title style={{}}title="Kevien Deo" 
           titleStyle={{fontFamily:"Nunito-Bold"}}
           subtitle="combined with a handful of model sentence tructures, to generatbee from repetition."                
           subtitleStyle={{fontFamily:"Nunito-Regular",width:"100%"}}
           subtitleNumberOfLines={2}
           left={(props) => <Image style={{width:44,height:44}} source={img.prof}/>}
           right={(props) => <Image style={{marginBottom:42,marginRight:18}} source={img.vert} onPress={() => {}} />} />
           </View>

           <View style={{marginTop:20}}>
          <Card style={{elevation:5}}>
            <View style={{flexDirection:"row",}}>
            <Card.Cover style={{width:"50%"}} resizeMode="cover" Image source={img.group6} />
         <Card.Cover style={{width:"49.5%",marginLeft:2}} resizeMode="cover" Image source={img.group7} />
            </View>
     
         <Card.Actions style={{}}>
        <Image style={{width:22,height:20,marginLeft:3}} source={img.fadehrt}/>
        <Text style={{marginLeft:8,fontSize:15,fontFamily:"Nunito-Regular"}}>7.8k</Text>
        <Image style={{width:22,height:22,marginLeft:3,marginLeft:30}} source={img.comment}/>
        <Text style={{marginLeft:8,fontSize:15,fontFamily:"Nunito-Regular"}}>288</Text>
        <Image style={{width:18,height:18,marginLeft:3,marginLeft:150}} source={img.share}/>
    </Card.Actions>
         </Card>
         
      </View>
         
         </View>


         {/* THIRD CARD */}

         <View style={{marginTop:20}}>
         <View style={{marginLeft:-10}}>
           <Card.Title style={{}}title="Kevien Deo" 
           titleStyle={{fontFamily:"Nunito-Bold"}}
           subtitle="combined with a handful of model sentence tructures, to generatbee from repetition."                
           subtitleStyle={{fontFamily:"Nunito-Regular",width:"100%"}}
           subtitleNumberOfLines={2}
           left={(props) => <Image style={{width:44,height:44}} source={img.prof}/>}
           right={(props) => <Image style={{marginBottom:42,marginRight:18}} source={img.vert} onPress={() => {}} />} />
           </View>

           <View style={{marginTop:20}}>
          <Card style={{elevation:5}}>
            
          
         <Card.Cover style={{marginLeft:2}} resizeMode="cover" Image source={img.ramu} />
            
     
         <Card.Actions style={{}}>
        <Image style={{width:22,height:20,marginLeft:3}} source={img.fadehrt}/>
        <Text style={{marginLeft:8,fontSize:15,fontFamily:"Nunito-Regular"}}>7.8k</Text>
        <Image style={{width:22,height:22,marginLeft:3,marginLeft:30}} source={img.comment}/>
        <Text style={{marginLeft:8,fontSize:15,fontFamily:"Nunito-Regular"}}>288</Text>
        <Image style={{width:18,height:18,marginLeft:3,marginLeft:150}} source={img.share}/>
    </Card.Actions>
         </Card>
         
      </View>
         
         </View>



        </View>
       
        
      </ScrollView>
     
    );
  }
}

export default Home;