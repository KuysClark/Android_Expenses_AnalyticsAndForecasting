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
  <Text className="font-bold text-lg my-10">welcome to our app</Text>
<Link href="/records" >Record</Link>
<Link href="/sign-in">Sign In</Link>
<Link href="/categories">Categories</Link>
<Link href="/analysis">Analysis</Link>
<Link href="/account">Account</Link>




    </View>
  );
}
