import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import ExerciseList from "../components/ExerciseList"; // Use the existing ExerciseList component

export default function SelectedExercises() {
  const router = useRouter();
  const selectedExercises = useSelector((state) => state.exercise.selectedExercises); // Get selected exercises from Redux

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar style="light" />

        {/* Header Section */}
        <View
          style={{
            width: wp(100),
            height: hp(15),
            backgroundColor: "#f43f5e",
            borderBottomLeftRadius: hp(4),
            borderBottomRightRadius: hp(4),
            position: "relative",
          }}
        >
          {/* Back Button and Header Text */}
          <View
            style={{
              position: "absolute",
              bottom: hp(2), // Align to the bottom of the header
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingHorizontal: wp(5),
            }}
          >
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "white",
                height: hp(5),
                width: hp(5),
                borderRadius: hp(2.5),
                justifyContent: "center",
                alignItems: "center",
                marginRight: wp(4),
              }}
            >
              <Ionicons name="caret-back-outline" size={hp(3)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Header Text */}
            <Text
              style={{
                fontSize: hp(3),
                fontWeight: "bold",
                color: "white",
                flex: 1,
                textAlign: "center",
              }}
            >
              Selected Exercises
            </Text>
          </View>
        </View>

        {/* Exercise List */}
        <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
          {selectedExercises.length > 0 ? (
            <ExerciseList data={selectedExercises} /> // Pass selectedExercises to ExerciseList
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: hp(2.5),
                marginTop: hp(5),
                color: "#9ca3af",
              }}
            >
              No exercises selected.
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}