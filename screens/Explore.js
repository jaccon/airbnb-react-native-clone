import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar, ScrollView , Dimensions, Image, Animated} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import Category from "./components/Explore/Category"
import Home from './components/Explore/Home';
const Explore = (props) => {
    const [setState, setStartHeaderHeight] = useState({
        startHeaderHeight: 90,
        endHeaderHeight:50,
        scrollY: new Animated.Value(0),
        animatedHeaderHeight: null,
        animatedOpacity:null,
    }); 
    useEffect(() => {
        if(Platform.OS === "android"){
            setStartHeaderHeight({startHeaderHeight: 100 + StatusBar.currentHeight, endHeaderHeight: 70 + StatusBar.currentHeight})
        }
        setStartHeaderHeight({...setState, animatedHeaderHeight : newanimatedHeaderHeight, animatedOpacity: newanimatedOpacity})
    })
    const {height, width} = Dimensions.get('window')
    const {startHeaderHeight , endHeaderHeight, scrollY, animatedHeaderHeight, animatedOpacity} = setState

    const newanimatedHeaderHeight = scrollY.interpolate({
        inputRange:[0,50],
        outputRange: [startHeaderHeight, endHeaderHeight],
        extrapolate: 'clamp'

    })
    const newanimatedOpacity = newanimatedHeaderHeight.interpolate({
        inputRange:[endHeaderHeight, startHeaderHeight],
        outputRange: [0, 1],
        extrapolate: 'clamp'

    })
  return (
    <SafeAreaView style={{flex: 1}} style={{backgroundColor:"#f7f9ff"}}>
        <View style={{flex: 1}} style={{backgroundColor:"#f7f9ff"}}>
            <Animated.View style={{height: animatedHeaderHeight , backgroundColor: '#f7f9ff'}}>
                <View style={{flexDirection:'row', padding: 10, backgroundColor: "#fff" , marginHorizontal: 20, shadowOffset: {width: 0, height:0}, shadowColor:'#000', shadowOpacity: 0.1, elevation:1, marginTop: Platform.OS == "android" ? 30 : null}}>
                    <Icon name="ios-search" size={24} style={{marginRight: 10, marginLeft: 3, opacity: 0.4}} />
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Try New Dehli"
                        placeholderTextColor="grey"
                        style={{fontWeight: '300', backgroundColor:"#fff", flex:1 }}
                    />
                </View>
                <Animated.View
                    style={{flexDirection:'row', marginHorizontal:20, position:'relative', top:10, opacity: animatedOpacity}}
                >
                    <View style={{padding:10, borderColor: "#ddd", borderRadius:6, marginRight:3, minHeight: 20, minWidth:40 , borderWidth: 0.7, borderRadius:2}}>
                        <Text style={{fontWeight:'400', fontSize:11}}>Guest</Text>
                    </View>
                    <View style={{padding:10, borderColor: "#ddd", borderRadius:6, minHeight: 20, minWidth:40 , borderWidth: 0.7, borderRadius:2}}>
                        <Text style={{fontWeight:'400', fontSize:11}}>Dates</Text>
                    </View>
                </Animated.View>
            </Animated.View>
            <ScrollView 
               scrollEventThrottle={16} 
               onScroll={Animated.event(
                   [
                       {nativeEvent:{contentOffset:{y:scrollY}}}
                   ]
               )}
            >
                <Text style={{fontSize:22, fontWeight: '700', paddingHorizontal: 20, paddingTop: 20, paddingBottom:3}}>What can we help you find,</Text>
                <Text style={{fontSize:22, fontWeight: '700', paddingHorizontal: 20, paddingBottom:20}}>John ?</Text>
                <View style={{marginTop: 10, height:170,}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category imageUri="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80" name="Stay" />
                        <Category imageUri="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" name="Experiences" />
                        <Category imageUri="https://images.unsplash.com/photo-1561049933-c7762dbc757e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" name="Adventures" />
                    </ScrollView>
                </View>
                <View style={{marginTop: 40, paddingHorizontal: 20}}>
                    <Text style={{fontSize:24, fontWeight: '700'}}>Introduction Airbnb Plus</Text>
                    <Text style={{fontWeight: '100', marginTop:10}}>A new selection of homes verified for quality import</Text>
                    <View style={{width: width - 40, height:300, marginTop: 20}}>
                        <Image style={{flex: 1, height: null, width:null, resizeMode:'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd'}} source={{uri : "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}/>
                    </View>
                </View>
                <View style={{marginTop:40, paddingHorizontal: 20}}>
                    <Text style={{fontSize:24, fontWeight: '700', paddingBottom:7}}>Top-rated experience</Text>
                    <Text style={{fontWeight: '100', marginBottom:20}}>Book activities led by hosts on your next trip</Text>
                    <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                        <Home width={width} height={width} name="The Cozy Place" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={2}/>
                        <Home width={width} height={width} name="Palace Dior" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={3}/>
                        <Home width={width} height={width} name="Verendara Terach" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={4}/>
                        <Home width={width} height={width} name="Cappa Place" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={5}/>
                        <Home width={width} height={width} name="La'Dera Femos" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={1}/>
                    </View>
                    
                </View>
                <View style={{marginTop:40, paddingHorizontal: 20}}>
                    <Text style={{fontSize:24, fontWeight: '700', paddingBottom:7}}>Introducing Airbnb Adventure</Text>
                    <Text style={{fontWeight: '100', marginBottom:20}}>Book activities led by hosts on your next trip</Text>
                    <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                        <Home width={width} height={width} name="The Cozy Place" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={2}/>
                        <Home width={width} height={width} name="Palace Dior" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={3}/>
                        <Home width={width} height={width} name="Verendara Terach" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={4}/>
                        <Home width={width} height={width} name="Cappa Place" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={5}/>
                        <Home width={width} height={width} name="La'Dera Femos" price="$433" type="PRIVATE ROOM - 2 BEDS" rating={1}/>
                    </View>
                    
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

export default Explore