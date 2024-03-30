import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/android/drawable-hdpi/rn.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
    resizeMode: 'contain',
  },
});

export default Splash;
