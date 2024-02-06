// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import GroceryItem from './GroceryItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Button color="#000" title="Add"></Button>
        <Button color="#000" title="Remove"></Button>
        <Button color="#000" title="Clear"></Button>
      </View>
      <View style={styles.body}>
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  navbar: {
    flex: 1,
    backgroundColor: '#8a8a8a',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  body: {
    flex: 10,
    backgroundColor: '#ff0000',
  },
});
