import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const Category = (props) => {
  return (
    <View style={{height:150, width:165, marginLeft: 20, borderRadius:10, overflow:'hidden', shadowOffset:{width:0, height:0}, shadowColor:'#000', borderColor:'#ddd', borderWidth: 0.5, shadowOpacity:1 ,elevation:1, backgroundColor:'#fff',}}>
        <View style={{flex:2}}>
            <Image source={{uri: props.imageUri}} style={{flex:1, width: null, height:null, resizeMode:'cover'}}/>
            
        </View>
        <View style={{ padding: 12}}> 
            <Text style={{ fontWeight:'500'}}>{props.name}</Text>
        </View>
    </View>
  );
}


export default Category
