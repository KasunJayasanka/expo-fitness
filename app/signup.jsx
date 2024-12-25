import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import an icon library
import { signUp } from "../api/auth"; // Import Sign-Up API
import { saveUserData } from "../api/fireStore"; // Import Firestore API

export default function SignUp() {
    const router = useRouter();

    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Validation logic
    const validateFields = () => {
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email address';
        }
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    

    const handleSignUp = async () => {
    if (validateFields()) {
        try {
        // Create User with Email and Password
        const user = await signUp(email, password);

        // Save User Data in Firestore
        const userData = {
            firstName,
            lastName,
            email,
            createdAt: new Date().toISOString(),
        };
        await saveUserData(user.uid, userData);

        alert("Sign-Up Successful!");
        router.push("login"); // Navigate to Login screen
        } catch (error) {
        alert(error); // Show error message
        }
    }
    };


    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <Image
                className="h-full w-full absolute"
                source={require('../assets/images/background.png')}
                style={{ height: hp(85) }}
            />

            {/* lights */}
            <View className="flex-row justify-around w-full absolute">
                <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify()}
                    className="h-[225] w-[90]"
                    source={require('../assets/images/light.png')}
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify()}
                    className="h-[160] w-[65]"
                    source={require('../assets/images/light.png')}
                />
            </View>

            {/* Title and Form */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: hp(5), // Position the form below the background image
                    paddingHorizontal: 5,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View className="h-full w-full flex justify-around pt-40 pb-10">
                    {/* Title */}
                    <View className="flex items-center">
                        <Animated.Text
                            entering={FadeInUp.duration(1000).springify()}
                            className="text-white font-bold tracking-wider text-5xl"
                        >
                            Sign Up
                        </Animated.Text>
                    </View>

                    {/* Form */}
                    <View className="flex items-center mx-7 space-y-8">
                        {/* First Name Input */}
                        <Animated.View
                            entering={FadeInDown.duration(1000).springify()}
                            className="bg-black/5 p-5 rounded-2xl w-full"
                            style={{ marginBottom: 10 }}
                        >
                            <TextInput
                                placeholder="First Name"
                                placeholderTextColor="gray"
                                className="text-black"
                                value={firstName}
                                onChangeText={(text) => setFirstName(text)}
                            />
                            {errors.firstName && (
                                <Text className="text-red-500 text-sm mt-1">{errors.firstName}</Text>
                            )}
                        </Animated.View>

                        {/* Last Name Input */}
                        <Animated.View
                            entering={FadeInDown.delay(100).duration(1000).springify()}
                            className="bg-black/5 p-5 rounded-2xl w-full"
                            style={{ marginBottom: 10 }}
                        >
                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor="gray"
                                className="text-black"
                                value={lastName}
                                onChangeText={(text) => setLastName(text)}
                            />
                            {errors.lastName && (
                                <Text className="text-red-500 text-sm mt-1">{errors.lastName}</Text>
                            )}
                        </Animated.View>

                        {/* Email Input */}
                        <Animated.View
                            entering={FadeInDown.delay(200).duration(1000).springify()}
                            className="bg-black/5 p-5 rounded-2xl w-full"
                            style={{ marginBottom: 10 }}
                        >
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="gray"
                                className="text-black"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                            {errors.email && (
                                <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
                            )}
                        </Animated.View>

                        {/* Password Input */}
                        <Animated.View
                            entering={FadeInDown.delay(300).duration(1000).springify()}
                            className="bg-black/5 p-5 rounded-2xl w-full"
                            style={{ marginBottom: 10 }}
                        >
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="gray"
                                secureTextEntry
                                className="text-black"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            {errors.password && (
                                <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>
                            )}
                        </Animated.View>

                        {/* Confirm Password Input */}
                        <Animated.View
                            entering={FadeInDown.delay(400).duration(1000).springify()}
                            className="bg-black/5 p-5 rounded-2xl w-full"
                            style={{ marginBottom: 10 }}
                        >
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="gray"
                                secureTextEntry
                                className="text-black"
                                value={confirmPassword}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                            {errors.confirmPassword && (
                                <Text className="text-red-500 text-sm mt-1">{errors.confirmPassword}</Text>
                            )}
                        </Animated.View>

                        {/* Sign Up Button */}
                        <Animated.View
                            entering={FadeInDown.delay(500).duration(1000).springify()}
                            className="w-full"
                            style={{ marginBottom: 20 }}
                        >
                            <TouchableOpacity
                                className="w-full bg-rose-400 p-4 rounded-2xl"
                                onPress={handleSignUp}
                            >
                                <Text className="text-xl font-bold text-white text-center">Sign Up</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Login Link */}
                        <Animated.View
                            entering={FadeInDown.delay(600).duration(1000).springify()}
                            className="flex-row justify-center"
                        >
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => router.push('login')}>
                                <Text className="text-rose-600 font-semibold">Login</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </ScrollView>

            {/* Back Button */}
            <TouchableOpacity
                onPress={() => router.push('home')} // Navigate to the Home screen
                style={{
                    position: 'absolute',
                    top: hp(5), // Adjust top position
                    left: wp(4), // Adjust left position
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
                    padding: 10,
                    borderRadius: 30,
                    elevation: 5, // For shadow on Android
                }}
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    );
}
