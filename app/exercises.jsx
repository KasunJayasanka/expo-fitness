import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import { useEffect } from "react";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDb";
import { demoExercises } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";
import { formatText } from "../utils/textFormatter"; // Import the utility function



export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = React.useState(demoExercises);
  const item = useLocalSearchParams();
  console.log("got item: ", item);

  useEffect(() => {
    // if (item) getExercises(item.name);
  }, [item]);
  
  const getExercises = async (bodyPart) => { 
    let data = await fetchExercisesByBodyPart(bodyPart);
    // console.log('got data: ', data);
    setExercises(data);
  };
  

  return (
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

        {/* exercises */}
        <View className="mx-4 space-y-3 mt-4">
            <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
            {formatText(item.name)} Exercises {/* Format the text */}
            </Text>
            <View className="mb-10">
                <ExerciseList data={exercises}/>
            </View>
        </View>


    </ScrollView>

  );
}
