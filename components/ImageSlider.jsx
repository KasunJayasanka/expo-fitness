import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { sliderImages } from "../constants";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationValue = useSharedValue(1); // Shared value for animations

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animationValue.value,
        },
      ],
      opacity: animationValue.value,
    };
  });

  const handleSnapToItem = (index) => {
    // Trigger animation
    animationValue.value = withTiming(0.95, { duration: 300 }, () => {
      animationValue.value = withTiming(1, { duration: 300 });
    });

    setCurrentIndex(index);
  };

  

  return (
    <View>
      <Carousel
        data={sliderImages}
        width={wp(100)}
        height={hp(25)}
        autoPlay
        autoPlayInterval={4000}
        onSnapToItem={handleSnapToItem}
        renderItem={({ item }) => (
          <Animated.View style={[styles.itemContainer, animatedStyle]}>
            <Image
              source={item}
              style={styles.image}
            />
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  image: {
    width: wp(90),
    height: "100%",
    resizeMode: "cover",
    borderRadius: wp(8),
  },
});
