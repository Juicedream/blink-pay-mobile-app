import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const ActionCards = () => {
  const router = useRouter();
  const transferPage = () => {
    router.push("/dashboard/transfer");
  };
  return (
    <View className="flex-row gap-4 mt-10 justify-evenly">
      <Pressable onPress={transferPage}>
        <View className="flex-col size-32 bg-dark-blue items-center justify-center rounded-xl gap-3 shadow-black shadow-sm">
          <View className="px-4 py-4 bg-success-green rounded-full">
            <Ionicons name="send" color={"white"} size={22} />
          </View>
          <Text className="font-montserratSemiBold text-slate-100">
            Transfer
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log("Top Up button")}>
        <View className="flex-col size-32 bg-white items-center justify-center rounded-xl gap-3 shadow-black shadow-sm">
          <View className="px-4 py-4 bg-blue-700/10 rounded-full">
            <Ionicons name="receipt-outline" color={"green"} size={22} />
          </View>
          <Text className="font-montserratSemiBold text-slate-900">
            Pay Bills
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log("Top Up button")}>
        <View className="flex-col size-32 bg-white items-center justify-center rounded-xl gap-3 shadow-black shadow-sm">
          <View className="px-4 py-4 bg-blue-700/10 rounded-full">
            <Ionicons name="add-circle" color={"green"} size={22} />
          </View>
          <Text className="font-montserratSemiBold text-slate-900">Top Up</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ActionCards;
