import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { formatText } from "../utils/textFormatter"; // Import the utility function


export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header Image Section */}
            <View
                style={{
                    width: wp(100),
                    height: hp(40), // Adjusted image height (40% of the screen)
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    overflow: 'hidden', // Ensures the rounded corners work
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 3, // Shadow for Android
                }}
            >
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            {/* Back Button */}
            <TouchableOpacity
                onPress={() => router.back()}
                className="absolute top-8 right-4 bg-white rounded-full p-2 shadow-md"
            >
                <AntIcons name="closecircle" size={hp(4)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Details Section */}
            <ScrollView
                className="mx-4 mt-3"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 60,
                    paddingTop: 10,
                    paddingHorizontal: 10,
                }}
            >
                <View>
                    {/* Title */}
                    <Animated.Text
                        entering={FadeInDown.duration(300).springify()}
                        style={{
                            fontSize: hp(3.5),
                            marginBottom: hp(0.5),
                            textAlign: 'left',
                        }}
                        className="font-bold text-neutral-800 tracking-wide"
                    >
                        {formatText(item.name)}
                    </Animated.Text>

                    {/* Equipment */}
                    <Animated.View
                        entering={FadeInDown.duration(300).delay(100).springify()}
                        style={{ marginBottom: hp(2) }}
                        className="p-3 bg-neutral-100 rounded-lg shadow-md"
                    >
                        <Text style={{ fontSize: hp(2) }} className="text-neutral-700">
                            Equipment:{' '}
                            <Text className="font-bold text-neutral-900">
                                {formatText(item?.equipment)}
                            </Text>
                        </Text>
                    </Animated.View>

                    {/* Secondary Muscles */}
                    <Animated.View
                        entering={FadeInDown.duration(300).delay(200).springify()}
                        style={{ marginBottom: hp(2) }}
                        className="p-3 bg-neutral-100 rounded-lg shadow-md"
                    >
                        <Text style={{ fontSize: hp(2) }} className="text-neutral-700">
                            Secondary Muscles:{' '}
                            <Text className="font-bold text-neutral-900">
                                {formatText(item?.secondaryMuscles)}
                            </Text>
                        </Text>
                    </Animated.View>

                    {/* Target */}
                    <Animated.View
                        entering={FadeInDown.duration(300).delay(300).springify()}
                        style={{ marginBottom: hp(2) }}
                        className="p-3 bg-neutral-100 rounded-lg shadow-md"
                    >
                        <Text style={{ fontSize: hp(2) }} className="text-neutral-700">
                            Target:{' '}
                            <Text className="font-bold text-neutral-900">
                                {formatText(item?.target)}
                            </Text>
                        </Text>
                    </Animated.View>

                    {/* Instructions */}
                    <View>
                        <Animated.Text
                            entering={FadeInDown.duration(300).delay(400).springify()}
                            style={{
                                fontSize: hp(3),
                                marginBottom: hp(1),
                            }}
                            className="font-bold text-neutral-800 tracking-wide"
                        >
                            Instructions
                        </Animated.Text>

                        <View style={{ gap: hp(1.5) }}>
                            {item.instructions.split(',').map((instruction, index) => {
                                return (
                                    <Animated.Text
                                        entering={FadeInDown.duration(300).delay((index + 5) * 100).springify()}
                                        key={index}
                                        style={{
                                            fontSize: hp(1.9),
                                            paddingVertical: hp(1),
                                            paddingHorizontal: wp(2),
                                        }}
                                        className="text-neutral-700 bg-neutral-50 rounded-lg shadow-sm"
                                    >
                                        {`${index + 1}. ${formatText(instruction.trim())}`}
                                    </Animated.Text>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
