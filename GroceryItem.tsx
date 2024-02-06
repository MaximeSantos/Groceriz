import { StyleSheet, Text, View } from 'react-native';

export default function GroceryItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>One grocery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
  },
});
