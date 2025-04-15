import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View } from "react-native";
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: tw`border-t-0 pt-0 h-15`,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999",
        headerTransparent: true

       
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="controller-fast-forward" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={tw`bg-orange-600 h-10 w-12 flex items-center justify-center rounded-lg  text-white `}>
              <FontAwesome name="search" size={24} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bookmarks" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
