import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {

  const navigate = useNavigation();
  
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
      }}>
     
      <TouchableOpacity onPress={() => console.log('Push')}>
      <Text style={{alignSelf: 'center', color: 'white'}}>WELCOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loading;
