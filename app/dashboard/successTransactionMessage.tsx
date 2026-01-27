import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "@/components/shared/AppHeader";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { showAccountInfo } from "../api/singleTransfer";
interface DATA {
  msg: string;
  amount: number;
  receiver_name: string;
  receiver_acc_number: number;
  narration: string;
  tran_details: {
    account_id: string;
  };
}

const SuccessTransactionMessage = () => {
  const router = useRouter();
  const [data, setData] = useState<DATA>();
  const date = new Date();
  const todaysDate = date.toUTCString();
  useEffect(() => {
    async function getSavedData() {
      const token = await SecureStore.getItemAsync("jwt_token");
      let errorResponse = await SecureStore.getItemAsync("response");
      errorResponse = JSON.parse(errorResponse as any);
      let saved = await SecureStore.getItemAsync("saved");
      saved = JSON.parse(saved as any);
      const { receiver_acc_number, sender_pin, amount, narration } =
        saved as any;
      console.log({ saved });
      const response = await showAccountInfo(
        receiver_acc_number as any,
        token as any,
      );
      let name = response.account_info.name;
      let updatedData = {
        ...(saved as any),
        ...(errorResponse as any),
        receiver_name: name,
      };
      setData(updatedData);
      setTimeout(async () => {
        await SecureStore.deleteItemAsync("response");https://www.google.com/search?sca_esv=b51a820206a0f7d2&rlz=1C5AJCO_enNG1192NG1192&aep=48&prmd=ivns&sxsrf=ANbL-n7u0J9LFaeqe1x068O2qFZQwtLqdQ:1769526193471&source=lnms&sa=X&ved=2ahUKEwiV3Lrh_quSAxWTV0EAHbHyOggQ0pQJegQIBRAI
        await SecureStore.deleteItemAsync("saved");
        console.log("cleared all")
      }, 3000);

    }
    getSavedData();
  }, []);
  console.log(data);
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
        <Text className="text-green-500 text-4xl font-montserratBold mt-4 shadow-black shadow-sm">
          ₦ {data?.amount.toLocaleString()}
        </Text>
        <View className="mt-8 w-full px-6 py-10 bg-slate-100 flex-col gap-2 rounded-2xl shadow-green-500/10 shadow-lg">
          <View className="flex-row justify-between">
            <View className="flex-row gap-4">
              <Pressable>
                <View className="size-14 rounded-full border-cyan-400 border items-center">
                  {/* profile image */}
                  <View className="px-4 py-4 rounded-full bg-green-700/30">
                    <Text className="text-green-700 text-xl font-robotoBold">
                      AS
                    </Text>
                  </View>
                </View>
              </Pressable>
              <View>
                <Text className="font-montserratSemiBold text-xl">
                  {data?.receiver_name}
                </Text>
                <Text className="font-montserratRegular text-gray-500">
                  ....{`${String(data?.receiver_acc_number).slice(6)}`} . Blink
                  Pay Bank
                </Text>
              </View>
            </View>
            <View>
              <Pressable>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={18}
                  color="green"
                />
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
                {todaysDate}
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
                {data?.tran_details.account_id.slice(0, 10)}
              </Text>
              <Ionicons name="copy" size={14} color="green" />
            </View>
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-row gap-2 items-center">
              <Ionicons name="calendar" size={12} />
              <Text className="font-robotoRegular text-md">Narration:</Text>
            </View>
            <View className="flex-row items-center gap-2">
              {/* <Ionicons name="person-circle" size={14} color="green" /> */}
              <Text className="font-montserratSemiBold text-lg">
                {data?.narration}
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
