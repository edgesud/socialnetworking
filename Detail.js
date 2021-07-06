import React, { Component } from 'react';
import { Text,View,Image,TouchableOpacity,ImageBackground, ScrollView, Alert,Animated} from 'react-native';
import { img } from '../constant';
import Font from "react-native-vector-icons/FontAwesome"
import { Avatar,Button,Card } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign"

HEADER_MAX_HEIGHT = 220
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40
// Inside of a component's render() method:



export default class cat extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      scrollY : new Animated.Value(0)
    }
  }
render() {
const headerHeight =this.state.scrollY.interpolate({
  inputRange: [0,220],
  outputRange: [220,110]
})

  return (
    <View style={{flex:1}}>
    
    <Animated.Image style={{width:"100%",height:headerHeight,position:"absolute"}} source={img.ramu}/>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>

          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image  style={{tintColor:"white",marginTop:2}}   source={img.left}/>
          </TouchableOpacity>
          
          <Text style={{color:"white",fontFamily:"Nunito-Bold",fontSize:20,marginLeft:100}}>Detail</Text>
          <AntDesign style={{marginTop:5,marginLeft:10}} color="white" size={21} marginLeft="40" name="search1"/>
          <Image style={{width:32,height:32,marginRight:8}} source={img.prof}/>
        </View>
     
           
           <ScrollView scrollEventThrottle={16} style={{flex:1}} onScroll={Animated.event([{nativeEvent:{contentOffset: {y: this.state.scrollY}}}])} showsVerticalScrollIndicator ={false}>
          <View style={{backgroundColor:"#fff",width:"100%",height:"auto",borderTopLeftRadius:22,borderTopRightRadius:28,marginTop:140}}>
          <Avatar.Image style={{alignSelf:"center",position:"relative",bottom:50}} size={120} source={img.avatar1} />
          <Text style={{textAlign:"center",fontFamily:"Nunito-Bold",color:"#1B2643",fontSize:20,bottom:30}}>leslie Alexander95</Text>
          <View style={{flexDirection:"row",justifyContent:"center",bottom:20}}>
          <Image style={{width:11,height:14,marginTop:3,marginRight:8}} source={img.map}/>
          <Text style={{fontFamily:"Nunito-Regular",color:"#545D74",fontSize:15}}>Oman Saudi Arabia</Text>
           </View>
           
           <Text style={{justifyContent:"center",width:280,height:76,fontFamily:"Nunito-Regular",opacity:1,color:"#545D74",marginLeft:"auto",marginRight:'auto'}}>Aliquam quis ante laoreet, fermentum nulla nec, lobortis sapien. Quisque id ipsum in convallis feugiat a sit amet augue ante Pellentesque non arcu vel erat.</Text>
           <View style={{flexDirection:"row",justifyContent:"space-around"}}>
           <Button  contentStyle={{}} labelStyle={{color:"white",fontSize:15,opacity:1,fontFamily:"Nunito-italic",lineHeight:24}} color="#C5A12E"icon="plus" style={{width:156,height:44,borderRadius:8,marginTop:50}}  mode="contained" onPress={() => Alert.alert("jdijidj")}>Add Friends </Button>
           <Button uppercase="false" contentStyle={{}} labelStyle={{color:"white",fontSize:16,opacity:1,fontFamily:"Nunito-italic",lineHeight:24}} color="#222C82"icon="chat" style={{width:156,height:44,borderRadius:8,marginTop:50}}  mode="contained" onPress={() => Alert.alert("jdijidj")}>Message </Button>
           </View>

         <Text style={{fontFamily:"Nunito-Bold",color:"#1B2643",fontSize:18,marginTop:34,marginLeft:22}}>Community</Text>
         <Text style={{fontFamily:"Nunito-Regular",color:"#545D74",fontSize:17,marginLeft:25,top:12}}>Oman</Text>
         <View style={{borderBottomWidth:1,borderBottomColor:"#00000029",marginTop:18,alignSelf:"center",width:"90%"}}></View>
         <Text style={{fontFamily:"Nunito-Bold",color:"#1B2643",fontSize:18,marginTop:28,marginLeft:22}}>Interest</Text>


       <View style={{marginTop:18,flexDirection:"row",justifyContent:"space-evenly"}}>
         <View style={{borderWidth:1,borderColor:"#3B93D0",width:"auto",height:35,backgroundColor:"#F2F8FC",borderRadius:8}}>
         <Text style={{fontFamily:"Nunito-Bold",color:"#545D74",fontSize:15,textAlign:"center",padding:5}}>Reading Book</Text>
         </View>
         <View style={{borderWidth:1,borderColor:"#3B93D0",width:"auto",height:35,backgroundColor:"#F2F8FC",borderRadius:5}}>
         <Text style={{fontFamily:"Nunito-Bold",color:"#545D74",fontSize:15,textAlign:"center",padding:5}}>Food</Text>
         </View>
         <View style={{borderWidth:1,borderColor:"#3B93D0",width:"auto",height:35,backgroundColor:"#F2F8FC",borderRadius:5}}>
         <Text style={{fontFamily:"Nunito-Bold",color:"#545D74",fontSize:15,textAlign:"center",padding:5}}>Horse Riding</Text>
         </View>
       </View>

       <View style={{borderBottomWidth:1,borderBottomColor:"#00000029",marginTop:35,alignSelf:"center",width:"90%"}}></View>

       <Text style={{fontFamily:"Nunito-Bold",color:"#1B2643",fontSize:18,marginTop:22,marginLeft:22}}>Hobbies</Text>


<View style={{marginTop:18,flexDirection:"row",justifyContent:"center"}}>
  <View style={{borderWidth:1,borderColor:"#3B93D0",width:"auto",height:35,backgroundColor:"#F2F8FC",borderRadius:5}}>
  <Text style={{fontFamily:"Nunito-Bold",color:"#545D74",fontSize:15,textAlign:"center",padding:5}}>Reading Book</Text>
  </View>
  <View style={{borderWidth:1,borderColor:"#3B93D0",width:"auto",height:35,backgroundColor:"#F2F8FC",borderRadius:5}}>
  <Text style={{fontFamily:"Nunito-Bold",color:"#545D74",fontSize:15,textAlign:"center",padding:5}}>Food</Text>
  </View>
  <View style={{borderWidth:1,borderColor:"#3B93D0",width:"auto",height:35,backgroundColor:"#F2F8FC",borderRadius:5}}>
  <Text style={{fontFamily:"Nunito-Bold",color:"#545D74",fontSize:15,textAlign:"center",padding:5}}>Horse Riding</Text>
  </View>
</View>

 
<View style={{marginTop:43,width:"100%"}}>
           <View style={{marginLeft:-10}}>
          <TouchableOpacity>
           <Card.Title  style={{}}title="Casting for films and commercials" 
         titleStyle={{fontFamily:"Nunito-Bold",fontSize:18}}
         subtitle="Aliquam quis ante laoreet, fermentum nulla nec, lobortis sapien. Quisque id ipsum in convallis feugiat a sit amet augue"                
         subtitleStyle={{fontFamily:"Nunito-Regular",width:"100%"}}
         subtitleNumberOfLines={3}
         left={(props) => <Image style={{width:44,height:44,marginBottom:18}} source={img.prof}/>}
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



          <View style={{marginTop:43,width:"100%"}}>
           <View style={{marginLeft:-10}}>
          <TouchableOpacity>
           <Card.Title  style={{}}title="Kevien Deo" 
         titleStyle={{fontFamily:"Nunito-Bold",fontSize:18}}
         subtitle="combined with a handful of model sentence tructures, to generatbee from repetition."                
         subtitleStyle={{fontFamily:"Nunito-Regular",width:"100%"}}
         subtitleNumberOfLines={2}
         left={(props) => <Image style={{width:44,height:44,marginBottom:18}} source={img.prof}/>}
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

          <View style={{marginTop:43,width:"100%"}}>
           <View style={{marginLeft:-10}}>
          <TouchableOpacity>
           <Card.Title  style={{}}title="Kevien Deo" 
         titleStyle={{fontFamily:"Nunito-Bold",fontSize:18}}
         subtitle="combined with a handful of model sentence tructures, to generatbee from repetition."                
         subtitleStyle={{fontFamily:"Nunito-Regular",width:"100%"}}
         subtitleNumberOfLines={2}
         left={(props) => <Image style={{width:44,height:44,marginBottom:18}} source={img.prof}/>}
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
        
          </View>
          
          
        
           </ScrollView>
           
</View>
  );
  }
}
