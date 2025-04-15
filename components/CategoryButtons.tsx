import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { categorisData } from "@/data/categoris";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryButtons = () => {
  return (
    <View>
      <Text style={tw`text-xl font-bold p-2`}>Categories</Text>
      <ScrollView horizontal>
        {categorisData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => {}} style={tw`bg-white rounded-md p-3 m-3 flex-row items-center gap-2`}>
            <MaterialCommunityIcons name={item.iconName as any} size={24} color="black" />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );   
};

export default CategoryButtons;