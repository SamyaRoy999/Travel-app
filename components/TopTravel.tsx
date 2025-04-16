import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const TopTravelData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmdZy7i30h7n6b7GRNA5vJV_hdQGwUyu8_g&s",
    title: "Hollday Travel Agency",
    reating: 4.7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcwNVTFx_-b_Sp0yGEGDK-KTGXko-uKGgyA&s",
    title: "Hollday Travel Agency",
    reating: 4.7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTVW7qIPLFJ_alveDA1xU-P0mGXH0CF98Fw&s",
    title: "Hollday Travel Agency",
    reating: 4.7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgaO6nFJvATIKR5WHEvqpd9cbrTv-SV4OFQ&s",
    title: "Hollday Travel Agency",
    reating: 4.7,
  },
];

const TopTravel = () => {
  return (
    <View>
      <Text style={tw`text-xl font-bold p-2`}>Top Travel Groups</Text>
      <View>
        <FlatList
          horizontal
          data={TopTravelData}
          renderItem={({ item }) => (
            <View style={tw`bg-white p-1 m-2 rounded-lg flex-row items-center`}>
              <Image
                source={{ uri: item.image }}
                style={tw`h-36 w-32 rounded-lg m-2`}
              />
              <View>
                <Text style={tw`text-base font-semibold mb-1`}>{item.title}</Text>
                <View style={tw`flex-row items-center gap-2`}>
                  <AntDesign
                    name="star"
                    size={24}
                    style={tw`text-orange-600`}
                  />
                  <Text style={tw`text-base font-semibold`}>{item.reating} </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TopTravel;
