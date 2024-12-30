import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useSelector } from "react-redux"; // Redux hooks
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons or any icon library
import { useRouter } from "expo-router";

const FloatingButton = () => {
  const selectedExercises = useSelector((state) => state.exercise.selectedExercises); // Get selected exercises count from Redux
  const router = useRouter();

  const handleNavigation = async () => {
    try {
      const user = await AsyncStorage.getItem("user"); // Check if user is logged in
      if (user) {
        // User is logged in
        router.push("selectedExercises");
      } else {
        // User is not logged in
        router.push("login");
      }
    } catch (error) {
      console.error("Error checking user login status:", error);
      router.push("login"); // Fallback to login screen in case of error
    }
  };

  return (
    <TouchableOpacity
      onPress={handleNavigation} // Navigate based on login status
      style={{
        position: "absolute",
        bottom: hp(2),
        right: wp(5),
        backgroundColor: "#f43f5e",
        borderRadius: wp(12),
        height: wp(15),
        width: wp(15),
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      }}
    >
      <View style={{ alignItems: "center" }}>
        {/* Cart Icon */}
        <Ionicons name="cart-outline" size={wp(6)} color="#fff" />

        {/* Selected Count */}
        <Text
          style={{
            color: "#fff",
            fontSize: wp(3.5),
            fontWeight: "bold",
            marginTop: 2,
          }}
        >
          {selectedExercises.length} {/* Display the count of selected exercises */}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FloatingButton;
