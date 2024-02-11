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
import Constants from 'expo-constants';
import { NativeWindStyleSheet } from 'nativewind';
import GroceryItem from './src/components/GroceryItem';

type itemsType = string[];

// TODO Make it so the TextInput gets focused again after submitting an item

export default function App() {
  const statusBarHeight = Constants.statusBarHeight;
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
    <KeyboardAvoidingView className={`flex-column w-screen flex-1 bg-white`}>
      {/* Button bar */}
      <View
        className={`w-screen flex-row justify-center bg-red-400 py-[${statusBarHeight}px]`}
      >
        <Pressable
          onPress={handleClearItems}
          className="rounded border border-black bg-green-500 p-2"
        >
          <Text>Clear</Text>
        </Pressable>
      </View>
      {/* List of grocery items */}
      <ScrollView className="w-screen flex-1 bg-sky-500">
        <View>
          {itemsNames.map((item, i) => (
            <GroceryItem name={item} key={item + i.toString()} />
          ))}
        </View>
        <View>
          <TextInput
            className="radius-1 m-1 h-10 w-[50%] self-center rounded border bg-yellow-500 p-1"
            onChangeText={onChangeInputText}
            value={inputText}
            onBlur={() => onChangeInputText('')}
            onSubmitEditing={handleAddItem}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="transparent" translucent style="dark" />
    </KeyboardAvoidingView>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
