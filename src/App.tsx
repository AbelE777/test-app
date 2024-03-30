import React, {useState, createContext, useEffect} from 'react';
import {View, Text, SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomNavigation} from './navigation/GeneralNavigation';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PaperProvider, DefaultTheme} from 'react-native-paper';
import AwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import StorageProvider from './context/StorageContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const theme = {
  ...DefaultTheme,
  color: {
    background: 'blue'
  }
};

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <StorageProvider>
      <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <CustomNavigation />
        </NavigationContainer>
      </PaperProvider>
      </QueryClientProvider>
    </StorageProvider>
  );
};

export default App;
