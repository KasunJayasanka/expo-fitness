import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import ExerciseList from "../components/ExerciseList";
import FloatingButton from "../components/FloatingButton"; // Import the Floating Button
import { demoExercises } from "../constants";
import { formatText } from "../utils/textFormatter";
import { useEffect } from "react";


export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = React.useState(demoExercises); // Response has been saved to demoExercises for testing due to API request limits
  const item = useLocalSearchParams();

  React.useEffect(() => {
    if (item?.bodyPart) {
        const filteredExercises = demoExercises.filter(
            (exercise) => exercise.bodyPart === item.bodyPart
        );
        setExercises(filteredExercises);
    }
}, [item?.bodyPart]);


  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);
  
  const getExercises = async (bodyPart) => { 
    let data = await fetchExercisesByBodyPart(bodyPart);
    // console.log('got data: ', data);
    setExercises(data);
  };

  return (
    <View style={{ flex: 1 }}>
    
      <ScrollView>
        <StatusBar style="light" />
        <Image
          source={item.image}
          style={{ width: wp(100), height: hp(45) }}
          className="rounded-b-[40px]"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
          style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity>

        {/* Exercise List */}
        <View className="mx-4 space-y-3 mt-4">
          <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
            {formatText(item.name)} Exercises
          </Text>
          <View className="mb-10">
            <ExerciseList data={exercises} />
          </View>
        </View>

         
      </ScrollView>

     
      
    </View>
  );
}