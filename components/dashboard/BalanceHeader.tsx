import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const BalanceHeader = () => {
  const totalBalance = 1250500;
  const [showBalance, setShowBalance] = useState(false);
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
  );
};

export default BalanceHeader;
