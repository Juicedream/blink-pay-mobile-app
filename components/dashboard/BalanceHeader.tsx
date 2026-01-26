import { View, Text, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SecureStore from "expo-secure-store";

const BalanceHeader = ({balance}:{balance:any}) => {
  const totalBalance = 987995769;
  const [showBalance, setShowBalance] = useState(false);
  async function setStateHiddenPassword () {
    const value = await SecureStore.getItemAsync("showBalance");
    if (!value || value === "false") {
      await SecureStore.setItemAsync("showBalance", "true");
      setShowBalance(true);
    } else {
      await SecureStore.setItemAsync("showBalance", "false");
      setShowBalance(false);
    }
  }
  useEffect(() => {
   setStateHiddenPassword();
  }, [])
  return (
    <View className="mt-6 flex-col items-center gap-2">
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
            value={`${Number(balance).toLocaleString() ||totalBalance.toLocaleString()}.00`}
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
  );
};

export default BalanceHeader;
