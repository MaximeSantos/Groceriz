import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
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

  const handleClear = () => setItemsNames([]);
  // onPress, should open textbox that gets focused so the user can type the name of next item
  const handleAdd = () => {
    if (inputText != '') {
      setItemsNames([...itemsNames, inputText]);
      onChangeInputText('');
    }
  };

  return (
    <View className="flex-1 w-screen flex-column bg-white">
      {/* Button bar */}
      <View className="flex-row w-screen justify-center bg-red-400">
        <Pressable
          onPress={handleClear}
          className="bg-green-500 border-black border rounded p-2"
        >
          <Text>Clear</Text>
        </Pressable>
      </View>
      {/* List of grocery items */}
      <View className="flex-1 w-screen bg-sky-500">
        <View>
          {itemsNames.map((item, i) => (
            <GroceryItem name={item} key={item.toString() + i.toString()} />
          ))}
        </View>
        <View>
          <TextInput
            className="flex-1 w-[50%] self-center bg-yellow-500 p-1 m-1 border rounded radius-1"
            onChangeText={onChangeInputText}
            value={inputText}
          />
          {inputText ? (
            <Pressable
              onPress={handleAdd}
              className="bg-green-500 self-center border-black border p-2"
            >
              <Text>Add</Text>
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
