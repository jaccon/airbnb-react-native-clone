import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, SafeAreaView } from 'react-native';
const { width} = Dimensions.get('window')
export default function Saved() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{marginTop: 40, paddingHorizontal: 20}}>
            <Text style={{fontSize:24, fontWeight: '700'}}>Saved</Text>
            <ScrollView 
                scrollEventThrottle={16}
            >
                <View style={{width: width - 40, height:250, marginTop: 20}}>
                    <Image style={{flex: 1, height: null, width:null, resizeMode:'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}} source={{uri : "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}/>
                    <Text style={{fontWeight:'700', paddingVertical:15}}>
                        Aturu
                        <Text style={{fontWeight:'100'}}> {' '}2 Experiences</Text>
                    </Text>
                </View> 
                <View style={{width: width - 40, height:250, marginTop: 20}}>
                    <Image style={{flex: 1, height: null, width:null, resizeMode:'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}} source={{uri : "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}/>
                    <Text style={{fontWeight:'700', paddingVertical:15}}>
                        Aturu
                        <Text style={{fontWeight:'100'}}> {' '}2 Experiences</Text>
                    </Text>
                </View> 
                <View style={{width: width - 40, height:250, marginTop: 20}}>
                    <Image style={{flex: 1, height: null, width:null, resizeMode:'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}} source={{uri : "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}/>
                    <Text style={{fontWeight:'700', paddingVertical:15}}>
                        Aturu
                        <Text style={{fontWeight:'100'}}> {' '}2 Experiences</Text>
                    </Text>
                </View> 
            </ScrollView>
            
        </View>
        
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

