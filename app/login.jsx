import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import an icon library
import { login } from "../api/auth"; // Import Login API
import { useDispatch } from "react-redux"; // Import useDispatch hook

export default function Login() {
    const router = useRouter();

    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false); // State for loading animation

    // Validation function
    const validateInputs = () => {
        let isValid = true;

        // Email validation
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (password.trim().length < 6) {
            setPasswordError('Password must be at least 6 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    // Handle Login
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (!validateInputs()) {
            return;
        }

        setLoading(true); // Start loading animation
        try {
            const userData = await login(email, password, dispatch); // Pass dispatch to login
            router.push("home");
        } catch (err) {
            setEmailError('');
            setPasswordError(err.message || 'Login failed. Please try again.');
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
                onPress={() => router.push('home')} // Navigate to the Home screen
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
                        Login
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
                            placeholder="Email"
                            placeholderTextColor="gray"
                            className="text-black"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        {emailError ? (
                            <Text className="text-red-500 text-sm mt-1">{emailError}</Text>
                        ) : null}
                    </Animated.View>

                    {/* Password Input */}
                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify()}
                        className="bg-black/5 p-5 rounded-2xl w-full"
                        style={{ marginBottom: 25 }}
                    >
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="gray"
                            secureTextEntry
                            className="text-black"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        {passwordError ? (
                            <Text className="text-red-500 text-sm mt-1">{passwordError}</Text>
                        ) : null}
                    </Animated.View>

                    {/* Forgot Password Link */}
                    <TouchableOpacity
                        onPress={() => router.push('resetPassword')} // Navigate to Reset Password screen
                        className="self-end mb-5"
                    >
                        <Text className="text-rose-600 font-semibold text-sm">
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    {/* Login Button */}
                    <Animated.View
                        entering={FadeInDown.delay(400).duration(1000).springify()}
                        className="w-full"
                        style={{ marginBottom: 25 }}
                    >
                        <TouchableOpacity
                            className="w-full bg-rose-400 p-4 rounded-2xl flex flex-row justify-center items-center"
                            onPress={handleLogin}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? (
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text className="text-xl font-bold text-white text-center">Login</Text>
                            )}
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Sign Up Link */}
                    <Animated.View
                        entering={FadeInDown.delay(600).duration(1000).springify()}
                        className="flex-row justify-center"
                    >
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => router.push('signup')}>
                            <Text className="text-rose-600 font-semibold">SignUp</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}
