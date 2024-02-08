import { Button, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GroceryItem from './src/components/GroceryItem';

import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function App() {
  return (
    <View className="flex-1 flex-column bg-white">
      <View className="flex-row w-screen justify-center bg-red-950">
        <Button color="#000" title="Clear"></Button>
      </View>
      <View className="flex-1 w-screen bg-sky-500">
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'column',
//   },
//   navbar: {
//     flex: 1,
//     backgroundColor: '#8a8a8a',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   body: {
//     flex: 10,
//     backgroundColor: '#ff0000',
//   },
// });
