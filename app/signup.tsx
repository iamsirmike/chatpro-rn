import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  // TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import * as Yup from "yup";
import PrimaryButton from "./components/primaryButton";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  fullName: Yup.string().required("Please enter your name"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

export default function Signup() {
  const { width } = Dimensions.get("window");

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          router.push("/onboarding");
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView
              style={{ flex: 1 }}
              enableOnAndroid={true} // Ensures functionality on Android
              extraHeight={50} // Adjusts spacing above the keyboard
              keyboardShouldPersistTaps="handled"
              enableAutomaticScroll={true}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={{ marginTop: 60 }} // Replace with your robot image URL
                />
              </View>
              <Text style={{ fontSize: 32, color: "#FFFFFF" }}> Sign up</Text>
              <View style={{ height: 25 }} />
              <TextInput
                left={<TextInput.Icon icon="account-outline" />}
                mode="outlined"
                placeholder="Full Name"
                placeholderTextColor="#A1A5C1"
                editable
                scrollEnabled={false}
                maxLength={40}
                onChangeText={handleChange("fullName")}
                value={values.fullName}
                contentStyle={{
                  color: "#A1A5C1",
                  borderRadius: 10,
                  fontSize: 12,
                }}
                outlineStyle={{
                  paddingVertical: 20,
                  width: width * 0.9,
                  borderRadius: 10,
                }}
                style={{
                  height: 70,
                  width: width * 0.9,
                  fontSize: 12,
                }}
              />
              {errors.fullName && (
                <Text style={styles.errorStyle}>{errors.fullName}</Text>
              )}
              <View style={{ height: 10 }} />
              <TextInput
                left={<TextInput.Icon icon="email-outline" />}
                mode="outlined"
                placeholder="Email"
                placeholderTextColor="#A1A5C1"
                editable
                scrollEnabled={false}
                maxLength={40}
                onChangeText={handleChange("email")}
                value={values.email}
                contentStyle={{
                  color: "#A1A5C1",
                  borderRadius: 10,
                  fontSize: 12,
                }}
                outlineStyle={{
                  paddingVertical: 20,
                  width: width * 0.9,
                  borderRadius: 10,
                }}
                style={{
                  height: 70,
                  width: width * 0.9,
                  fontSize: 12,
                }}
              />
              {errors.email && (
                <Text style={styles.errorStyle}>{errors.email}</Text>
              )}
              <View style={{ height: 10 }} />

              <TextInput
                left={<TextInput.Icon icon="lock-outline" />}
                mode="outlined"
                placeholder="Password"
                placeholderTextColor="#A1A5C1"
                editable
                scrollEnabled={false}
                maxLength={40}
                onChangeText={handleChange("password")}
                value={values.password}
                secureTextEntry={true}
                contentStyle={{
                  color: "#A1A5C1",
                  borderRadius: 10,
                  fontSize: 12,
                }}
                outlineStyle={{
                  paddingVertical: 20,
                  width: width * 0.9,
                  borderRadius: 10,
                }}
                style={{
                  height: 70,
                  width: width * 0.9,
                  fontSize: 12,
                }}
              />
              {errors.password && (
                <Text style={styles.errorStyle}>{errors.password}</Text>
              )}
              <View style={{ height: 10 }} />
              <TextInput
                left={<TextInput.Icon icon="lock-outline" />}
                mode="outlined"
                placeholder="Confirm Password"
                placeholderTextColor="#A1A5C1"
                editable
                scrollEnabled={false}
                maxLength={40}
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={true}
                contentStyle={{
                  color: "#A1A5C1",
                  borderRadius: 10,
                  fontSize: 12,
                }}
                outlineStyle={{
                  paddingVertical: 20,
                  width: width * 0.9,
                  borderRadius: 10,
                }}
                style={{
                  height: 70,
                  width: width * 0.9,
                  fontSize: 12,
                }}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorStyle}>{errors.confirmPassword}</Text>
              )}

              <View style={{ height: 30 }} />
              <PrimaryButton
                title="Sign up"
                onPress={() => {
                  handleSubmit();
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 25,
                  paddingBottom: 50,
                }}
              >
                <Text style={styles.textStyle}>Already have an account?</Text>
                <Pressable onPress={() => router.dismiss(1)}>
                  <Text style={[styles.textStyle, { color: "#2F61F6" }]}>
                    Sign in
                  </Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
          </View>
        )}
      </Formik>

      {/* </ScrollView> */}
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
  errorStyle: {
    color: "red",
    fontSize: 12,
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
