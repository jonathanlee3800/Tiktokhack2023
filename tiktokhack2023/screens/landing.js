import { StyleSheet, Text, Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default Landing = ({ navigation }) => {
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
      <Text onPress={() => navigation.navigate("Profile")}>
        Open up App.js to start working on your app!
      </Text>
      <Button
        onPress={() => navigation.navigate("Campaigns")}
        title="Campaigns"
      />
      <StatusBar style="auto" />
    </View>
  );
};
