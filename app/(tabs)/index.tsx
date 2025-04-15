import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import tw from "twrnc";
import { TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CategoryButtons from "@/components/CategoryButtons";
import { categorisData } from "@/data/categoris";

const index = () => {
  // const scrollRef = useRef<TouchableOpacity[] | null []>(null)
  const [isActiveCatagori, setIsActiveCatagori] = useState(false);
  const headerHeight = useHeaderHeight();
  console.log(headerHeight);
  const activeIconGet = (data: any) => {
    const findCatagory = categorisData.find(item=> item.iconName == data )
    if (findCatagory) {
      setIsActiveCatagori(true)
    }
  };
  
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={tw`ml-4`}>
              <Image
                source={{
                  uri: "https://thelightcommittee.com/wp-content/uploads/elementor/thumbs/studio-business-headshot-of-a-black-man-in-Los-Angeles-r42uipeyz48g590yz1bhrtos4flfu3q2tuzohhy7f4.jpg",
                }}
                style={tw`w-10 h-10 rounded-lg`}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={tw`mr-4 bg-white p-2 rounded-md shadow-lg`}
            >
              <Ionicons name="notifications" size={24} color="black " />
            </TouchableOpacity>
          ),
        }}
      />
      <View
        style={[
          tw``,
          {
            paddingTop: headerHeight,
          },
        ]}
      >
        <Text style={tw`text-4xl font-black m-3`}>
          Explore the Beautiful world!
        </Text>
        <View style={tw`flex-row p-2 gap-4`}>
          <View style={tw`flex-row flex-1 items-center bg-white p-4 `}>
            <EvilIcons style={tw`p-3`} name="search" size={24} color="black" />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity
            onPress={() => {}}
            // ref={(el)=> itemRef.c}
            style={tw`bg-orange-600 p-3 rounded-lg flex items-center justify-center `}
          >
            <Ionicons name="options" size={27} color={Colors.white} />
          </TouchableOpacity>
        </View>
        {/* category button */}
        <CategoryButtons activeIconGet={activeIconGet} />
      </View>
    </>
  );
};

export default index;
