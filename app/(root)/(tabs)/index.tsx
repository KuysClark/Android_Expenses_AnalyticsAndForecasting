import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
 >
<Link href="/sign-in">Sign In</Link>
<Link href="/categories">Categories</Link>
<Link href="/analysis">Analysis</Link>
<Link href="/records">Record</Link>
<Link href="/account">Account</Link>




    </View>
  );
}
