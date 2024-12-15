import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import Animated, {FadeInDown} from 'react-native-reanimated';
import { formatText } from "../utils/textFormatter"; // Import the utility function


export default function ExerciseList({ data }) { // Destructure the `data` prop here
    const router = useRouter();

    return (
        <View>
            <FlatList
                data={data} // Use the destructured `data` array
                numColumns={2}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                renderItem={({ item, index }) => (
                    <ExerciseCard router={router} index={index} item={item} />
                )}
            />
        </View>
    );
}

const ExerciseCard = ({ item, router, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity onPress={()=>router.push({ pathname: "/exerciseDetails", params: item })} className="flex py-3 space-y-2">
                <View className="bg-neutral-200 shadow"
                style={{
                    borderRadius: 25, // Ensure proper rounding
                    overflow: "hidden", // Important for clipping the image to the rounded container
                }}
                >
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit="cover"
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[50px]"
                    />
                </View>

                <Text
                    style={{ fontSize: hp(1.7) }}
                    className="text-neutral-700 font-semibold ml-1 tracking-wide"
                >
                {formatText(item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name)}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};
