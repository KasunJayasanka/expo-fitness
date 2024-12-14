import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';



export default function BodyParts() {

    const router = useRouter();

    return (
      <View className="mx-4">
        <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
          Exercises
        </Text>

        <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
      />
      
      </View>
    );
  }

  const BodyPartCard = ({ item, router ,index }) => {
    return (
      <View>
        <TouchableOpacity

        onPress={() => router.push({pathname: '/exercises', params: item})}

          style={{ width: wp(44), height: wp(52) }}
          className="flex justify-end p-4 mb-4"
        >
          {/* Image */}
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[20px] absolute"
          />
  
          {/* Linear Gradient */}
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={{
              position: 'absolute', // Ensure it aligns over the image
              bottom: 0, // Align at the bottom of the card
              width: wp(44),
              height: hp(15),
              borderBottomLeftRadius: wp(5), // Match the image's border radius
              borderBottomRightRadius: wp(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
  
          {/* Text */}
          <Text
            style={{
              color: 'white',
              bottom: hp(2.3), // Align text slightly above the bottom
              left: wp(2),
              fontSize: hp(2.5),
              fontWeight: 'bold',
              textAlign: 'center',
             }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  