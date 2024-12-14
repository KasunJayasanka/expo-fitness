import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar style="dark" />
      <ScrollView>
        {/* Header Section */}
        <View className="mx-5 mt-5">
          {/* First Row: "Ready to" and Avatar */}
          <View className="flex-row justify-between items-center">
            <Text
              className="font-bold tracking-wide text-neutral-700"
              style={{
                fontSize: hp(4.5),
              }}
            >
              Ready to
            </Text>
            {/* Avatar aligned to the right */}
            <Image
              source={require("../assets/images/avatar.png")}
              style={{
                width: wp(12), // Adjust size for better proportion
                height: wp(12),
              }}
              className="rounded-full"
            />
          </View>

          {/* Second Row: "Workouts" and Bell Icon */}
          <View className="flex-row justify-between items-center mt-2">
            <Text
              className="font-bold tracking-wide text-rose-700"
              style={{
                fontSize: hp(4.5),
              }}
            >
              Workouts
            </Text>
            {/* Bell icon aligned to the right */}
            <View
              className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
              style={{ height: wp(12), width: wp(12) }} // Adjust size for better proportion
            >
              <Ionicons name="notifications" size={wp(5)} color="grey" />
            </View>
          </View>
        </View>

        {/* Image Carousel Section */}
        <View style={{ marginVertical: hp(2) }}>
             <ImageSlider />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
