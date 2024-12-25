import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LogoutCard from "../components/LogoutCard";
import FloatingButton from "../components/FloatingButton"; // Import FloatingButton
import { logout } from "../api/auth";
import { useDispatch } from "react-redux";

export default function Home() {
  const router = useRouter();
  const bodyPartsData = [{}]; // Dummy data to allow FlatList to render
  const [user, setUser] = useState(null);
  const [showLogoutCard, setShowLogoutCard] = useState(false);

  // Load user details from AsyncStorage
  useEffect(() => {
    const loadUser = async () => {
      const savedUser = await AsyncStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    };

    loadUser();
  }, []);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout(dispatch); // Perform the logout process
      console.log("Logout successful");
  
      // Close the logout card
      setShowLogoutCard(false);
  
      // Navigate to the login screen
      router.push("home");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

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
                  {user && user.firstName ? `${user.firstName} Find` : "Ready to"}
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
                  Your Workouts
                </Text>
                {/* Login or Logout Button */}
                {user ? (
                  <TouchableOpacity
                    onPress={() => setShowLogoutCard(true)} // Show LogoutCard
                    className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                    style={{ height: wp(12), width: wp(12) }}
                  >
                    <Ionicons name="log-out-outline" size={wp(5)} color="grey" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => router.push("login")} // Redirect to Login screen
                    className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                    style={{ height: wp(12), width: wp(12) }}
                  >
                    <Ionicons name="log-in-outline" size={wp(5)} color="grey" />
                  </TouchableOpacity>
                )}
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

      {/* Floating Button */}
      <FloatingButton
      onPress={() => router.push("selectedExercises")} // Navigate to SelectedExercises screen
       />

      {/* Logout Card */}
      <LogoutCard
        visible={showLogoutCard}
        onConfirm={handleLogout} // Confirm Logout
        onCancel={() => setShowLogoutCard(false)} // Close the LogoutCard
      />
    </SafeAreaView>
  );
}
