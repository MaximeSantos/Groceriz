import { Text, View } from 'react-native';

type GroceryItemProps = {
  name: string;
};

export default function GroceryItem({ name }: GroceryItemProps) {
  return (
    <View className="">
      <Text className="p-10">{name}</Text>
    </View>
  );
}
