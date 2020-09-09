import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView,ScrollView,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default function Trips() {
  return (
      <SafeAreaView style={{flex:1}}>
        <View style={{marginTop: 80, paddingHorizontal: 20,flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight: '700'}}>Where to?</Text>
            <Text style={{fontWeight: '100'}}>Start Your First Adventure On Airbnb Now.</Text>
            <ScrollView 
                scrollEventThrottle={16}
            >
                <View style={{width: width - 40, height:200, marginTop: 20}}>
                    <Image style={{flex: 1, height: null, width:null, resizeMode:'cover'}} source={require('../assets/undraw_suburbs_8b83.png')}/>
                    
                </View>
                
            </ScrollView>
            
        </View>
        
    </SafeAreaView>
  );
}


