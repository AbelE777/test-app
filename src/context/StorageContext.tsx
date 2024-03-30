import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import {MMKVLoader, MMKVInstance} from 'react-native-mmkv-storage';

interface IMmkvStorage {
  MMKV: MMKVInstance;
}
export const StorageContext = createContext<IMmkvStorage>({} as IMmkvStorage);

const StorageProvider = ({children}: any) => {
  const MMKV = new MMKVLoader().initialize();
  return (
    <StorageContext.Provider value={{MMKV}}>{children}</StorageContext.Provider>
  );
};

export default StorageProvider;
