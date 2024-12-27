import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';

export default function ResetPassword() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false); // State for loading animation

    // Validation function
    const validateEmail = () => {
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            setEmailError('Please enter a valid email address.');
            return false;
        }
        setEmailError('');
        return true;
    };

    // Firebase Auth instance
    const auth = getAuth();

    // Handle Password Reset
    const handleResetPassword = async () => {
        if (!validateEmail()) {
            return;
        }

        setLoading(true); // Start loading animation
        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert(
                'Success',
                'A password reset email has been sent to your email address.',
                [{ text: 'OK', onPress: () => router.push('login') }]
            );
        } catch (error) {
            let errorMessage = 'Something went wrong. Please try again.';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No user found with this email address.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'The email address is not valid.';
            }
            Alert.alert('Error', errorMessage);
        } finally {
            setLoading(false); // Stop loading animation
        }
    };

    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <Image
                className="h-full w-full absolute"
                source={require('../assets/images/background.png')}
                style={{ height: hp(95) }}
            />

            {/* Lights */}
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

            {/* Back Button */}
            <TouchableOpacity
                onPress={() => router.push('login')}
                style={{
                    position: 'absolute',
                    top: hp(5),
                    left: wp(4),
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: 10,
                    borderRadius: 30,
                    elevation: 5,
                }}
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            {/* Title and Form */}
            <View className="h-full w-full flex justify-around pt-40 pb-10">
                {/* Title */}
                <View className="flex items-center">
                    <Animated.Text
                        entering={FadeInUp.duration(1000).springify()}
                        className="text-white font-bold tracking-wider text-5xl"
                    >
                        Reset Password
                    </Animated.Text>
                </View>

                {/* Form */}
                <View className="flex items-center mx-7 space-y-11">
                    {/* Email Input */}
                    <Animated.View
                        entering={FadeInDown.duration(1000).springify()}
                        className="bg-black/5 p-5 rounded-2xl w-full"
                        style={{ marginBottom: 15 }}
                    >
                        <TextInput
                            placeholder="Enter your email"
                            placeholderTextColor="gray"
                            className="text-black"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        {emailError ? (
                            <Text className="text-red-500 text-sm mt-1">{emailError}</Text>
                        ) : null}
                    </Animated.View>

                    {/* Reset Password Button */}
                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify()}
                        className="w-full"
                        style={{ marginBottom: 25 }}
                    >
                        <TouchableOpacity
                            className="w-full bg-rose-400 p-4 rounded-2xl flex flex-row justify-center items-center"
                            onPress={handleResetPassword}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? (
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text className="text-xl font-bold text-white text-center">Reset Password</Text>
                            )}
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}
