import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  GraficaScreen: undefined;
  // PostsScreen: undefined;
};
type PostsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GraficaScreen'
>;

const Login = () => {
  const navigation = useNavigation<PostsScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
    await storeData()
    navigation.replace('GraficaScreen');
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("token", "Bearer")
    } catch (error) {
      Alert.alert(`Error al almacenar datos ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Ingresa tu datos</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  textContainer: {
    marginBottom: 15    
  },
  text:  {
    fontSize: 25
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 19,
    paddingLeft: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 19,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 19
  }
});
