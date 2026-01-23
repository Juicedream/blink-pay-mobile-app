import { Link, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <View className="p-10 top-0 absolute">
        <Image
          className="p-10"
          source={require("../assets/images/image.png")}
        />
      </View>
      <View className="bg-gray-800/70 w-full h-full flex-1 justify-end items-center pb-20">
        <Text className="font-robotoSemiBold text-5xl mt-6 text-gray-100">
          Banking at the
        </Text>
        <Text className="font-robotoBold text-5xl text-blue-500">
          Speed of Light
        </Text>
        <View className="mt-5 justify-center w-[60%]">
          <Text className="text-center text-xl font-robotoRegular text-gray-400">
            Seamless transfers, virtual cards and effortless bill payments all
            in one place
          </Text>
          <View className="w-full flex flex-row mt-12 gap-1 justify-center">
            <View className="w-1/1 bg-gray-300/50 size-3 rounded-full"></View>
            <View className="w-1/1 bg-gray-300/50 size-3 rounded-full"></View>
            <View className="w-1/6 bg-dark-blue/70 size-3 rounded-md"></View>
          </View>
        </View>
        <View className="mt-12 bg-dark-blue w-[60%] py-4 px-2 rounded-full">
          <Pressable onPress={() => router.navigate('/(tabs)')} className="flex-row items-center justify-center gap-2">
            <Text className="text-center text-gray-100 font-montserratBold text-xl">
              Get Started
            </Text>
               <Ionicons name="arrow-forward-outline" size={24} color="white"/>
          </Pressable>
        </View>
        <View className="flex-row mt-6">
          <Text className="font-montserratRegular text-gray-200">
            Already have an account?{" "}
          </Text>
          <Link href="/login">
            <Text className="text-blue-500 font-robotoSemiBold">Log In</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
