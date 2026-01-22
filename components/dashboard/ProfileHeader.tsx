import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const ProfileHeader = () => {
  const router = useRouter();
  const gotoProfile = () => {
    router.navigate("/(tabs)/profile");
  };
  return (
    <View className="flex-row justify-between">
      <View className="flex-row gap-4">
        <Pressable onPress={gotoProfile}>
          <View className="size-14 rounded-full bg-orange-300 border-cyan-400 border items-center">
            {/* profile image */}
            <Image
              source={require("../../assets/images/avatars.png")}
              className="size-12 rounded-full"
            />
          </View>
        </Pressable>
        <View>
          <Text className="font-montserratRegular text-gray-500">
            Welcome back,
          </Text>
          <Text className="font-montserratSemiBold text-xl">Alex Sterling</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => alert("No Notications at the moment")}>
          <Ionicons name="notifications" size={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileHeader;
