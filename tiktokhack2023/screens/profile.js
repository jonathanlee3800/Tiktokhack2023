import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default Profile = ({navigation}) => {
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
      <Text>Profile Name</Text>
      <StatusBar style="auto" />
    </View>
  );
};
