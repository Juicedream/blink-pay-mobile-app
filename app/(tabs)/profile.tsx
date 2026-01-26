import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import AppHeader from "@/components/shared/AppHeader";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ToastManager, { Toast } from "toastify-react-native";
import * as SecureStore from "expo-secure-store"

const profile = () => {
  const [freezeCard, setFreezeCard] = useState(false);
  const router = useRouter();
  const toggleBtn = () => {
    if (freezeCard) {
      setFreezeCard(false);
    } else {
      setFreezeCard(true);
    }
    console.log(freezeCard);
  };
  const goBack = () => {
    router.back();
  };
  const logout = async () => {
    await SecureStore.deleteItemAsync("jwt_token");
    router.push("/login");
    Toast.success("Logged out successfully!")
  };
  return (
    <ScrollView centerContent>
      <View className="px-6 pb-8 flex-col gap-5">
        <AppHeader
          backBtn={goBack}
          // secondBtn={settings}
          showSecondButton={false}
          secondBtnIcon="ellipsis-horizontal-outline"
          headerName="Profile"
        />
        {/* Profile picture */}
        <View className="mt-2 flex-col items-center gap-4">
          <View className="px-1 py-1 bg-slate-100 rounded-full shadow-black shadow-sm relative">
            <Image
              source={require("../../assets/images/avatars.png")}
              className="w-20 h-20 bg-slate-800 rounded-full"
            />
            <View className="absolute py-1 px-1 bg-dark-blue rounded-full right-0 -bottom-2">
              <Ionicons name="camera" size={16} color="white" />
            </View>
          </View>
          <View className="flex-col gap-1 items-center">
            <Text className="font-montserratBold text-2xl">Alex Sterling</Text>
            <Text className="text-lg text-blue-500 font-montserratSemiBold">
              @alex_blink
            </Text>
          </View>
          <View className="py-2 px-8 bg-blue-500/20 rounded-md">
            <Text className="text-lg font-montserratSemiBold text-blue-700">
              Change Photo
            </Text>
          </View>
        </View>
        {/* Account Seetings */}
        <View className="flex-col gap-8 mt-4">
          {/* header */}
          <Text className="font-montserratSemiBold text-lg text-gray-500">
            ACCOUNT SETTINGS
          </Text>
          {/* Personal Information */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-5 items-center">
              <View className="px-2 py-2 bg-blue-300/40 rounded-md">
                <Ionicons name="person" size={20} color="blue" />
              </View>
              <View className="flex-col">
                <Text className="font-montserratSemiBold text-xl">
                  Personal Information
                </Text>
              </View>
            </View>
            <Pressable onPress={toggleBtn}>
              <Ionicons name="chevron-forward-outline" size={22} color="gray" />
            </Pressable>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-5 items-center">
              <View className="px-2 py-2 bg-blue-300/40 rounded-md">
                <Ionicons name="shield" size={20} color="blue" />
              </View>
              <View className="flex-col">
                <Text className="font-montserratSemiBold text-xl">
                  Security & Privacy
                </Text>
                <Text className="text-md text-gray-500">
                  Biometrics, PIN & Passwords
                </Text>
              </View>
            </View>
            <Pressable>
              <Ionicons name="chevron-forward-outline" size={22} color="gray" />
            </Pressable>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-5 items-center">
              <View className="px-2 py-2 bg-blue-300/40 rounded-md">
                <Ionicons name="layers-outline" size={20} color="blue" />
              </View>
              <View className="flex-col">
                <Text className="font-montserratSemiBold text-xl">
                  Linked Bank Accounts
                </Text>
              </View>
            </View>
            <Pressable>
              <Ionicons name="chevron-forward-outline" size={22} color="gray" />
            </Pressable>
          </View>
        </View>
        <View className="flex-col gap-8 mt-4">
          {/* header */}
          <Text className="font-montserratSemiBold text-lg text-gray-500">
            MORE
          </Text>
          {/* Help & support */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-5 items-center">
              <View className="px-2 py-2 bg-blue-300/40 rounded-md">
                <Ionicons name="help-circle-outline" size={20} color="blue" />
              </View>
              <View className="flex-col">
                <Text className="font-montserratSemiBold text-xl">
                  Help & Support
                </Text>
              </View>
            </View>
            <Pressable>
              <Ionicons name="chevron-forward-outline" size={22} color="gray" />
            </Pressable>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-5 items-center">
              <View className="px-2 py-2 bg-blue-300/40 rounded-md">
                <Ionicons name="shield-half-outline" size={20} color="blue" />
              </View>
              <View className="flex-col">
                <Text className="font-montserratSemiBold text-xl">Legal</Text>
              </View>
            </View>
            <Pressable>
              <Ionicons name="chevron-forward-outline" size={22} color="gray" />
            </Pressable>
          </View>
        </View>
        {/* recent activity */}
        <View className="flex-col items-center mt-10 gap-8">
          <Pressable className="bg-white shadow-black shadow-sm py-5 w-full rounded-xl" onPress={logout}>
            <View className="flex-row items-center justify-center gap-4">
              <Ionicons name="log-out-outline" size={32} color="red" />
              <Text className="text-xl text-red-500 font-montserratSemiBold">
                Log Out
              </Text>
            </View>
          </Pressable>
          <Text className="font-montserratRegular text-md">
            Blink Pay v2.4.1 (Build 82)
          </Text>
        </View>
      </View>
      <ToastManager />
    </ScrollView>
  );
};

export default profile;
