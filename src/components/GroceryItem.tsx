import { Text } from 'react-native';

type GroceryItemProps = {
  name: string;
  crossed: boolean;
};

export default function GroceryItem({ name, crossed }: GroceryItemProps) {
  return (
    <Text
      className={`font-inter text-zinc-100 ${crossed ? 'text-zinc-500 line-through' : ''}`}
    >
      {name}
    </Text>
  );
}
