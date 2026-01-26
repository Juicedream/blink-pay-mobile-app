import { Link } from "expo-router";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Background } from "@react-navigation/elements";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [selected, setSelected] = useState("");

  const accountTypes = [
    { key: "1", value: "Savings" },
    { key: "2", value: "Current" }
  ];
  return (
    <ScrollView centerContent>
      <View className="w-full h-full items-center mt-8">
        <View className="bg-dark-blue p-3 rounded-2xl shadow-black shadow-md">
          <Ionicons name="flash-sharp" size={52} color="white" />
        </View>
        <View className="flex-row items-center mt-6">
          <Text className="font-robotoSemiBold text-3xl">
            Create a Blink Pay Account{" "}
          </Text>
          {/* <Text className="font-robotoBold text-5xl text-blue-500">
          Pay
        </Text> */}
        </View>
        <View className="mt-5 justify-center w-[60%]">
          <Text className="text-center text-xl font-robotoRegular text-gray-400">
            Join Blink Pay for seamless transactions and secure card management
          </Text>
          <View className="w-full flex flex-col mt-12 gap-8 justify-center">
            <View className="relative">
              <Text className="font-robotoSemiBold px-2 mb-2">Full Name</Text>
              <TextInput
                placeholder="e.g John Doe"
                className="border border-slate-300 px-10 py-3 rounded-full shadow-sm bg-slate-100"
                autoFocus
              />
              <Ionicons
                name="person"
                size={18}
                color={"gray"}
                className="top-[54%] left-3 absolute"
              />
            </View>
            <View className="relative">
              <Text className="font-robotoSemiBold px-2 mb-2">Email</Text>
              <TextInput
                placeholder="e.g JohnDoe@gmail.com"
                className="border border-slate-300 px-10 py-3 rounded-full shadow-sm bg-slate-100"
                keyboardType="email-address"
              />
              <Ionicons
                name="mail"
                size={18}
                color={"gray"}
                className="top-[55%] left-3 absolute"
              />
            </View>
            <View>
              <Text className="font-robotoSemiBold px-2 mb-2">Account Type</Text>
              <View className="bg-slate-100 shadow-black shadow-sm rounded-2xl">
              <SelectList
                setSelected={(val: any) => setSelected(val)}
                data={accountTypes}
                save="value"
                />
            </View>
            </View>
            <View className="relative">
              <Text className="font-robotoSemiBold px-2 mb-2">Password</Text>
              <TextInput
                placeholder="••••••••••••••••"
                className="border border-slate-300 px-10 py-3 rounded-full shadow-sm bg-slate-100"
                secureTextEntry={showPassword}
              />
              <Pressable
                className="absolute right-3 top-[52%]"
                onPress={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <Ionicons name="eye" size={22} color={"gray"} />
                ) : (
                  <Ionicons name="eye-off" size={22} color={"gray"} />
                )}
              </Pressable>
              <Ionicons
                name="lock-open"
                size={18}
                color={"gray"}
                className="top-[55%] left-3 absolute"
              />
            </View>
           
          </View>
        </View>
        <View className="mt-12 bg-success-green w-[60%] py-4 px-2 rounded-full">
          <Pressable
            onPress={() => alert("Ok")}
            className="flex-row items-center justify-center gap-2"
          >
            <Text className="text-center text-gray-100 font-montserratBold text-xl">
              Register
            </Text>
            <Ionicons name="arrow-forward-outline" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-row mt-6">
          <Text className="font-montserratRegular text-gray-800">
            Already have an account?{" "}
          </Text>
          <Link href="/login">
            <Text className="text-success-green font-robotoSemiBold">
              Log in
            </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
