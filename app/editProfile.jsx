import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getUserFromStorage } from '../api/auth';
import { saveUserData } from '../api/fireStore';
import { auth } from '../firebaseConfig'; // Firebase auth instance
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

export default function EditProfile() {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [updatedData, setUpdatedData] = useState({});
    const [showPasswordSection, setShowPasswordSection] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [passwordError, setPasswordError] = useState(''); // Error message for password handling

    // Load user data
    React.useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getUserFromStorage();
            if (currentUser) {
                setUser(currentUser);
                setUpdatedData(currentUser);
            }
        };
        fetchUser();
    }, []);

    const handleSaveProfile = async () => {
        setLoading(true); // Start loading

        try {
            // Save updated data to Firestore
            await saveUserData(user.id, updatedData);
            Alert.alert('Success', 'Profile updated successfully!');
            router.push('profile'); // Navigate back
        } catch (error) {
            Alert.alert('Error', `Failed to update profile: ${error.message}`);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleSavePassword = async () => {
        setPasswordError(''); // Clear previous error
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setPasswordError('Passwords do not match!');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters!');
            return;
        }

        setLoading(true); // Start loading

        try {
            const currentUser = auth.currentUser;

            if (!currentUser) {
                setPasswordError('No user is currently logged in.');
                return;
            }

            // Re-authenticate the user with their current password
            const credential = EmailAuthProvider.credential(
                currentUser.email,
                passwordData.currentPassword
            );

            await reauthenticateWithCredential(currentUser, credential);

            // Update the user's password
            await updatePassword(currentUser, passwordData.newPassword);
            Alert.alert('Success', 'Password updated successfully!');
            setShowPasswordSection(false);
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setPasswordError('Current password is incorrect.');
            } else {
                setPasswordError( 'Failed to update password.');
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <StatusBar style="light" />
            <ScrollView className="h-full bg-white">
                <View className="h-full px-6 pt-10 bg-white">
                    {/* Back Button and Title */}
                    <View className="flex-row items-center justify-center mb-6">
                        {/* Back Button */}
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{
                                backgroundColor: 'rgba(220, 38, 38, 0.7)',
                                padding: 10,
                                borderRadius: 30,
                                elevation: 5,
                                position: 'absolute',
                                left: 0,
                            }}
                        >
                            <Ionicons name="arrow-back" size={24} color="#000" />
                        </TouchableOpacity>

                        {/* Title */}
                        <Animated.View entering={FadeInUp.duration(1000).springify()}>
                            <Text className="text-4xl font-bold text-center text-rose-600">Edit Profile</Text>
                        </Animated.View>
                    </View>

                   

                     {/* First Name */}
                     <Animated.View entering={FadeInDown.duration(1000).springify()} className="mb-4">
                     <Text className="text-gray-600 font-semibold mb-2">First Name</Text>
                     <TextInput
                         placeholder="First Name"
                         value={updatedData.firstName}
                         onChangeText={(text) => setUpdatedData({ ...updatedData, firstName: text })}
                         className="border bg-gray-50 p-4 rounded-xl"
                     />
                 </Animated.View>

                 {/* Last Name */}
                 <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="mb-4">
                     <Text className="text-gray-600 font-semibold mb-2">Last Name</Text>
                     <TextInput
                         placeholder="Last Name"
                         value={updatedData.lastName}
                         onChangeText={(text) => setUpdatedData({ ...updatedData, lastName: text })}
                         className="border bg-gray-50 p-4 rounded-xl"
                     />
                 </Animated.View>

                 {/* Email */}
                 <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="mb-6">
                     <Text className="text-gray-600 font-semibold mb-2">Email</Text>
                     <TextInput
                         placeholder="Email"
                         value={updatedData.email}
                         onChangeText={(text) => setUpdatedData({ ...updatedData, email: text })}
                         className="border bg-gray-50 p-4 rounded-xl"
                     />
                 </Animated.View>

                    {/* Save Profile Button */}
                    <Animated.View entering={FadeInUp.duration(1000).springify()} className="mb-6">
                        <TouchableOpacity
                            onPress={handleSaveProfile}
                            className="bg-rose-500 p-4 rounded-xl flex-row justify-center items-center"
                        >
                            {loading ? (
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text className="text-white text-center text-lg font-bold">
                                    Save Profile
                                </Text>
                            )}
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Edit Password Section */}
                    {!showPasswordSection ? (
                        <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
                            <TouchableOpacity
                                onPress={() => setShowPasswordSection(true)}
                                className="bg-gray-300 p-4 rounded-xl"
                            >
                                <Text className="text-gray-800 text-center text-lg font-semibold">
                                    Edit Password
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                    ) : (
                        <>
                            <Text className="text-2xl font-bold mt-6 mb-5 text-rose-600">
                                Change Password
                            </Text>

                            {/* Current Password */}
                            <Text className="text-gray-600 font-semibold mb-2">Current Password</Text>
                            <TextInput
                                placeholder="Current Password"
                                secureTextEntry
                                value={passwordData.currentPassword}
                                onChangeText={(text) =>
                                    setPasswordData({ ...passwordData, currentPassword: text })
                                }
                                className="border bg-gray-50 p-4 rounded-xl mb-4"
                            />

                            {/* New Password */}
                            <Text className="text-gray-600 font-semibold mb-2">New Password</Text>
                            <TextInput
                                placeholder="New Password"
                                secureTextEntry
                                value={passwordData.newPassword}
                                onChangeText={(text) =>
                                    setPasswordData({ ...passwordData, newPassword: text })
                                }
                                className="border bg-gray-50 p-4 rounded-xl mb-4"
                            />

                            {/* Confirm Password */}
                            <Text className="text-gray-600 font-semibold mb-2">Confirm Password</Text>
                            <TextInput
                                placeholder="Confirm Password"
                                secureTextEntry
                                value={passwordData.confirmPassword}
                                onChangeText={(text) =>
                                    setPasswordData({ ...passwordData, confirmPassword: text })
                                }
                                className="border bg-gray-50 p-4 rounded-xl mb-2"
                            />

                            {/* Error Message */}
                            {passwordError ? (
                                <Text className="text-red-500 mb-4">{passwordError}</Text>
                            ) : null}

                            {/* Save Password Button */}
                            <TouchableOpacity
                                onPress={handleSavePassword}
                                className="bg-green-500 p-4 rounded-xl mb-6 flex-row justify-center items-center"
                            >
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <Text className="text-white text-center text-lg font-bold">
                                        Save Password
                                    </Text>
                                )}
                            </TouchableOpacity>

                            {/* Cancel Password Edit */}
                            <TouchableOpacity
                                onPress={() => setShowPasswordSection(false)}
                                className="bg-gray-300 p-4 rounded-xl"
                            >
                                <Text className="text-gray-800 text-center text-lg font-semibold">
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
