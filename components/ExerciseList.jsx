import React from "react";
import { View, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated from "react-native-reanimated";
import ExerciseCard from "./ExerciseCard"; // Import the ExerciseCard component
import { useRouter } from "expo-router";


export default function ExerciseList({ data }) {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
            <View
            style={{
              marginBottom: hp(3), // Add spacing between rows
            }}
          >
          <ExerciseCard router={router} index={index} item={item} />
          </View>
        )}
      />

      
    </View>
  );
}
