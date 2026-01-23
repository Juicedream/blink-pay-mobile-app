import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import AppHeader from "@/components/shared/AppHeader";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SuccessTransactionMessage = () => {
  const router = useRouter();
  return (
    <ScrollView centerContent>
      <AppHeader
        backBtn={() => router.navigate("/dashboard/transfer")}
        headerName="Transaction Status"
      />
      <View className="flex-col items-center mt-4 bg-dark-blue py-6 px-6 h-full">
        <View className="bg-green-300/40 px-6 py-6 rounded-full">
          <View className="px-4 py-4 rounded-full bg-green-700">
            <Ionicons name="flash" size={52} color={"white"} />
          </View>
        </View>
        <Text className="mt-4 text-white font-montserratBold text-3xl">
          Transfer Successful
        </Text>
        <Text className="text-center px-24 font-robotoRegular mt-4 text-gray-500 text-lg">
          Your money is on its way
        </Text>
        <Text className="text-green-500 text-4xl font-montserratBold mt-4 shadow-black shadow-sm">₦ 1,320,887.00</Text>
        <View className="mt-8 w-full px-6 py-10 bg-slate-100 flex-col gap-2 rounded-2xl shadow-green-500/10 shadow-lg">
          <View className="flex-row justify-between">
            <View className="flex-row gap-4">
              <Pressable>
                <View className="size-14 rounded-full border-cyan-400 border items-center">
                  {/* profile image */}
                 <View className="px-4 py-4 rounded-full bg-green-700/30">
                    <Text className="text-green-700 text-xl font-robotoBold">AS</Text>
                 </View>
                </View>
              </Pressable>
              <View>
                <Text className="font-montserratSemiBold text-xl">
                  Alex Sterling
                </Text>
                <Text className="font-montserratRegular text-gray-500">
                  ....9832 . Chase Bank
                </Text>
              </View>
            </View>
            <View>
              <Pressable>
                <Ionicons name="shield-checkmark-outline" size={18} color="green" />
              </Pressable>
            </View>
          </View>
          <View className="flex-row items-center justify-between mt-5">
            <View className="flex-row gap-2 items-center">
              <Ionicons name="calendar" size={12} />
              <Text className="font-robotoRegular text-md">Date & Time:</Text>
            </View>
            <View className="flex-row items-center gap-2">
              {/* <Ionicons name="person-circle" size={14} color="green" /> */}
              <Text className="font-montserratSemiBold text-lg">
                Oct 24, 2023 . 10:45 AM
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-row gap-2 items-center">
              <Text>#</Text>
              <Text className="font-robotoRegular text-md">Reference:</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="font-montserratSemiBold text-lg">
                BP-98234105
              </Text>
              <Ionicons name="copy" size={14} color="green" />
            </View>
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-row gap-2 items-center">
              <Ionicons name="calendar" size={12} />
              <Text className="font-robotoRegular text-md">Date & Time:</Text>
            </View>
            <View className="flex-row items-center gap-2">
              {/* <Ionicons name="person-circle" size={14} color="green" /> */}
              <Text className="font-montserratSemiBold text-lg">
                Oct 24, 2023 . 10:45 AM
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-14 flex-col gap-8 w-full items-center">
          <Pressable onPress={() => router.navigate("/(tabs)")}>
            <View className="flex-row gap-2 bg-green-700/80 w-full px-40 py-6 items-center rounded-full shadow-white shadow-xl">
              <Ionicons name="home" size={18} color={"white"} />
              <Text className="text-white font-robotoSemiBold text-xl">
                Back to Home
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => alert("Can't download reciept at the moment")}
          >
            <View className="flex-row gap-2 bg-white w-full px-36 py-6 items-center rounded-full shadow-white shadow-xl">
              <Ionicons name="download" size={18} color={"green"} />
              <Text className="text-green-700 font-robotoSemiBold text-xl">
                Download Reciept
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SuccessTransactionMessage;
