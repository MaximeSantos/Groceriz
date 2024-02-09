import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import GroceryItem from './src/components/GroceryItem';

type itemsType = string[];

export default function App() {
  // For now we dont save any data
  // Later on, we will need to save the data from the current list and load it on startup
  // In the end, we will add the ability to save and load multiple lists
  const [itemsNames, setItemsNames] = useState<itemsType>(['test1', 'test2']);

  const handleClear = () => console.log('Pressed clear.');

  return (
    <View className="flex-1 w-screen flex-column bg-white">
      {/* Button bar */}
      <View className="flex-row w-screen justify-center bg-red-400">
        <Pressable onPress={handleClear} className="bg-green-500">
          <Text>Clear</Text>
        </Pressable>
      </View>
      {/* List of grocery items */}
      <View className="flex-1 w-screen bg-sky-500">
        {itemsNames.map((item) => (
          <GroceryItem name={item} key={item} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
