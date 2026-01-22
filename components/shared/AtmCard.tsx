import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, View } from "react-native";

type AcountType = "savings" | "current";

type AtmCardType = {
  id: string;
  type: string;
  iconName: string;
  iconColor: string;
  cardNumber: string;
  cardExpDate: string;
  accountType: AcountType;
};

const cardBgMap = {
  green : "bg-green-900",
  blue : "bg-blue-900",
  orange : "bg-orange-900",
} as const;

const AtmCard = ({
  id,
  type,
  iconName,
  iconColor,
  cardNumber,
  cardExpDate,
  accountType,
}: AtmCardType) => {
  return (
    <View
      className={`w-72 h-44 rounded-2xl p-6 justify-between shadow-black shadow-sm ${cardBgMap[iconColor as keyof typeof cardBgMap]}`}
    >
      <View className="flex-row justify-between">
        <Text className="text-white text-sm font-montserratBold uppercase">
          {type}
        </Text>
        <View className="px-1 py-1 bg-white rounded-full transform rotate-90 inline-block">
          <Ionicons name={iconName as any} size={16} color={iconColor} />
        </View>
      </View>
      <View className="gap-2">
        <Text className="text-white text-xs font-montserratRegular">
          Card Number
        </Text>
        <Text className="text-white text-lg font-montserratSemiBold">
          {cardNumber}
        </Text>
      </View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-white text-xs font-montserratRegular">
            EXP DATE
          </Text>
          <Text className="text-white text-sm font-montserratSemiBold">
            {cardExpDate}
          </Text>
        </View>
        <View className={`bg-${iconColor}-900`}>
          {accountType === "current" ? (
            <Image
              source={require("../../assets/images/mastercard logo.jpeg")}
              className="h-6 w-10 rounded-full"
            />
          ) : (
            <Image
              source={require("../../assets/images/visa logo.png")}
              className="w-12 h-6 rounded-full"
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default AtmCard;
