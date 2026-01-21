import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";

const index = () => {
  const totalBalance = 1250500;
  const [showBalance, setShowBalance] = useState(false);
  const router = useRouter();
  const gotoProfile = () => {
    router.navigate('/(tabs)/profile');
  }
  const transferPage = () => {
    router.push('/dashboard/transfer');
  }
  return (
    <ScrollView>
      <View className="px-6">
        {/* Profile and notification */}
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
              <Text className="font-montserratSemiBold text-xl">
                Alex Sterling
              </Text>
            </View>
          </View>
          <View>
            <Pressable onPress={() => alert("No Notications at the moment")}>
              <Ionicons name="notifications" size={24} />
            </Pressable>
          </View>
        </View>
        {/* Total Balance */}
        <View className="mt-10 flex-col items-center gap-2">
          <Text className="uppercase font-montserratSemiBold text-gray-400 text-lg">
            Total Balance
          </Text>
          <View className="flex-row gap-2 items-center">
            <View className="mt-2">
              <Text className="text-5xl font-montserratBold">₦</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <TextInput
                readOnly
                value={`${totalBalance.toLocaleString()}.00`}
                className="text-5xl font-montserratBold text-center mt-4"
                secureTextEntry={showBalance}
              />
              <Pressable onPress={() => setShowBalance((prev) => !prev)}>
                {showBalance ? (
                  <Ionicons name="eye-off" size={24} color={"gray"} />
                ) : (
                  <Ionicons name="eye" size={24} color={"gray"} />
                )}
              </Pressable>
            </View>
          </View>
        </View>
        {/* Transfer, paybills, Top up cards*/}
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
          <Pressable onPress={() => console.log("Pay Bills button")}>
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
              <Text className="font-montserratSemiBold text-slate-900">
                Top Up
              </Text>
            </View>
          </Pressable>
        </View>

        {/* ATM CARDS */}
        <View className="flex-col gap-2 mt-8">
          <View className="flex-row justify-between px-2">
            <Text className="font-montserratBold text-xl">My Cards</Text>
            <Link href="/login">
              <Text className="text-success-green font-montserratBold">
                View All
              </Text>
            </Link>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 200 }}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            <View className="flex-row gap-6 mt-4 bg-green-200/10 px-2 py-2 border-b border-slate-100 rounded-md">
              {/* Card 1 */}
              <View className="w-72 h-44 bg-green-900 rounded-2xl p-6 justify-between shadow-black shadow-sm">
                <View className="flex-row justify-between">
                  <Text className="text-white text-sm font-montserratBold uppercase">
                    BlinkPay Platinum
                  </Text>
                  <View className="px-1 py-1 bg-white rounded-full transform rotate-90 inline-block">
                    <Ionicons
                      name="wifi"
                      size={16}
                      color={"green"}
                      className=""
                    />
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-white text-xs font-montserratRegular">
                    Card Number
                  </Text>
                  <Text className="text-white text-lg font-montserratSemiBoldr">
                    **** **** **** 2345
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-white text-xs font-montserratRegular">
                      EXP DATE
                    </Text>
                    <Text className="text-white text-sm font-montserratSemiBold">
                      09/27
                    </Text>
                  </View>
                  <View className="bg-green-900">
                    <Image
                      source={require("../../assets/images/mastercard logo.jpeg")}
                      className="h-6 w-10 rounded-full"
                    />
                  </View>
                </View>
              </View>

              {/* Card 2 */}
              <View className="w-72 h-44 bg-dark-blue rounded-2xl p-6 justify-between shadow-black shadow-sm">
                <View className="flex-row justify-between">
                  <Text className="text-white text-sm font-montserratBold uppercase">
                    BlinkPay Savings
                  </Text>
                  <View className="px-1 py-1 bg-white rounded-full transform rotate-90 inline-block">
                    <Ionicons
                      name="wifi"
                      size={16}
                      color={"green"}
                      className=""
                    />
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-white text-xs font-montserratRegular">
                    Card Number
                  </Text>
                  <Text className="text-white text-lg font-montserratSemiBoldr">
                    **** **** **** 9652
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-white text-xs font-montserratRegular">
                      EXP DATE
                    </Text>
                    <Text className="text-white text-sm font-montserratSemiBold">
                      11/27
                    </Text>
                  </View>
                  <View className="bg-dark-blue">
                    <Image
                      source={require("../../assets/images/visa logo.png")}
                      className="w-12 h-6 rounded-full"
                    />
                  </View>
                </View>
              </View>
              {/* Card 3 */}
              <View className="w-72 h-44 bg-electric-blue rounded-2xl p-6 justify-between shadow-black shadow-sm">
                <View className="flex-row justify-between">
                  <Text className="text-white text-sm font-montserratBold uppercase">
                    BlinkPay Current
                  </Text>
                  <View className="px-1 py-1 bg-white rounded-full transform rotate-90 inline-block">
                    <Ionicons
                      name="wifi"
                      size={16}
                      color={"green"}
                      className=""
                    />
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-white text-xs font-montserratRegular">
                    Card Number
                  </Text>
                  <Text className="text-white text-lg font-montserratSemiBoldr">
                    **** **** **** 8632
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-white text-xs font-montserratRegular">
                      EXP DATE
                    </Text>
                    <Text className="text-white text-sm font-montserratSemiBold">
                      12/27
                    </Text>
                  </View>
                  <View className="bg-electric-blue">
                    <Image
                      source={require("../../assets/images/visa logo.png")}
                      className="w-12 h-6 rounded-full"
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Recent activity */}
        <View className="flex-col gap-2 mt-8">
          <View className="flex-row justify-between">
            <Text className="flex-1 font-montserratBold text-xl">Recent Activity</Text>
            <View>
              <Ionicons name="ellipsis-vertical-outline" size={24} color={"gray"} />
            </View>
          </View>
          {/* activities */}
          <View className="gap-6">
            {/* activity 1 */}
            <View className="flex-row bg-green-300/10 w-full px-4 py-4 rounded-full items-center justify-between">
                <View className="flex-row gap-4">
                  <View className="bg-red-600/20 py-3 px-3 rounded-full">
                    <Ionicons name="albums-outline" size={24} color={"red"}/>
                  </View>
                  <View className="flex-col justify-center">
                    <Text className="font-montserratBold">Youtube Subscription</Text>
                    <Text className="font-montserratRegular text-sm text-gray-500">Entertainment . 2h ago</Text>
                  </View>
                </View>
                <View>
                  <Text className="font-montserratBold text-red-600 text-lg">- ₦4,500.00</Text>
                </View>
            </View>
            {/* activity 2 */}
            <View className="flex-row bg-green-300/10 w-full px-4 py-4 rounded-full items-center justify-between">
                <View className="flex-row gap-4">
                  <View className="bg-green-600/20 py-3 px-3 rounded-full">
                    <Ionicons name="cash-outline" size={24} color={"green"}/>
                  </View>
                  <View className="flex-col justify-center">
                    <Text className="font-montserratBold">Salary Credit</Text>
                    <Text className="font-montserratRegular text-sm text-gray-500">Income . Yesterday</Text>
                  </View>
                </View>
                <View>
                  <Text className="font-montserratBold text-green-600 text-lg">+ ₦1,500,000.00</Text>
                </View>
            </View>
            {/* activity 3 */}
            <View className="flex-row bg-green-300/10 w-full px-4 py-4 rounded-full items-center justify-between">
                <View className="flex-row gap-4">
                  <View className="bg-orange-600/20 py-2 px-2 rounded-full">
                    <Ionicons name="flash" size={24} color={"orange"}/>
                  </View>
                  <View className="flex-col justify-center">
                    <Text className="font-montserratBold">Electric Bill</Text>
                    <Text className="font-montserratRegular text-sm text-gray-500">Utilities . Oct 24</Text>
                  </View>
                </View>
                <View>
                  <Text className="font-montserratBold text-red-600 text-lg">- ₦12,000.00</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
