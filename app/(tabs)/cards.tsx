import { View, Text, ScrollView, Image, Pressable, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import AppHeader from "@/components/shared/AppHeader";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FullAtmCard from "@/components/shared/FullAtmCard";
import RecentActivity from "@/components/shared/RecentActivity";

const activityData = [
  {
    iconName: "albums-outline",
    label: "Youtube Subscription",
    purpose: "Entertainment · 2h ago",
    amount: 4500,
    status: "debit",
    iconColor: "red",
  },
  {
    iconName: "cash-outline",
    label: "Salary Credit",
    purpose: "Income · Yesterday",
    amount: 1500000,
    status: "credit",
    iconColor: "green",
  },
  {
    iconName: "flash",
    label: "Electric Bill",
    purpose: "Utilities · Oct 24",
    amount: 12000,
    status: "debit",
    iconColor: "orange",
  },
];

const cards = () => {
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
  return (
    <ScrollView centerContent>
      <View className="px-6 pb-8 flex-col gap-5">
        <AppHeader
          backBtn={goBack}
          // secondBtn={settings}
          showSecondButton={false}
          secondBtnIcon="ellipsis-horizontal-outline"
          headerName="Card Details"
        />
        {/* atm-card */}
        <FullAtmCard />
        {/* card management */}
        <View className="flex-col gap-8">
          {/* header */}
          <Text className="font-montserratBold text-xl">Card Management</Text>
          {/* Freeze card */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row gap-4 items-center">
              <View className="px-2 py-2 bg-green-300/40 rounded-full">
                <Ionicons name="snow" size={28} color="green" />
              </View>
              <View className="flex-col">
                <Text className="font-montserratBold">Freeze Card</Text>
                <Text className="text-gray-600">
                  {freezeCard
                    ? "Resume all transactions instantly"
                    : "Pause all transactions instantly"}
                </Text>
              </View>
            </View>
            <Pressable onPress={toggleBtn}>
              <Ionicons
                name={
                  freezeCard
                    ? "lock-closed-outline"
                    : ("lock-open-outline" as any)
                }
                size={32}
                color="green"
              />
            </Pressable>
          </View>
          {/* Change pin */}
          <Pressable>
            <View className="flex-row items-center justify-between">
              <View className="flex-row gap-4 items-center">
                <View className="px-2 py-2 bg-green-300/40 rounded-full">
                  <Ionicons name="refresh-circle-outline" size={28} color="green" />
                </View>
                <View className="flex-col">
                  <Text className="font-montserratBold">Change PIN</Text>
                  <Text className="text-gray-600">
                   Update your 4-digit security code
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={32}
                color="green"
              />
            </View>
          </Pressable>
          {/* Transaction limits */}
          <Pressable>
            <View className="flex-row items-center justify-between">
              <View className="flex-row gap-4 items-center">
                <View className="px-2 py-2 bg-green-300/40 rounded-full">
                  <Ionicons name="swap-vertical-outline" size={28} color="green" />
                </View>
                <View className="flex-col">
                  <Text className="font-montserratBold">Transaction Limits</Text>
                  <Text className="text-gray-600">
                   Set daily and monthly spending caps
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={32}
                color="green"
              />
            </View>
          </Pressable>
        </View>
        {/* recent activity */}
        <View className="flex-row justify-between mt-6">
                    <Text className="flex-1 font-montserratBold text-xl">
                      Recent Activity
                    </Text>
                    <View>
                      <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        style={{borderRadius: '50%', padding: 4}}
                        onPress={() => router.push("/(tabs)/history")}
                      >
                       <Text className="text-green-800 font-montserratSemiBold">View All</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
       {activityData.map((activity) => (<RecentActivity key={activity.label} {...(activity as any)}/>))}
      </View>
    </ScrollView>
  );
};

export default cards;
