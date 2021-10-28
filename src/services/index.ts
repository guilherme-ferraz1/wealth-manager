import AsyncStorage from '@react-native-async-storage/async-storage';
import { StoreData, GetData, RemoveData } from './types';

export const storeData = async ({ value, key }: StoreData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e, 'Error storing data');
  }
};

export const getData = async ({ key }: GetData) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e, 'Error fetching data');
    return null;
  }
};

export const removeData = async ({ key }: RemoveData) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e, 'Error removing data');
  }
};
