import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter(); // Initialize router
  const bodyPartsData = [{}]; // Dummy data to allow FlatList to render

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar style="dark" />
      <FlatList
        data={bodyPartsData}
        keyExtractor={(_, index) => index.toString()} // Dummy key
        ListHeaderComponent={
          <>
            {/* Header Section */}
            <View className="mx-5 mt-5">
              <View className="flex-row justify-between items-center">
                <Text
                  className="font-bold tracking-wide text-neutral-700"
                  style={{
                    fontSize: hp(4.5),
                  }}
                >
                  Ready to
                </Text>
                <Image
                  source={require("../assets/images/avatar.png")}
                  style={{
                    width: wp(12),
                    height: wp(12),
                  }}
                  className="rounded-full"
                />
              </View>
              <View className="flex-row justify-between items-center mt-2">
                <Text
                  className="font-bold tracking-wide text-rose-700"
                  style={{
                    fontSize: hp(4.5),
                  }}
                >
                  Workouts
                </Text>
                {/* Login Icon */}
                <TouchableOpacity
                  onPress={() => router.push("login")} // Redirect to Login screen
                  className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                  style={{ height: wp(12), width: wp(12) }}
                >
                  <Ionicons name="log-in-outline" size={wp(5)} color="grey" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Image Carousel Section */}
            <View style={{ marginVertical: hp(2) }}>
              <ImageSlider />
            </View>
          </>
        }
        renderItem={null} // Nothing to render here
        ListFooterComponent={<BodyParts />}
      />
    </SafeAreaView>
  );
}
