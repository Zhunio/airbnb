import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ListingById() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Listing By Id {id}</Text>
    </View>
  );
}
