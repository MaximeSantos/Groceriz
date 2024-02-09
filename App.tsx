import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import GroceryItem from './src/components/GroceryItem';

type itemsType = string[];

export default function App() {
  // For now we dont save any data
  // Later on, we will need to save the data from the current list and load it on startup
  // In the end, we will add the ability to save and load multiple lists
  const [itemsNames, setItemsNames] = useState<itemsType>(['test1', 'test2']);
  const [inputText, onChangeInputText] = React.useState('');

  const handleAddItem = () => {
    if (inputText != '') {
      setItemsNames([...itemsNames, inputText]);
      onChangeInputText('');
    }
  };
  const handleClearItems = () => setItemsNames([]);

  return (
    <KeyboardAvoidingView className="flex-1 w-screen flex-column bg-white">
      {/* Button bar */}
      <View className="flex-row w-screen justify-center bg-red-400">
        <Pressable
          onPress={handleClearItems}
          className="bg-green-500 border-black border rounded p-2"
        >
          <Text>Clear</Text>
        </Pressable>
      </View>
      {/* List of grocery items */}
      <ScrollView className="flex-1 w-screen bg-sky-500">
        <View>
          {itemsNames.map((item, i) => (
            <GroceryItem name={item} key={item + i.toString()} />
          ))}
        </View>
        <View>
          <TextInput
            className="w-[50%] h-10 self-center bg-yellow-500 p-1 m-1 border rounded radius-1"
            onChangeText={onChangeInputText}
            value={inputText}
            onBlur={() => onChangeInputText('')}
            onSubmitEditing={handleAddItem}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
