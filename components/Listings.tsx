import {
  View,
  FlatList,
  Text,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TouristPlace } from "@/types/Listing";
import tw from "twrnc";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listing: any[];
};

const Listings = ({ listing }: Props) => {
  const renderItems: ListRenderItem<TouristPlace> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}` as any } asChild>
        <TouchableOpacity>
          <View style={tw`bg-white p-2 m-1 rounded-lg`}>
            <Image
              style={tw`h-52 w-52 rounded-lg m-3  `}
              source={{ uri: item.image }}
            />
            <View
              style={tw`absolute bottom-24 right-11 bg-orange-600 p-3 rounded-full border-2 border-white `}
            >
              <Feather name="bookmark" size={24} color="white" />
            </View>
            <Text style={tw`text-lg font-bold p-3 `}>{item.name}</Text>
            <View style={tw`flex-row justify-between p-2 `}>
              <View style={tw`flex-row gap-2 items-center`}>
                <FontAwesome
                  name="map-marker"
                  size={26}
                  style={tw`text-orange-600`}
                />
                <Text style={tw`text-sm`}>{item.location}</Text>
              </View>
              <Text style={tw`text-lg font-bold`}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={listing}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;