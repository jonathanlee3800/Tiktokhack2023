import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTailwind } from "tailwind-rn/dist";

export default Landing = ({ navigation }) => {

  const tailwind = useTailwind();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Profile")} style = {tailwind('text-blue-600')}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
