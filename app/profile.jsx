import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getUserFromStorage, logout } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);

    // Access selected exercises from Redux
    const selectedExercises = useSelector((state) => state.exercise.selectedExercises);

    // Load user details from AsyncStorage
    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUserFromStorage();
            if (userData) {
                setUser(userData);
            }
        };
        fetchUser();
    }, []);

    // Handle Logout
    const handleLogout = async () => {
        try {
            await logout(dispatch);
            router.replace('login'); // Navigate to Login screen
        } catch (error) {
            console.error("Error during logout:", error);
        }
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
                        paddingHorizontal: wp(4),
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
                    <Text className="text-white text-4xl font-bold flex-1 text-center">Profile</Text>
                </View>
            </SafeAreaView>

            {/* Scrollable Content */}
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: wp(6),
                    paddingBottom: hp(10),
                    paddingTop: hp(7),
                }}
            >
                {/* User Info */}
                <Animated.View entering={FadeInUp.duration(1000).springify()} className="items-center">
                    <Image
                        source={require('../assets/images/avatar.webp')}
                        style={{
                            width: wp(30),
                            height: wp(30),
                            borderRadius: wp(15),
                            borderColor: "#f43f5e",
                            marginBottom: 15,
                            borderWidth: 3,
                            
                        }}
                    />
                    <Text className="text-black text-2xl font-bold">
                        {user?.firstName && user?.lastName
                            ? `${user.firstName} ${user.lastName}`
                            : 'Guest User'}
                    </Text>
                    <Text className="text-gray-500 text-lg" style={{ marginBottom: hp(4) }}>
                        Email: {user?.email || 'N/A'}
                    </Text>
                </Animated.View>

                {/* Navigation Buttons */}
                <Animated.View
                    entering={FadeInDown.duration(1000).springify()}
                    className="w-full"
                    style={{ marginTop: hp(2) }}
                >
                    {/* Edit Profile Button */}
                    <TouchableOpacity
                        className="bg-yellow-500 p-4 rounded-2xl flex flex-row justify-center items-center mb-4"
                        onPress={() => router.push('editProfile')}
                        style={{ paddingHorizontal: wp(5) }}
                    >
                        <MaterialIcons name="edit" size={24} color="#fff" />
                        <Text className="text-xl font-bold text-white text-center ml-2">
                            Edit Profile
                        </Text>
                    </TouchableOpacity>

                    {/* Navigate to Selected Exercises */}
                    <TouchableOpacity
                        className="bg-blue-500 p-4 rounded-2xl flex flex-row justify-between items-center mb-4"
                        onPress={() => router.push('selectedExercises')}
                        style={{ paddingHorizontal: wp(5) }}
                    >
                        <MaterialIcons name="fitness-center" size={24} color="#fff" />
                        <Text className="text-xl font-bold text-white text-center ml-2">
                            My Exercises
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#f43f5e",
                                borderRadius: wp(4),
                                paddingHorizontal: wp(3),
                                paddingVertical: hp(0.5),
                            }}
                        >
                            <Text className="text-white text-sm font-bold">
                                {selectedExercises.length || 0} Selected
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* About Button */}
                    <TouchableOpacity
                        className="bg-blue-500 p-4 rounded-2xl flex flex-row justify-center items-center"
                        onPress={() => router.push('about')}
                    >
                        <Ionicons name="information-circle-outline" size={24} color="#fff" />
                        <Text className="text-xl font-bold text-white text-center ml-2">
                            About
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>

            {/* Logout Button */}
            <View
                style={{
                    position: "absolute",
                    bottom: hp(5),
                    width: "100%",
                    paddingHorizontal: wp(10),
                }}
            >
                <TouchableOpacity
                    className="bg-rose-400 p-4 rounded-2xl flex flex-row justify-center items-center"
                    onPress={handleLogout}
                    style={{ marginTop: hp(2) }}
                >
                    <Ionicons name="log-out-outline" size={24} color="#fff" />
                    <Text className="text-xl font-bold text-white text-center ml-2">
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
