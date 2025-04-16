import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { categorisData } from "@/data/categoris";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryButtons = ({ activeIconGet }: any) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const getName = (iconName: string,) => {
    setActiveIcon(iconName);
  };

  return (
    <View>
      <Text style={tw`text-xl font-bold p-2`}>Categories</Text>
      <ScrollView horizontal>
        {categorisData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => getName(item.iconName,)}
            style={tw.style(
              activeIcon === item.iconName
                ? `bg-orange-600  rounded-md p-3 m-3 flex-row items-center gap-2`
                : `bg-white rounded-md p-3 m-3 flex-row items-center gap-2`
            )}
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={24}
              color={activeIcon === item.iconName ? "white" : "black"}
            />
            <Text
              style={tw.style(activeIcon === item.iconName && `text-white`)}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;
