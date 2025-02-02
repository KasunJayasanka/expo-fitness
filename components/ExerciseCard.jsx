import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, removeExercise } from "../redux/slices/exerciseSlice";
import Ionicons from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { formatText } from "../utils/textFormatter";

const ExerciseCard = ({ item, router, index }) => {
    const dispatch = useDispatch();
    const selectedExercises = useSelector((state) => state.exercise.selectedExercises);

    // Check if the item is already selected
    const isSelected = selectedExercises.some((exercise) => exercise.id === item.id);

    const handleSelect = (exercise) => {
        if (isSelected) {
            // Remove exercise
            dispatch(removeExercise(exercise));
        } else {
            // Add exercise
            dispatch(addExercise(exercise));
        }
    };

    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <View
                className="bg-neutral-200 shadow"
                style={{
                    borderRadius: 25,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <TouchableOpacity
                    onPress={() => router.push({ pathname: "/exerciseDetails", params: item })}
                >
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit="cover"
                        style={{ width: wp(44), height: wp(52) }}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: hp(1.7),
                        margin: wp(2),
                        color: "#4a4a4a",
                        fontWeight: "bold",
                    }}
                >
                    {formatText(item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name)}
                </Text>

                <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    style={{
                        position: "absolute",
                        top: wp(2),
                        right: wp(2),
                        backgroundColor: isSelected ? "#f43f5e" : "#10b981",
                        borderRadius: wp(5),
                        width: wp(10),
                        height: wp(10),
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 5,
                    }}
                >
                    <Ionicons name={isSelected ? "remove" : "add"} size={hp(3)} color="#fff" />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

export default ExerciseCard;
