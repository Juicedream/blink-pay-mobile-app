import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import AppHeader from "@/components/shared/AppHeader";
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

const activityData2 = [
  {
    iconName: "person-outline",
    label: "Transfer From Babe❤️",
    purpose: "Gift · 2h ago",
    amount: 4500000,
    status: "credit",
    iconColor: "green",
  },
  {
    iconName: "bag-outline",
    label: "Jumia Shopping",
    purpose: "Shopping",
    amount: 34000,
    status: "credit",
    iconColor: "green",
  },
  {
    iconName: "globe-outline",
    label: "Remote Salary",
    purpose: "Income",
    amount: 73923023,
    status: "credit",
    iconColor: "orange",
  },
];

const history = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const tabs = ["All", "Inflow", "Outflow", "Cards"];
  const [actionTabs, setActionTabs] = useState({
    all: 0,
    Inflow: -1,
    outflow: -1,
    cards: -1,
  }) as any;
  console.log(searchQuery);
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const goBack = () => {
    router.back();
  };
  const settings = () => {
    alert("Something is supposed to work");
  };
  const changeState = (item: any) => {
    let tab = item.toLowerCase();

    setActionTabs({
      all: -1,
      inflow: -1,
      outflow: -1,
      cards: -1,
      [tab]: 0,
    });
  };
  return (
    <ScrollView centerContent>
      <View className="px-4 pb-8">
        {/* Header */}
        <AppHeader
          backBtn={goBack}
          secondBtn={settings}
          showSecondButton={true}
          secondBtnIcon="ellipsis-horizontal-outline"
        />
        {/* search input */}
        <View className="w-full mt-5">
          <View className="relative">
            <TextInput
              placeholder="Search transactions..."
              onChangeText={onChangeSearch}
              value={searchQuery}
              className="border border-gray-300 rounded-full px-14 py-2 text-2xl bg-white shadow-black shadow-sm"
            />
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={{ borderRadius: "50%", padding: 4 }}
              onPress={() => console.log(`Searching for ${searchQuery}`)}
              className="absolute flex items-center px-4 py-3"
            >
              <Ionicons name="search" size={25} color="green" />
            </TouchableHighlight>
          </View>
        </View>
        {/* action tabs */}
        <View className="flex-row mt-8 justify-around">
          {tabs.map((tab, index) => (
            <Pressable key={index} onPress={() => changeState(tab.toLowerCase())}>
              <View className={`py-3 px-5 ${actionTabs[tab.toLowerCase()] === 0 ? "bg-green-700" : "bg-white"} rounded-full shadow-black shadow-sm`}>
                <Text className={`text-xl ${actionTabs[tab.toLowerCase()] === 0 ? "text-white" : "text-black"}`}>{tab}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        {/* Today */}
        <View className="flex-col gap-2 mt-8 bg-white">
          <View className="flex-row justify-between">
            <Text className="flex-1 text-gray-500 font-montserratBold text-xl mb-3">
              Today
            </Text>
            
          </View>
          {/* activities */}
          <View className="gap-6 border-b border-slate-100 pb-4 shadow-black shadow-sm">
            {actionTabs['all'] === 0 && activityData.map((activity) => (
              <RecentActivity key={activity.label} {...(activity as any)} />
            ))}
            {actionTabs['inflow'] === 0 && activityData2.map((activity) => (
              <RecentActivity key={activity.label} {...(activity as any)} />
            ))}
          </View>
        </View>
        {/* Yesterday */}
        <View className="flex-col gap-2 mt-8 bg-white">
          <View className="flex-row justify-between">
            <Text className="flex-1 text-gray-500 font-montserratBold text-xl mb-3">
              Yesterday
            </Text>
            
          </View>
          {/* activities */}
          <View className="gap-6 border-b border-slate-100 pb-4 shadow-black shadow-sm">
            {activityData.map((activity) => (
              <RecentActivity key={activity.label} {...(activity as any)} />
            ))}
          </View>
        </View>
        {/* January 12, 2026 */}
        <View className="flex-col gap-2 mt-8 bg-white">
          <View className="flex-row justify-between">
            <Text className="flex-1 text-gray-500 font-montserratBold text-xl mb-3">
              January 12, 2026
            </Text>
            
          </View>
          {/* activities */}
          <View className="gap-6 border-b border-slate-100 pb-4 shadow-black shadow-sm">
            {activityData.map((activity) => (
              <RecentActivity key={activity.label} {...(activity as any)} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default history;
