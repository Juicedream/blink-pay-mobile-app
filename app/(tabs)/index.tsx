import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import AtmCard from "../../components/shared/AtmCard";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import BalanceHeader from "@/components/dashboard/BalanceHeader";
import ActionCards from "@/components/dashboard/ActionCards";
import RecentActivity from "@/components/shared/RecentActivity";
import ToastManager, { Toast } from 'toastify-react-native'
import * as SecureStore from "expo-secure-store"
import { fetchUserDetails } from "../api/fetchUserDetails";

const atmCardData = [
  {
    id: "1",
    type: "BlinkPay Platinum",
    iconName: "wifi",
    iconColor: "green",
    cardNumber: "**** **** **** 2345",
    cardExpDate: "09/27",
    accountType: "current",
  },
  {
    id: "2",
    type: "BlinkPay Savings",
    iconName: "wifi",
    iconColor: "blue",
    cardNumber: "**** **** **** 9539",
    cardExpDate: "10/27",
    accountType: "savings",
  },
  {
    id: "3",
    type: "BlinkPay Current",
    iconName: "wifi",
    iconColor: "orange",
    cardNumber: "**** **** **** 7422",
    cardExpDate: "11/27",
    accountType: "current",
  },
];

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

interface User {
  user: {
    name: string;
    acc_balance: number;
  };
}

const index = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<User>();
  const [refreshing, setRefreshing] = useState(false);
  // const userData = await SecureStore.getItemAsync("user_data");
  // console.log(userData)
  const goToHistory = () => {
    router.navigate('/(tabs)/history');
  }
  async function checkIfLoggedIn (){
      const token = await SecureStore.getItemAsync("jwt_token");
      if (token) {
        router.push("/(tabs)");
      } else {
        router.push("/login")
      }
    }

        async function profiledata() {
  const storedUser = await SecureStore.getItemAsync("user_data");

  if (!storedUser) {
    const token = await SecureStore.getItemAsync("jwt_token");
    const data = await fetchUserDetails(token as any);

    // save as STRING
    await SecureStore.setItemAsync(
      "user_data",
      JSON.stringify(data)
    );

    setUserData(data);
  } else {
    // parse back to object
    setUserData(JSON.parse(storedUser));
  }
}

    const onRefresh = async () => {
      setRefreshing(true)
      await SecureStore.deleteItemAsync("user_data");
      await profiledata();
      setRefreshing(false);
    }

  // useEffect(() => {
  //   setTimeout(() => {
  //     Toast.success("Welcome Back 👋");
  //   }, 100)
  // }, [])
 useEffect(() => {
    checkIfLoggedIn()
  }, []);

  useEffect(() => {

profiledata();
  },[]) 

  return (
    <ScrollView centerContent refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <View className="px-6">
        {/* Profile and notification */}
        <ProfileHeader name={userData?.user?.name as any}/>
        {/* Total Balance */}
        <BalanceHeader balance={userData?.user?.acc_balance as any}/>
        {/* Transfer, paybills, Top up cards*/}
        <ActionCards />
        {/* ATM CARDS */}
        <View className="flex-col gap-2 mt-8">
          <View className="flex-row justify-between px-2">
            <Text className="font-montserratBold text-xl">My Cards</Text>
            <Link href="/(tabs)/cards">
              <Text className="text-success-green font-montserratBold">
                View All
              </Text>
            </Link>
          </View>

          <View
            className="mt-4 bg-green-200/10 px-2 py-2 border-b border-slate-100 rounded-md"
            style={{ height: 180 }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 12,
                paddingVertical: 8,
              }}
            >
              {atmCardData.map((item) => (
                <View key={item.id} className="mr-4">
                  <AtmCard {...(item as any)} />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* Recent activity */}
        <View className="flex-col gap-2 mt-8 pb-8">
          <View className="flex-row justify-between">
            <Text className="flex-1 font-montserratBold text-xl">
              Recent Activity
            </Text>
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                style={{borderRadius: '50%', padding: 4}}
                onPress={goToHistory}
              >
                <Ionicons
                  name="ellipsis-vertical-outline"
                  size={24}
                  color={"gray"}
                />
              </TouchableHighlight>
            </View>
          </View>
          {/* activities */}
          <View className="gap-6">
            {activityData.map((activity) => (
              <RecentActivity key={activity.label} {...(activity as any)} />
            ))}
          </View>
        </View>
      </View>
      <ToastManager />
    </ScrollView>
  );
};


export default index;
