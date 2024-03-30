import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { IPosts } from '../screens/Posts/Posts';

const RenderItem = (item:IPosts) => {
  return (
    <View style={styles.postItem}>
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.id}: {item.title}
        </Text>
      </View>
      <View style={styles.iconbutton}>
        <IconButton
          icon={item.liked ? 'heart' : 'bookmark'}
          iconColor={item.liked ? '#eb2366' : '#4773ba'}
          size={30}
          // onPress={() => handleLike(item.id)}
        />
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  
  postItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleContainer: {
    width: '80%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  iconbutton: {
    width: '20%',
    alignItems: 'flex-end'
  }
});

