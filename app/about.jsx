import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { router } from 'expo-router';

export default function AboutPage() {
    const handleOpenGitHub = () => {
        Linking.openURL('https://github.com/KasunJayasanka/expo-fitness.git');
    };

    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            

            <Image
                className="h-full w-full absolute"
                source={require('../assets/images/background.png')}
                style={{ height: hp(75) }}
            />

            {/* SafeAreaView for Back Button and Title */}
            <SafeAreaView>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        paddingHorizontal: wp(8),
                        marginTop: hp(2),
                    }}
                >
                    {/* Back Button */}
                   <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    position: 'absolute',
                    top: hp(-0.5),
                    left: wp(4),
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: 10,
                    borderRadius: 30,
                    elevation: 5,
                    zIndex: 10, // Ensure the button is above other components
                }}
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

                    {/* Title */}
                    <Text className="text-white text-4xl font-bold flex-1 text-center">About</Text>
                </View>
            </SafeAreaView>

            

            {/* Content */}
            <View className="h-full w-full flex justify-between items-center">
                {/* Main Content */}
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: wp(6),
                        paddingBottom: hp(5),
                    }}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white overlay
                        borderRadius: 20,
                        width: wp(90),
                        height: hp(90),
                    }}
                >
                    {/* Tech Stack Section */}
                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="mb-8">
                        <Text
                            className="text-gray-600 font-bold text-2xl mb-4 text-center"
                            style={{ marginTop: hp(5) }}
                        >
                            Made with
                        </Text>
                        <View style={{ alignItems: 'center', rowGap: hp(3), marginTop: hp(1) }}>
                            {/* React Native & Expo */}
                            <View style={{ alignItems: 'center', marginBottom: hp(2) }}>
                                <Image
                                    source={require('../assets/images/react-native-expo-logo.png')}
                                    style={{ width: wp(30), height: hp(10), marginBottom: hp(1) }}
                                    resizeMode="contain"
                                />
                                <Text className="text-xl text-gray-800">React Native & Expo</Text>
                            </View>
                            {/* Firebase */}
                            <View style={{ alignItems: 'center', marginBottom: hp(2) }}>
                                <Image
                                    source={require('../assets/images/firebase-logo.png')}
                                    style={{ width: wp(30), height: hp(10), marginBottom: hp(1) }}
                                    resizeMode="contain"
                                />
                                <Text className="text-xl text-gray-800">Firebase</Text>
                            </View>
                            {/* TailwindCSS */}
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/tailwindcss-logo.png')}
                                    style={{ width: wp(30), height: hp(10), marginBottom: hp(1) }}
                                    resizeMode="contain"
                                />
                                <Text className="text-xl text-gray-800">TailwindCSS</Text>
                            </View>
                            {/* React Native Reanimated */}
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/reactnative-reanimated-logo.png')}
                                    style={{ width: wp(30), height: hp(10), marginBottom: hp(1) }}
                                    resizeMode="contain"
                                />
                                <Text className="text-xl text-gray-800">React Native Reanimated</Text>
                            </View>
                            {/* Redux */}
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/redux-logo.png')}
                                    style={{ width: wp(30), height: hp(10), marginBottom: hp(1) }}
                                    resizeMode="contain"
                                />
                                <Text className="text-xl text-gray-800">Redux</Text>
                            </View>
                             {/* Rapid API */}
                             <View style={{ alignItems: 'center' }}>
                             <Image
                                 source={require('../assets/images/rapid-api-logo.png')}
                                 style={{ width: wp(30), height: hp(10), marginBottom: hp(1) }}
                                 resizeMode="contain"
                             />
                             <Text className="text-xl text-gray-800">Rapid API</Text>
                         </View>
                        </View>
                    </Animated.View>
                </ScrollView>

                {/* Footer */}
                <View
                    style={{
                        width: wp(90),
                        paddingHorizontal: wp(2),
                        marginBottom: hp(2),
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 10,
                        paddingTop: hp(5),
                        paddingBottom: hp(20),
                    }}
                >
                    {/* GitHub Section */}
                    <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()} className="mb-6">
                        <Text className="text-gray-600 font-bold text-2xl mb-4 text-center">GitHub</Text>
                        <TouchableOpacity
                            onPress={handleOpenGitHub}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#38BDF8',
                                padding: 12,
                                borderRadius: 10,
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={require('../assets/images/github-logo.png')}
                                style={{ width: wp(8), height: wp(8), marginRight: wp(2) }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-lg font-bold">View Repository</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Text className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Fitness App by Kasun Jayasanka
                    </Text>
                </View>
            </View>
        </View>
    );
}
