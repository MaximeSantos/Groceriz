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

type ItemsNamesType = string[];
type ItemsCrossedType = boolean[];
type ItemType = {
  name: string;
  crossed: boolean;
};
type ItemsType = ItemType[];

// TODO Make it so the TextInput gets focused again after submitting an item
// TODO Add a modal to confirm the deletion of all items on pressing the Clear button

export default function App() {
  const statusBarHeight = Constants.statusBarHeight;
  // For now we dont save any data
  // Later on, we will need to save the data from the current list and load it on startup
  // In the end, we will add the ability to save and load multiple lists

  const [items, setItems] = useState<ItemsType>([
    { name: 'test1', crossed: false },
    { name: 'test2', crossed: false },
  ]);
  const [inputText, onChangeInputText] = React.useState('');

  const handleClearItems = () => setItems([]);
  const handleAddItem = () => {
    if (inputText != '') {
      setItems([...items, { name: inputText, crossed: false }]);
      onChangeInputText('');
    }
  };
  const handleCrossItem = (indexOfItem: number) => {
    setItems(
      items.map((item, j) =>
        indexOfItem == j ? { ...item, crossed: !item.crossed } : item
      )
    );
  };
  const handleDeleteItem = (indexOfItem: number) => {
    setItems(items.filter((_, currIndex) => currIndex != indexOfItem));
  };

  const listOfItems = items.map((item, i) => (
    <View className="flex-row justify-between" key={item + i.toString()}>
      <View>
        <GroceryItem name={item.name} crossed={item.crossed} />
      </View>
      <View className="mr-2 flex-row gap-2">
        <Pressable
          onPress={() => handleCrossItem(i)}
          className="h-10 self-center rounded border border-black bg-green-500 p-2"
        >
          <Text>Cross</Text>
        </Pressable>
        <Pressable
          onPress={() => handleDeleteItem(i)}
          className="h-10 self-center rounded border border-black bg-green-500 p-2"
        >
          <Text>Delete</Text>
        </Pressable>
      </View>
    </View>
  ));

  return (
    <KeyboardAvoidingView className={`flex-column w-screen flex-1 bg-white`}>
      {/* Button bar */}
      <View
        className={`w-screen flex-row justify-center bg-red-400 py-[${statusBarHeight}px]`}
      >
        <Pressable
          onPress={handleClearItems}
          className="h-10 rounded border border-black bg-green-500 p-2"
        >
          <Text>Clear</Text>
        </Pressable>
      </View>
      {/* List of grocery items */}
      <ScrollView className="w-screen flex-1 bg-sky-500">
        <View>{listOfItems}</View>
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
