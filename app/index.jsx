import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { use } from 'react';
import { useRouter } from 'expo-router';


export default function Index() {

  const router = useRouter(); 

  return (
    <View style={{ flex: 1, position: 'relative' }}>
       
      
      {/* Background Image */}
      <Image
        source={require('../assets/images/welcome.png')}
        style={{
          position: 'absolute',
          width: wp(100),
          height: hp(100),
          resizeMode: 'cover',
        }}
      />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{
          width: wp(100),
          height: hp(70),
          position: 'absolute',
          bottom: 0,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      />

      {/* Content Above Gradient */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: hp(12),
        }}
      >
        {/* Animated Text */}
        <Animated.View
          entering={FadeIn.duration(2000)} // Enter animation
          exiting={FadeOut.duration(500)} // Exit animation
        >
          <Text
            style={{
              fontSize: hp(5),
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 1.5,
              textAlign: 'center',
            }}
          >
            Best
            <Text style={{ color: '#f43f5e' }}> Workouts</Text>
          </Text>
          <Text
            style={{
              fontSize: hp(5),
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 1.5,
              textAlign: 'center',
            }}
          >
            For you
          </Text>
        </Animated.View>

        {/* Button */}
        <Animated.View
        entering={FadeIn.delay(50).duration(2000)} // Enter animation
        exiting={FadeOut.duration(500)} // Exit animation
      >
          <TouchableOpacity

            onPress={() => router.push('home')} 
            style={{
              height: hp(7),
              width: wp(60),
              marginTop: hp(5),
              borderRadius: 50,
              borderWidth: 2, // Set border width
              borderColor: 'white', // Set border color
              justifyContent: 'center', // Center text vertically
              alignItems: 'center', // Center text horizontally
              backgroundColor: '#f43f5e', // Background color for the button
            }}
          >
            <Text
              style={{
                fontSize: hp(3),
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 1.5,
                textAlign: 'center',
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          </Animated.View>
          <StatusBar style="light" />
      </View>
    </View>
  );
}
