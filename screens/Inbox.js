import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default function Inbox() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{marginTop: 40, paddingHorizontal: 20}}>
            <Text style={{fontSize:24, fontWeight: '700'}}>Inbox</Text>
            <Text style={{fontWeight: '100'}}>Messages from your hosts will appear here.</Text>
            <ScrollView 
                scrollEventThrottle={16}
            >
                <View style={{width: width - 40, height:250, marginTop: 20}}>
                    <Image style={{flex: 1, height: null, width:null, resizeMode:'cover'}} source={require('../assets/undraw_welcoming_xvuq.png')}/>
                    
                </View>
                
            </ScrollView>
            
        </View>
        
    </SafeAreaView>
  );
}

