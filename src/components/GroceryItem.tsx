import { Text, View } from 'react-native';

type GroceryItemProps = {
  name: string;
  crossed: boolean;
};

export default function GroceryItem({ name, crossed }: GroceryItemProps) {
  return (
    <Text className={`p-10 ${crossed ? 'text-slate-400 line-through' : ''}`}>
      {name}
    </Text>
  );
}
