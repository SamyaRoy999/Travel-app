import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import listingData from "../../data/tourist_data.json";
import { TouristPlace } from "@/types/Listing";
import tw from "twrnc";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";

const listingDetails = () => {
  const [getDetails, setGetDetails] = useState<TouristPlace | null>(null);
  const { id } = useLocalSearchParams();
  const router = useRouter();
  useEffect(() => {
    const detailsData = listingData.find((item) => item.id == id);
    setGetDetails(detailsData as any);
  }, []);

  if (!getDetails) {
    return (
      <View>
        <Text>Listing not found</Text>
      </View>
    );
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              style={tw`bg-slate-200 p-2 mt-2  rounded-lg `}
              onPress={() => router.back()}
            >
              <View style={tw`bg-white p-2  rounded-lg`}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={tw`bg-slate-200 p-2 mt-2  rounded-lg `}
              // onPress={() => router.back()}
            >
              <View style={tw`bg-white p-2  rounded-lg`}>
                <FontAwesome name="bookmark-o" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
        <View>
      {/* <ScrollView contentContainerStyle={{ paddingBottom: 150 }}> */}
          <Image source={{ uri: getDetails.image }} style={tw`h-2/3 w-full`} />
          <View style={tw`p-2 `}>
            <Text style={tw`text-3xl font-bold`}>{getDetails.name}</Text>
            <View style={tw`flex-row items-center gap-1`}>
              <Entypo
                style={tw`text-orange-600 `}
                name="location-pin"
                size={22}
              />
              <Text style={tw`text-base`}>{getDetails.location}</Text>
            </View>
          </View>
          {/* 1st icon */}
          <View style={tw`flex-row items-center justify-between m-4 `}>
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons
                name="time"
                size={22}
                style={tw`text-orange-600 bg-slate-300 rounded-lg p-1 `}
              />
              <View>
                <Text style={tw`text-base font-medium`}>Duration</Text>
                <Text>{getDetails.duration} days</Text>
              </View>
            </View>
            {/* 2nd icon */}
            <View style={tw`flex-row items-center gap-2`}>
              <FontAwesome5
                name="users"
                size={24}
                style={tw`text-orange-600 bg-slate-300 rounded-lg p-1 `}
              />
              <View>
                <Text style={tw`text-base font-medium`}>Parson</Text>
                <Text>{getDetails.duration} </Text>
              </View>
            </View>
            {/* 3rd icon */}
            <View style={tw`flex-row items-center gap-2`}>
              <Fontisto
                name="star"
                size={22}
                style={tw`text-orange-600 bg-slate-300 rounded-lg p-1 `}
              />
              <View>
                <Text style={tw`text-base font-medium`}>Rating</Text>
                <Text>{getDetails.rating}</Text>
              </View>
            </View>
          </View>
          <Text style={tw`text-lg p-2`}>{getDetails.description}</Text>
      {/* </ScrollView> */}
        </View>
      <View style={tw`p-2 flex-row gap-2 my-2`}>
        <TouchableOpacity style={tw`flex-2 rounded-lg bg-orange-600 `}>
          <Text style={tw`p-5 rounlg text-white text-center`}>BOOK NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`rounded-lg bg-slate-900 flex-1`}>
          <Text style={tw` p-5 rounlg  text-center text-white`}>
            ${getDetails.price}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default listingDetails;
