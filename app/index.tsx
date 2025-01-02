import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./components/primaryButton";

export default function App() {
  const { width, height } = Dimensions.get("window");

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Half-Circle */}
      <View
        style={[
          styles.halfCircle,
          {
            top: height * 0.55,
            right: width * 0.94,
          },
        ]}
      />

      {/* Bottom Half-Circle */}
      <View
        style={[
          styles.halfCircle,
          {
            bottom: height * 0.4,
            left: width * 0.94,
          },
        ]}
      />

      {/* Icon or Illustration */}

      <Image
        source={require("../assets/images/logo.png")}
        style={{ marginTop: 60 }} // Replace with your robot image URL
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to Ai Chat Pro</Text>

      <Image
        source={require("../assets/images/line.png")}
        // Replace with your robot image URL
      />

      {/* Subtitle */}
      <Text style={styles.subtitle}>Everybody Can Do</Text>

      {/* Button */}
      <View style={{ height: 100 }} />
      <View style={{ paddingHorizontal: 16, width: "100%" }}>
        <PrimaryButton
          title="Get Started"
          onPress={() => {
            router.push("/login");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#142443",
    justifyContent: "center",
    alignItems: "center",
  },
  halfCircle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: "#1C2333",
    opacity: 0.4,
    borderColor: "#2F61F6",
    borderWidth: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#1C2333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#2F61F6",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 120,
    paddingVertical: 20,
    marginTop: 120,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
