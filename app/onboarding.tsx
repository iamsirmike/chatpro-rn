import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PrimaryButton from "./components/primaryButton";

const { width, height } = Dimensions.get("window");

interface OnboardingData {
  title: string;
  backgroundColor: string;
  image?: ImageSourcePropType;
}

const onboardingData: OnboardingData[] = [
  {
    title: "Trusted by millions of people, part of one part",
    backgroundColor: "#0E1324",
    image: require("../assets/images/trust.png"),
  },
  {
    title: "Effortless Voice Messaging",
    backgroundColor: "#1C2333",
    image: require("../assets/images/mic.png"),
  },
  {
    title: "Search the world with just an image",
    backgroundColor: "#3D5AFE",
    image: require("../assets/images/gal.png"),
  },
];

const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem: ListRenderItem<OnboardingData> = ({
    item,
  }: {
    item: OnboardingData;
  }) => (
    <View style={[styles.page]}>
      <Image
        source={item.image}
        style={{ height: 260, alignSelf: "center" }} // Replace with your robot image URL
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ marginTop: 60, height: 68, width: 68, alignSelf: "center" }} // Replace with your robot image URL
      />
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
      {/* <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity> */}

      <View style={{ paddingHorizontal: 16, width: "100%", paddingBottom: 40 }}>
        <PrimaryButton title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#142443",
  },
  page: {
    width,
    height,
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "semibold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 90,
  },
  description: {
    color: "#AAB2CE",
    fontSize: 16,
    textAlign: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: height / 1.75,
    width: "100%",
  },
  indicator: {
    width: 37,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EAEBFF",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#2F61F6",
    width: 16,
    height: 8,
  },
  getStartedButton: {
    backgroundColor: "#3D5AFE",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: "100%",
  },
  getStartedText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
