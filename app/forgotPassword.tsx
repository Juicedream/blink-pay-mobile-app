import { Link } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView centerContent>
      <View className=" flex w-full h-full items-center justify-center">
        <View className="bg-dark-blue p-3 rounded-2xl shadow-black shadow-md">
          <Ionicons name="flash-sharp" size={52} color="white" />
        </View>
        <View className="flex-row items-center mt-6">
          <Text className="font-robotoSemiBold text-5xl">Blink </Text>
          <Text className="font-robotoBold text-5xl text-blue-500">Pay</Text>
        </View>
        <View className="mt-5 justify-center w-[60%]">
          <Text className="text-center text-xl font-robotoRegular text-gray-400">
            Kindly include your email, if it exist in our database we will send an email.
          </Text>
          <View className="w-full flex flex-col mt-12 gap-1 justify-center">
            <Text className="font-robotoSemiBold px-2">Email</Text>
            <TextInput
              placeholder="e.g JohnDoe@gmail.com"
              className="border border-slate-300 px-4 py-3 rounded-full shadow-sm bg-white"
              autoFocus
              keyboardType="email-address"
            />
          </View>
        </View>
        <View className="mt-12 bg-dark-blue w-[60%] py-4 px-2 rounded-full">
          <Pressable
            onPress={() => alert("Ok")}
            className="flex-row items-center justify-center gap-2"
          >
            <Text className="text-center text-gray-100 font-montserratBold text-xl">
              Reset
            </Text>
            {/* <Ionicons name="arrow-forward-outline" size={24} color="white" /> */}
          </Pressable>
        </View>
        <View className="flex-row mt-6">
          <Text className="font-montserratRegular text-gray-800">
            Remember your credentials?{" "}
          </Text>
          <Link href="/login">
            <Text className="text-blue-500 font-robotoSemiBold">Login</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
