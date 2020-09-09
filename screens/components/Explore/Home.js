import React from 'react';
import { Text, View, Image} from 'react-native';
import StartRating from 'react-native-star-rating'
const Home = ({width, height, type, price, rating, name}) => {
  return (
    <View style={{width: width /2 - 30, height: width /2 + 10}}>
        <View style={{flex:1}}>
            <Image style={{flex: 1, height: null, width:null, resizeMode:'cover'}} source={{uri : "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}}/>
        </View>
        <View style={{flex:1, alignItems: 'flex-start', padding: 5}}>
            <Text style={{fontSize:10, color: "#b63838",}}>{type} </Text>
            <Text style={{fontSize:12, fontWeight:'bold', paddingVertical: 5}}>{name}</Text>
            <Text style={{fontSize:10 ,paddingBottom: 5}}>{price} per person</Text>
            <StartRating 
                disabled={true}
                maxStart={5}
                rating={rating}
                starSize={8}
            />
        </View>
    </View>
  );
}


export default Home
