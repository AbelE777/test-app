import {createStackNavigator} from '@react-navigation/stack';
import {Login, Splash, Grafica} from '../screens';

export type RootStackParams = {
  LoginScreen: undefined;
  SplashScreen: undefined;
  GraficaScreen: undefined
};

const Stack = createStackNavigator<RootStackParams>();

export const CustomNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GraficaScreen"
        component={Grafica}
        options={{headerShown: true, title: "Gráfica"}}
      />
    </Stack.Navigator>
  );
};
