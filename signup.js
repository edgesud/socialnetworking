import React,{useRef,useState} from "react";
import { Text,View,Image,ImageBackground,StyleSheet, ScrollView,KeyboardAvoidingView, TouchableWithoutFeedback,TouchableOpacity, Keyboard } from "react-native";
import { img } from "../constant";
import { TextInput,Button, DarkTheme, Surface, RadioButton,Checkbox } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const signup = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    const [checke, setChecke] = React.useState('first');
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    }
    
    function close() {
      pickerRef.current.blur();
    }
    
        return(
            
             <KeyboardAvoidingView  style={styles.container}>
              <TouchableWithoutFeedback onPress = {Keyboard.dismiss} style={{flex:1}}>
            <ImageBackground style={styles.image} source={img.flag} >
                <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image style={{marginLeft:10,marginTop:10}} source={img.left}/>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator ={false} bounces={false}>
          <Image style={{marginTop:60,alignSelf:"center"}}source={img.logo}/>
          <Text style={{fontFamily:"Nunito-ExtraBold",color:"#222C82",marginTop:17,fontSize:24,textAlign:"center"}}>Create an account</Text>
          <Text style={{fontFamily:"Nunito-ExtraBold",color:"#75777D",marginTop:6,fontSize:18,textAlign:"center",opacity:0.7}}>Sign up and get Started</Text>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:70,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Name</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" placeholder="Jessica.louis"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:20,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Email</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" keyboardType="email-address" placeholder="jessicalouis123@gmail.com"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:20,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Phone</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" keyboardType="number-pad" placeholder="2559636956"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:20,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Username</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" keyboardType="number-pad" placeholder="Jessica.louis"/>
         <Text style={{color:"#75777D",textAlign:"left",marginTop:20,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Age</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}}underlineColor="lightgrey" placeholderTextColor="#424752" selectionColor="#424752" keyboardType="number-pad" placeholder="24"/>

                                                             {/* Gender */}
                                                            
         <Text style={{color:"#75777D",textAlign:"left",marginTop:20,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Gender</Text>
         <View style={{flexDirection:"row",justifyContent:"flex-start",marginTop:15,marginLeft:20}}>
             <View style={{flexDirection:"row"}}>
             <RadioButton   uncheckedColor="#222C82" color="#222C82" value="first"  status={ checke === 'first' ? 'checked' : 'unchecked' }   onPress={() => setChecke('first')}/>

          
         <Text style={{padding:8,fontFamily:"Nunito-Regular"}}>Male</Text>
             </View>
        
             <View style={{flexDirection:"row",marginLeft:100}}>
         <RadioButton  uncheckedColor="#222C82" color="#222C82" value="second"  status={ checke === 'second' ? 'checked' : 'unchecked' } onPress={() => setChecke('second')}/>
         <Text style={{padding:8,fontFamily:"Nunito-Regular"}}>Female</Text>
             </View>
        
         </View>                                        
         {/* Gender code complete */}
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Password</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}} underlineColor="lightgrey" selectionColor="#424752" secureTextEntry right={<TextInput.Icon name="eye"  />} placeholderTextColor="#424752"   placeholder="******"
    />
         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Confirm Password</Text>
         <TextInput style={{backgroundColor:"none",width:"95%",alignSelf:"center",fontFamily:"Nunito-Regular",marginTop:-5}} underlineColor="lightgrey" selectionColor="#424752" secureTextEntry right={<TextInput.Icon name="eye"  />} placeholderTextColor="#424752"   placeholder="******"
    />

         <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Country </Text>
         <Picker  selectedValue = {selectedLanguage} onValueChange = {(itemValue, itemIndex)=>setSelectedLanguage(itemValue) }>
                <Picker.Item  label = "None" value = "India" />
               <Picker.Item label = "India" value = "India" />
               <Picker.Item label = "Israel" value = "ellen" />
               <Picker.Item label = "Cambodia" value = "maria" />
               <Picker.Item label = "Malaysia" value = "maria" />
               <Picker.Item label = "Singapore" value = "maria" />
               <Picker.Item label = "USA" value = "maria" />
               <Picker.Item label = "UAE" value = "maria" />
                <Picker.Item label = "UK" value = "maria" />
            </Picker>

            <Text style={{color:"#75777D",textAlign:"left",marginTop:30,fontSize:16,marginLeft:20,fontFamily:"Nunito-Bold"}}>Sub location </Text>
         <Picker  selectedValue = {selectedLanguage} onValueChange = {(itemValue, itemIndex)=>setSelectedLanguage(itemValue) }>
                <Picker.Item  label = "None" value = "India" />
               <Picker.Item label = "India" value = "India" />
               <Picker.Item label = "Israel" value = "ellen" />
               <Picker.Item label = "Cambodia" value = "maria" />
               <Picker.Item label = "Malaysia" value = "maria" />
               <Picker.Item label = "Singapore" value = "maria" />
               <Picker.Item label = "USA" value = "maria" />
               <Picker.Item label = "UAE" value = "maria" />
                <Picker.Item label = "UK" value = "maria" />
            </Picker>
  
  
     <View style={{flexDirection:"row",marginTop:20,marginLeft:10}}>
     <Checkbox  uncheckedColor="#222C82" color="#222C82" status={checked ? 'checked' : 'unchecked'} onPress={() => {  setChecked(!checked);
      }}
    />
   
         <View style={{flexDirection:"row",marginLeft:-3,padding:8}}>
         <Text>I accept </Text>
         <Text style={{color:"#222C82",textDecorationLine:"underline",fontFamily:"Nunito-Bold"}}>Terms & Conditions </Text>
         <Text>of the app </Text>
         </View>
     </View>
     <Button  style={{backgroundColor:"#222C82",padding:10,width:"95%",alignSelf:"center",marginTop:20,borderRadius:8}} labelStyle={{fontFamily:"Nunito-Bold",fontSize:17}} mode="contained" onPress={() =>navigation.navigate('Home')}> Sign up </Button>
     <View style={{flexDirection:"row",alignSelf:"center",marginTop:35}}>
           <Text style={{color:"#262626",fontFamily:"Nunito-ExtraBold",fontSize:16}}> Have an account? </Text>
           <Text  onPress={() =>navigation.navigate('login')} style={{color:"#C5A12E",fontFamily:"Nunito-Bold",textDecorationLine:"underline",fontSize:16}}> Sign In </Text>
         
         
       </View> 
      </ScrollView>
   
            </ImageBackground>
     
            </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
        )
    }   
    export default signup;

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
        }
    })