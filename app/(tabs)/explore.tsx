import { Link } from "expo-router";
import { View } from "react-native";

export default function Explore() {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Booking</Link>
      <Link href={"/listing/1337"}>Listing details</Link>
    </View>
  );
}
